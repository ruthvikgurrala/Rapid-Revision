import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { subjects } from '../data';
import { ArrowLeft, Search, Building, Filter, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const InterviewQuestionsView = () => {
    const { subjectId } = useParams();
    const subject = subjects.find(s => s.id === subjectId);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCompany, setSelectedCompany] = useState('All');
    const [selectedTopic, setSelectedTopic] = useState('All');

    if (!subject) return <div className="text-white">Subject not found</div>;

    // Aggregate questions for this subject
    let questions = [];
    if (subject.data && subject.data.topics) {
        subject.data.topics.forEach(topic => {
            if (topic.interviewQuestions) {
                topic.interviewQuestions.forEach(q => {
                    questions.push({
                        ...q,
                        topicTitle: topic.title
                    });
                });
            }
        });
    }



    // Extract Unique Companies and Topics
    const allCompanies = Array.from(new Set(questions.flatMap(q => q.companies || []))).sort();
    const allTopics = Array.from(new Set(questions.map(q => q.topicTitle))).sort();

    const filteredQuestions = questions.filter(q => {
        const matchesSearch = q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCompany = selectedCompany === 'All' || (q.companies && q.companies.includes(selectedCompany));
        const matchesTopic = selectedTopic === 'All' || q.topicTitle === selectedTopic;

        return matchesSearch && matchesCompany && matchesTopic;
    });

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
                <Link to="/interview" className="inline-flex items-center text-gray-400 hover:text-white mb-4 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Hub
                </Link>
                <h1 className="text-4xl font-bold text-white mb-2">{subject.title} Interview Questions</h1>
                <p className="text-gray-400">Master the most asked questions for {subject.title}.</p>
            </div>

            <div className="relative mb-8">
                <Search className="absolute left-4 top-3.5 text-gray-500 w-5 h-5" />
                <input
                    type="text"
                    placeholder={`Search ${subject.title} questions...`}
                    className="w-full bg-brand-card border border-gray-700 text-white pl-12 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                    <Building className="absolute left-4 top-3.5 text-gray-400 w-5 h-5 pointer-events-none" />
                    <select
                        value={selectedCompany}
                        onChange={(e) => setSelectedCompany(e.target.value)}
                        className="w-full bg-brand-card border border-gray-700 text-gray-300 pl-12 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none appearance-none cursor-pointer"
                    >
                        <option value="All">All Companies</option>
                        {allCompanies.map(c => (
                            <option key={c} value={c}>{c}</option>
                        ))}
                    </select>
                    <div className="absolute right-4 top-4 w-2 h-2 border-r-2 border-b-2 border-gray-400 transform rotate-45 pointer-events-none"></div>
                </div>

                <div className="relative flex-1">
                    <Layers className="absolute left-4 top-3.5 text-gray-400 w-5 h-5 pointer-events-none" />
                    <select
                        value={selectedTopic}
                        onChange={(e) => setSelectedTopic(e.target.value)}
                        className="w-full bg-brand-card border border-gray-700 text-gray-300 pl-12 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none appearance-none cursor-pointer"
                    >
                        <option value="All">All Topics</option>
                        {allTopics.map(t => (
                            <option key={t} value={t}>{t}</option>
                        ))}
                    </select>
                    <div className="absolute right-4 top-4 w-2 h-2 border-r-2 border-b-2 border-gray-400 transform rotate-45 pointer-events-none"></div>
                </div>
            </div>

            <div className="grid gap-6">
                {filteredQuestions.length > 0 ? (
                    filteredQuestions.map((q, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="bg-brand-card border border-gray-700 rounded-xl p-6 hover:border-brand-accent transition-all hover:shadow-lg hover:shadow-brand-accent/5"
                        >
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-brand-accent text-xs font-bold uppercase tracking-wider">
                                    {q.topicTitle}
                                </span>
                                <div className="flex space-x-1">
                                    {q.companies && q.companies.map(c => (
                                        <span key={c} className="flex items-center bg-gray-700 text-gray-300 text-[10px] px-2 py-0.5 rounded-full uppercase">
                                            <Building className="w-3 h-3 mr-1" />
                                            {c}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3">{q.question}</h3>
                            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 text-sm text-gray-300 leading-relaxed">
                                {q.answer}
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <div className="text-center py-20 text-gray-500">
                        No questions found.
                    </div>
                )}
            </div>
        </div>
    );
};

export default InterviewQuestionsView;
