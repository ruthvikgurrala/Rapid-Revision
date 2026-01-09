import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Database, Server, Globe, Box, Layers, ArrowRight, BookOpen } from 'lucide-react';
import { subjects } from '../data';

const iconMap = {
    'os': Server,
    'dbms': Database,
    'cn': Globe,
    'oops': Box,
    'system-design': Layers,
    'behavioral': BookOpen
};

const InterviewHub = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-white mb-4">Interview Hub</h1>
                <p className="text-gray-400">Select a subject to practice questions tailored for top tech companies.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {subjects.map((subject, index) => {
                    const Icon = iconMap[subject.id] || Box;
                    return (
                        <motion.div
                            key={subject.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link to={`/interview/${subject.id}`} className="block group h-full">
                                <div className="bg-brand-card p-6 rounded-2xl border border-gray-700 hover:border-brand-accent transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/20 h-full flex flex-col">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`p-3 rounded-lg bg-opacity-20 ${subject.color}`}>
                                            <Icon className={`w-8 h-8 ${subject.textColor}`} />
                                        </div>
                                        <ArrowRight className="text-gray-500 group-hover:text-white transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-white mb-2">{subject.title}</h2>
                                    <p className="text-gray-400 mb-4">{subject.interviewQCount}+ Premium Questions</p>
                                    <div className="mt-auto">
                                        <span className="text-sm font-medium text-brand-accent">Start Practicing &rarr;</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default InterviewHub;
