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
};

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
            <div className="text-center space-y-4">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600"
                >
                    Master Computer Science Core
                </motion.h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Interactive visualizers, polyglot code snippets, and interview questions for OS, DBMS, CN, and OOPs.
                </p>
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
                            <Link to={`/subject/${subject.id}`} className="block group h-full">
                                <div className="bg-brand-card p-6 rounded-2xl border border-gray-700 hover:border-brand-accent transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/20 h-full flex flex-col">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`p-3 rounded-lg bg-opacity-20 ${subject.color}`}>
                                            <Icon className={`w-8 h-8 ${subject.textColor}`} />
                                        </div>
                                        <ArrowRight className="text-gray-500 group-hover:text-white transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-white mb-2">{subject.title}</h2>
                                    <p className="text-gray-400 mb-4 flex-grow">{subject.description}</p>
                                    <div className="text-sm font-medium text-brand-accent">
                                        {subject.topicCount} Topics • {subject.interviewQCount} Interview Qs
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    );
                })}
            </div>

            {/* Quick Access to Interview Hub */}
            <div className="mt-16 bg-gradient-to-r from-brand-card to-gray-900 rounded-2xl p-8 border border-gray-700 text-center relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-3xl font-bold text-white mb-4">Ready for the Interview?</h2>
                    <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                        Jump straight into the Interview Hub to practice company-specific questions (Google, Amazon, Microsoft) and behavioral scenarios.
                    </p>
                    <Link to="/interview" className="inline-block bg-brand-accent text-brand-dark font-bold px-8 py-3 rounded-full hover:bg-white transition-colors">
                        Go to Interview Hub
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
