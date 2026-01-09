import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, Code as CodeIcon, CheckCircle } from 'lucide-react';
import { subjects } from '../data';
import Visualizer from '../components/Visualizer';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const TopicDetail = () => {
    const { subjectId, topicId } = useParams();
    const subject = subjects.find(s => s.id === subjectId);
    const topic = subject?.data.topics.find(t => t.id === topicId);
    const [activeTab, setActiveTab] = useState('cpp'); // cpp, java, python

    if (!topic) return <div className="text-white mt-20 text-center">Topic not found</div>;

    return (
        <div className="max-w-4xl mx-auto">
            <Link to={`/subject/${subjectId}`} className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to {subject.title}
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="text-brand-accent font-mono text-sm tracking-wider uppercase">{subject.title}</span>
                <h1 className="text-4xl font-extrabold text-white mt-2 mb-8">{topic.title}</h1>

                {/* 1. Theory Section with Inline Visualizer */}
                <section className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300">
                        <p className="text-lg leading-relaxed whitespace-pre-line">{topic.content}</p>
                    </div>

                    {/* INLINE VISUALIZER */}
                    {topic.visualizerType && (
                        <div className="mt-8 bg-gray-900 border border-gray-700 rounded-xl p-6 overflow-hidden relative">
                            <div className="absolute top-4 right-4 bg-brand-accent/10 text-brand-accent px-3 py-1 rounded-full text-xs font-bold flex items-center">
                                <Play className="w-3 h-3 mr-1" /> Interactive
                            </div>
                            <div className="min-h-[16rem] flex items-center justify-center text-gray-500">
                                <Visualizer type={topic.visualizerType} />
                            </div>
                        </div>
                    )}
                </section>

                {/* 2. Code Section */}
                {topic.code && (
                    <section className="mb-12">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-bold text-white flex items-center">
                                <CodeIcon className="w-6 h-6 mr-2 text-brand-accent" />
                                Implementation
                            </h2>
                            <div className="flex space-x-2 bg-gray-800 p-1 rounded-lg">
                                {['cpp', 'java', 'python'].map(lang => (
                                    <button
                                        key={lang}
                                        onClick={() => setActiveTab(lang)}
                                        className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === lang
                                                ? 'bg-brand-accent text-brand-dark shadow-sm'
                                                : 'text-gray-400 hover:text-white'
                                            }`}
                                    >
                                        {lang === 'cpp' ? 'C++' : lang.charAt(0).toUpperCase() + lang.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl overflow-hidden border border-gray-700 shadow-2xl">
                            <SyntaxHighlighter
                                language={activeTab === 'cpp' ? 'cpp' : activeTab}
                                style={vscDarkPlus}
                                customStyle={{ margin: 0, padding: '1.5rem', background: '#0f172a' }}
                            >
                                {topic.code[activeTab] || '// No code available for this language'}
                            </SyntaxHighlighter>
                        </div>
                    </section>
                )}

                {/* 3. Interview Corner */}
                <section className="mb-20 pt-8 border-t border-gray-800">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                        <CheckCircle className="w-6 h-6 mr-2 text-green-500" />
                        Interview Corner
                    </h2>
                    <div className="grid gap-4">
                        {topic.interviewQuestions && topic.interviewQuestions.length > 0 ? (
                            topic.interviewQuestions.map((q, idx) => (
                                <div key={idx} className="bg-brand-card border border-gray-700 rounded-lg p-5">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-semibold text-white">{q.question}</h3>
                                        <div className="flex space-x-2">
                                            {q.companies && q.companies.map(c => (
                                                <span key={c} className="bg-gray-700 text-gray-300 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wide">
                                                    {c}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-gray-400 text-sm mt-2 border-t border-gray-700 pt-2">
                                        <span className="text-green-400 font-bold text-xs uppercase block mb-1">Answer Key</span>
                                        {q.answer}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 italic">No interview questions tagged for this specific topic yet.</p>
                        )}
                    </div>
                </section>

            </motion.div>
        </div>
    );
};

export default TopicDetail;
