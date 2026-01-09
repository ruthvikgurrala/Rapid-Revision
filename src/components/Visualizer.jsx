import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, Server, Laptop, Shield, Box, Database, ArrowRight, Activity, Layers } from 'lucide-react';

// --- OS Visualizers ---

const ProcessStateVisualizer = () => {
    const states = ['New', 'Ready', 'Running', 'Terminated'];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % states.length);
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex items-center justify-between w-full max-w-lg relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-700 -z-10" />
            {states.map((state, idx) => (
                <motion.div
                    key={state}
                    animate={{
                        scale: current === idx ? 1.2 : 1,
                        backgroundColor: current === idx ? '#38bdf8' : '#1e293b',
                        borderColor: current === idx ? '#38bdf8' : '#475569'
                    }}
                    className="w-20 h-20 rounded-full border-4 flex items-center justify-center text-xs font-bold text-white z-10 transition-colors duration-500 shadow-xl"
                >
                    {state}
                    {current === idx && idx === 2 && (
                        <motion.div
                            layoutId="cpu"
                            className="absolute -top-10 text-brand-accent font-mono bg-black/50 px-2 py-1 rounded"
                        >
                            CPU
                        </motion.div>
                    )}
                </motion.div>
            ))}
        </div>
    );
};

const MultiprogrammingVisualizer = () => {
    const [activeJob, setActiveJob] = useState('A');

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveJob(prev => prev === 'A' ? 'B' : 'A');
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col items-center gap-8 w-full max-w-md">
            <div className="flex justify-between w-full">
                <div className={`p-4 rounded-xl border-2 transition-all duration-500 ${activeJob === 'A' ? 'border-green-500 bg-green-500/10 scale-105 shadow-[0_0_20px_rgba(34,197,94,0.3)]' : 'border-gray-700 opacity-50'}`}>
                    <div className="font-bold mb-2">Job A</div>
                    <div className="text-xs">{activeJob === 'A' ? 'Executing...' : 'Waiting for I/O'}</div>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-brand-dark border-2 border-brand-accent rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                        <Activity className="text-brand-accent animate-pulse" />
                    </div>
                    <div className="text-xs mt-2 text-brand-accent">CPU</div>
                </div>

                <div className={`p-4 rounded-xl border-2 transition-all duration-500 ${activeJob === 'B' ? 'border-green-500 bg-green-500/10 scale-105 shadow-[0_0_20px_rgba(34,197,94,0.3)]' : 'border-gray-700 opacity-50'}`}>
                    <div className="font-bold mb-2">Job B</div>
                    <div className="text-xs">{activeJob === 'B' ? 'Executing...' : 'Waiting for I/O'}</div>
                </div>
            </div>
            <div className="text-sm text-gray-400 text-center glass-panel px-4 py-2 rounded-full">
                Context Switch triggers on <strong>I/O Wait</strong>
            </div>
        </div>
    )
}

// --- DBMS Visualizers ---

const DBMSKeysVisualizer = () => {
    return (
        <div className="flex flex-col gap-4 w-full max-w-lg text-xs">
            <div className="flex gap-8 justify-center">
                {/* Students Table */}
                <div className="border border-gray-700 rounded-lg overflow-hidden">
                    <div className="bg-gray-800 p-2 font-bold text-center border-b border-gray-700">Students</div>
                    <div className="p-2 grid grid-cols-2 gap-x-4 bg-brand-card/30">
                        <span className="font-mono text-yellow-400">ID (PK)</span> <span>Name</span>
                        <div className="col-span-2 h-px bg-gray-700 my-1"></div>
                        <span className="font-mono">101</span> <span>Alice</span>
                        <span className="font-mono">102</span> <span>Bob</span>
                    </div>
                </div>

                {/* Arrow */}
                <div className="flex flex-col justify-center items-center text-gray-500">
                    <span className="text-[10px] mb-1">Referenced By</span>
                    <ArrowRight className="w-5 h-5 text-brand-accent animate-pulse" />
                </div>

                {/* Orders Table */}
                <div className="border border-gray-700 rounded-lg overflow-hidden">
                    <div className="bg-gray-800 p-2 font-bold text-center border-b border-gray-700">Orders</div>
                    <div className="p-2 grid grid-cols-2 gap-x-4 bg-brand-card/30">
                        <span className="font-mono text-blue-400">OrderID</span> <span className="text-yellow-400">StudentID (FK)</span>
                        <div className="col-span-2 h-px bg-gray-700 my-1"></div>
                        <span className="font-mono">5001</span> <span className="font-mono border border-yellow-500/50 rounded px-1 bg-yellow-500/10">101</span>
                    </div>
                </div>
            </div>
            <div className="text-center text-gray-400">
                The <span className="text-yellow-400">Foreign Key</span> (101) MUST exist in the <span className="text-yellow-400">Primary Key</span> column.
            </div>
        </div>
    )
}

const SQLJoinsVisualizer = () => {
    const [type, setType] = useState('INNER');
    const types = ['INNER', 'LEFT', 'RIGHT', 'FULL'];

    return (
        <div className="flex flex-col items-center gap-4 w-full max-w-lg">
            <div className="flex gap-2">
                {types.map(t => (
                    <button
                        key={t}
                        onClick={() => setType(t)}
                        className={`px-3 py-1 rounded text-xs transition-colors ${type === t ? 'bg-brand-accent text-brand-dark font-bold' : 'bg-gray-800 hover:bg-gray-700'}`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            <div className="relative w-48 h-32 flex items-center justify-center">
                {/* Left Circle */}
                <motion.div
                    className={`absolute left-4 w-24 h-24 rounded-full border-2 border-blue-500 mix-blend-screen transition-colors duration-500 ${['INNER', 'LEFT', 'FULL'].includes(type) ? 'bg-blue-500/50' : 'bg-transparent'}`}
                />

                {/* Right Circle */}
                <motion.div
                    className={`absolute right-4 w-24 h-24 rounded-full border-2 border-red-500 mix-blend-screen transition-colors duration-500 ${['INNER', 'RIGHT', 'FULL'].includes(type) ? 'bg-red-500/50' : 'bg-transparent'}`}
                />

                {/* Center Overlap (For Visual Clarity only, actual logic via mix-blend or controlled opacity) */}
                {type === 'INNER' && (
                    <div className="absolute w-24 h-24 flex items-center justify-center">
                        <div className="w-8 h-16 bg-purple-500/20 blur-xl"></div>
                    </div>
                )}
            </div>

            <div className="text-xs text-gray-400">
                {type === 'INNER' && "Returns matching rows only."}
                {type === 'LEFT' && "All Left rows + Matches."}
                {type === 'RIGHT' && "All Right rows + Matches."}
                {type === 'FULL' && "Everything from both."}
            </div>
        </div>
    )
}

// --- System Design Visualizers ---

const ShardingVisualizer = () => {
    const [ids, setIds] = useState([101, 202, 303, 404, 505]);

    return (
        <div className="flex flex-col items-center gap-6 w-full max-w-lg">
            <div className="flex gap-4">
                {[0, 1, 2].map(shardId => (
                    <div key={shardId} className="border border-gray-600 rounded-lg p-3 w-24 min-h-[100px] bg-gray-800/50 flex flex-col items-center">
                        <Database className="w-6 h-6 text-gray-400 mb-2" />
                        <span className="text-[10px] font-bold mb-2">Shard {shardId}</span>
                        <div className="flex flex-col gap-1 w-full text-[10px]">
                            {ids.filter(id => id % 3 === shardId).map(id => (
                                <motion.div
                                    layoutId={id}
                                    key={id}
                                    className="bg-brand-card border border-gray-600 rounded px-1 text-center"
                                >
                                    ID: {id}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-xs text-gray-400">
                Formula: <code className="bg-gray-800 px-1 rounded">Shard = ID % 3</code>. Distribution is uniform.
            </div>
        </div>
    )
}

// --- CN Visualizers ---

const OSIModelVisualizer = () => {
    const layers = ['Application', 'Presentation', 'Session', 'Transport', 'Network', 'Data Link', 'Physical'];
    return (
        <div className="flex flex-col-reverse w-48 border border-gray-700 rounded-lg overflow-hidden bg-gray-900/50">
            {layers.map((layer, i) => (
                <div key={layer} className="p-2 text-center text-xs border-b border-gray-700 last:border-none hover:bg-brand-accent/10 transition-colors cursor-default border-t first:border-t-0">
                    <span className="font-mono text-gray-500 mr-2">{7 - i}.</span>
                    {layer}
                </div>
            ))}
        </div>
    );
};

const TCPHandshakeVisualizer = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setStep((prev) => (prev + 1) % 4);
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex justify-between items-center w-full max-w-md px-8 relative h-32 bg-gray-900/30 rounded-xl border border-gray-800">
            <div className="flex flex-col items-center">
                <Laptop className="w-8 h-8 text-blue-400" />
                <span className="text-xs mt-1 text-gray-400">Client</span>
            </div>

            {/* Animated Packet */}
            <div className="flex-1 relative h-full flex items-center justify-center">
                <AnimatePresence mode='wait'>
                    {step === 1 && (
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 50, opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5 }}
                            className="absolute flex flex-col items-center z-10"
                        >
                            <ArrowRight className="text-brand-accent w-5 h-5" />
                            <span className="text-[10px] bg-gray-800 px-1 rounded border border-gray-700 text-brand-accent">SYN</span>
                        </motion.div>
                    )}
                    {step === 2 && (
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: -50, opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5 }}
                            className="absolute flex flex-col items-center z-10"
                        >
                            <ArrowRight className="text-brand-accent rotate-180 w-5 h-5" />
                            <span className="text-[10px] bg-gray-800 px-1 rounded border border-gray-700 text-brand-accent">SYN-ACK</span>
                        </motion.div>
                    )}
                    {step === 3 && (
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 50, opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5 }}
                            className="absolute flex flex-col items-center z-10"
                        >
                            <ArrowRight className="text-brand-accent w-5 h-5" />
                            <span className="text-[10px] bg-gray-800 px-1 rounded border border-gray-700 text-brand-accent">ACK</span>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="w-full h-px bg-gray-700 absolute"></div>
            </div>

            <div className="flex flex-col items-center">
                <Server className="w-8 h-8 text-purple-400" />
                <span className="text-xs mt-1 text-gray-400">Server</span>
            </div>

            <div className="absolute bottom-2 w-full text-center text-[10px] text-gray-500">
                {step === 0 && "Idle..."}
                {step === 1 && "Client sends SYN to initiate"}
                {step === 2 && "Server replies SYN-ACK"}
                {step === 3 && "Client confirms with ACK"}
            </div>
        </div>
    );
};

// --- OOPs Visualizers ---

const AccessModifierVisualizer = () => {
    const data = [
        { name: 'public', class: true, package: true, subclass: true, world: true },
        { name: 'protected', class: true, package: true, subclass: true, world: false },
        { name: 'default', class: true, package: true, subclass: false, world: false },
        { name: 'private', class: true, package: false, subclass: false, world: false }
    ];

    return (
        <div className="w-full max-w-lg overflow-hidden border border-gray-700 rounded-lg">
            <table className="w-full text-xs text-left">
                <thead className="bg-gray-800 text-gray-400 font-bold uppercase">
                    <tr>
                        <th className="p-2">Modifier</th>
                        <th className="p-2 text-center">Class</th>
                        <th className="p-2 text-center">Package</th>
                        <th className="p-2 text-center">Subclass</th>
                        <th className="p-2 text-center">World</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                    {data.map((row) => (
                        <tr key={row.name} className="hover:bg-gray-800/50 transition-colors">
                            <td className="p-2 font-mono text-brand-accent font-bold">{row.name}</td>
                            {[row.class, row.package, row.subclass, row.world].map((allowed, i) => (
                                <td key={i} className="p-2 text-center">
                                    {allowed ? (
                                        <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-500/20 text-green-400">
                                            ✓
                                        </div>
                                    ) : (
                                        <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-500/20 text-red-500">
                                            ✕
                                        </div>
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="p-2 text-[10px] text-gray-500 text-center bg-gray-900/50">
                <span className="text-green-400">✓</span> Accessible &nbsp; <span className="text-red-500">✕</span> Not Accessible
            </div>
        </div>
    );
};

// --- Wrapper ---

const Visualizer = ({ type }) => {
    if (!type) return null;

    const renderVisualizer = () => {
        switch (type) {
            case 'process-states': return <ProcessStateVisualizer />;
            case 'multiprogramming': return <MultiprogrammingVisualizer />;
            case 'osi-model': return <OSIModelVisualizer />;
            case 'tcp-handshake': return <TCPHandshakeVisualizer />;
            case 'access-modifiers': return <AccessModifierVisualizer />;

            // Newly Added
            case 'dbms-keys': return <DBMSKeysVisualizer />;
            case 'sql-joins': return <SQLJoinsVisualizer />;
            case 'sharding': return <ShardingVisualizer />;
            case 'memory-management': return <AccessModifierVisualizer />; // Reuse grid for now or simple placeholder

            // Fallbacks
            default: return (
                <div className="flex flex-col items-center justify-center p-8 text-center text-gray-400 glass-card rounded-xl">
                    <RefreshCw className="w-8 h-8 mb-4 animate-spin-slow opacity-50" />
                    <p className="font-semibold">Interactive Visualization</p>
                    <p className="text-xs mt-2 opacity-50">{type}</p>
                </div>
            );
        }
    }

    return (
        <div className="w-full h-full flex items-center justify-center p-4">
            {renderVisualizer()}
        </div>
    );
};

export default Visualizer;
