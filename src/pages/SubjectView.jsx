import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Book, Code, HelpCircle } from 'lucide-react';
import { subjects } from '../data';

const SubjectView = () => {
    const { subjectId } = useParams();
    const subject = subjects.find(s => s.id === subjectId);

    if (!subject) {
        return <div className="text-center mt-20 text-white">Subject not found</div>;
    }

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
    };

    return (
        <div>
            <div className="mb-8">
                <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-4 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Subjects
                </Link>
                <h1 className="text-4xl font-bold text-white mb-2">{subject.title}</h1>
                <p className="text-gray-400">{subject.description}</p>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                {subject.data.topics.map((topic) => (
                    <motion.div key={topic.id} variants={item}>
                        <Link to={`/subject/${subjectId}/topic/${topic.id}`} className="group block">
                            <div className="bg-brand-card border border-gray-700 rounded-xl p-6 hover:border-brand-accent transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/10">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-brand-accent transition-colors">
                                        {topic.title}
                                    </h3>
                                    <div className={`p-2 rounded-lg bg-gray-800 text-gray-400 group-hover:bg-brand-accent group-hover:text-brand-dark transition-colors`}>
                                        <Book className="w-5 h-5" />
                                    </div>
                                </div>

                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                    {topic.content.substring(0, 100)}...
                                </p>

                                <div className="flex items-center space-x-4 text-xs font-medium text-gray-500">
                                    <div className="flex items-center">
                                        <Code className="w-3 h-3 mr-1" />
                                        Code Examples
                                    </div>
                                    <div className="flex items-center">
                                        <HelpCircle className="w-3 h-3 mr-1" />
                                        Interview Qs
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default SubjectView;
