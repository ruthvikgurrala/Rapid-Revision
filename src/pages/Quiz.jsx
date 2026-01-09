import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Globe, Box, Layers, BookOpen, Clock } from 'lucide-react';
import { subjects } from '../data';

const iconMap = {
    'os': Server,
    'dbms': Database,
    'cn': Globe,
    'oops': Box,
    'system-design': Layers,
    'behavioral': BookOpen
};

const Quiz = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-white mb-4">Quiz Zone</h1>
                <p className="text-gray-400">Test your knowledge. Select a subject to take a rapid-fire quiz.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {subjects.map((subject, index) => {
                    const Icon = iconMap[subject.id] || Box;
                    return (
                        <motion.div
                            key={subject.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {/* For now, just a card. Link later to /quiz/:id */}
                            <div className="bg-brand-card p-6 rounded-2xl border border-gray-700 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 cursor-pointer h-full flex flex-col relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Icon className="w-24 h-24" />
                                </div>
                                <div className="flex items-center justify-between mb-4 relative z-10">
                                    <div className={`p-3 rounded-lg bg-opacity-20 ${subject.color}`}>
                                        <Icon className={`w-8 h-8 ${subject.textColor}`} />
                                    </div>
                                    <div className="bg-gray-800 px-2 py-1 rounded text-xs text-gray-300 flex items-center">
                                        <Clock className="w-3 h-3 mr-1" />
                                        15 Mins
                                    </div>
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-2 relative z-10">{subject.title} Quiz</h2>
                                <p className="text-gray-400 mb-4 relative z-10">Evaluate your understanding of {subject.title} concepts.</p>
                                <div className="mt-auto relative z-10">
                                    <a href={`/quiz/${subject.id}`} className="block w-full text-center py-2 rounded-lg bg-gray-800 text-white font-bold group-hover:bg-green-600 transition-colors">
                                        Start Quiz
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Quiz;
