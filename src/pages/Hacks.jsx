import React from 'react';
import { motion } from 'framer-motion';
import { Brain, CheckCircle, AlertTriangle, Zap, BookOpen } from 'lucide-react';

const Hacks = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-secondary">
                            The Strategy
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400">How to use Rapid Revision to actually crack interviews.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Card 1: The Loop */}
                    <div className="bg-brand-card border border-gray-700 rounded-2xl p-8 relative overflow-hidden group hover:border-brand-accent/50 transition-colors">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Brain className="w-24 h-24 text-brand-accent" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                            <Zap className="w-6 h-6 text-yellow-400 mr-2" />
                            The Learning Loop
                        </h2>
                        <ol className="space-y-4 text-gray-300">
                            <li className="flex items-start">
                                <span className="bg-gray-800 text-brand-accent font-bold px-2 py-0.5 rounded mr-3 mt-1">1</span>
                                <div>
                                    <strong className="text-white">Read Once</strong>
                                    <p className="text-sm text-gray-400">Don't memorize. Just understand the flow.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-gray-800 text-brand-accent font-bold px-2 py-0.5 rounded mr-3 mt-1">2</span>
                                <div>
                                    <strong className="text-white">Close & Speak</strong>
                                    <p className="text-sm text-gray-400">Look away. Explain it out loud like you're teaching a junior.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-gray-800 text-brand-accent font-bold px-2 py-0.5 rounded mr-3 mt-1">3</span>
                                <div>
                                    <strong className="text-white">Review Gaps</strong>
                                    <p className="text-sm text-gray-400">What did you forget? That's your only focus now.</p>
                                </div>
                            </li>
                        </ol>
                    </div>

                    {/* Card 2: The Checklist */}
                    <div className="bg-brand-card border border-gray-700 rounded-2xl p-8 relative overflow-hidden group hover:border-green-500/50 transition-colors">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <CheckCircle className="w-24 h-24 text-green-500" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                            <CheckCircle className="w-6 h-6 text-green-400 mr-2" />
                            The Answer Checklist
                        </h2>
                        <p className="text-gray-400 mb-4">Every great engineering answer covers these:</p>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-center">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                <span><strong>Why</strong> does this exist? (The problem it solves)</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                <span><strong>Tradeoffs</strong> (X vs Y, e.g., Latency vs Consistency)</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                <span><strong>Bottlenecks</strong> (Where does it break at scale?)</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                <span><strong>Alternatives</strong> (Why not something else?)</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Section: Common Bottlenecks */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                        <AlertTriangle className="w-6 h-6 text-red-400 mr-2" />
                        System Design Cheatsheet: "What Breaks?"
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-black/30 p-4 rounded-xl">
                            <h3 className="text-brand-accent font-bold mb-2">Databases</h3>
                            <ul className="text-sm text-gray-400 space-y-1">
                                <li>• Single Point of Failure (SPOF)</li>
                                <li>• Slow Reads (Need Cache?)</li>
                                <li>• Hot Partitions (Sharding?)</li>
                                <li>• Acid vs Base inconsistencies</li>
                            </ul>
                        </div>
                        <div className="bg-black/30 p-4 rounded-xl">
                            <h3 className="text-brand-accent font-bold mb-2">Network/API</h3>
                            <ul className="text-sm text-gray-400 space-y-1">
                                <li>• Latency (Distance?)</li>
                                <li>• Bandwidth limits</li>
                                <li>• Head-of-line blocking (HTTP/1.1)</li>
                                <li>• API Rate Limits</li>
                            </ul>
                        </div>
                        <div className="bg-black/30 p-4 rounded-xl">
                            <h3 className="text-brand-accent font-bold mb-2">Concurrency</h3>
                            <ul className="text-sm text-gray-400 space-y-1">
                                <li>• Race Conditions</li>
                                <li>• Deadlocks</li>
                                <li>• Cache Stampede</li>
                                <li>• Thundering Herd</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-gray-500 italic">"Your project should grow from confusion, not from theory."</p>
                </div>
            </motion.div>
        </div>
    );
};

export default Hacks;
