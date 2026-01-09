import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Code as CodeIcon, CheckCircle, ChevronLeft, ChevronRight, Lightbulb, Scale, AlertTriangle, ArrowRight } from 'lucide-react';
import { subjects } from '../data';
import Visualizer from '../components/Visualizer';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import { doc, setDoc, arrayUnion } from 'firebase/firestore';

const TopicContent = () => {
    const { subjectId, topicId } = useParams();
    const { currentUser } = useAuth();
    const subject = subjects.find(s => s.id === subjectId);
    const topicIndex = subject?.data.topics.findIndex(t => t.id === topicId);
    // Handle case where topic might be undefined if ID changes
    const topic = subject?.data.topics[topicIndex];
    const [activeTab, setActiveTab] = useState('cpp');

    React.useEffect(() => {
        const markTopicComplete = async () => {
            if (currentUser && topicId) {
                try {
                    const userRef = doc(db, "users", currentUser.uid);
                    await setDoc(userRef, {
                        completed_topics: arrayUnion(topicId)
                    }, { merge: true });
                } catch (err) {
                    console.error("Error auto-tracking topic:", err);
                }
            }
        };
        markTopicComplete();
    }, [currentUser, topicId]);

    if (!topic) return <div className="text-white p-8">Select a topic from the sidebar</div>;

    // Navigation Logic
    const nextTopic = subject.data.topics[topicIndex + 1];
    const prevTopic = subject.data.topics[topicIndex - 1];

    return (
        <motion.div
            key={topicId} // key prop forces re-render/animation on topic change
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
        >
            {/* Breadcrumb could go here */}
            <div className="font-mono text-sm text-brand-accent mb-4">
                {subject.title} / {topic.title}
            </div>
            <h1 className="text-4xl font-extrabold text-white mb-6 uppercase tracking-tight">
                {topic.title}
            </h1>

            {/* --- NEW SCHEMA: TL;DR Section --- */}
            {topic.oneLinerAnswer && (
                <div className="mb-10 bg-gradient-to-r from-brand-accent/10 to-transparent border-l-4 border-brand-accent p-6 rounded-r-lg">
                    <h3 className="text-brand-accent font-bold mb-2 flex items-center uppercase tracking-wider text-sm">
                        <Lightbulb className="w-4 h-4 mr-2" />
                        The 30-Second Answer
                    </h3>
                    <p className="text-lg text-white font-medium leading-relaxed">
                        "{topic.oneLinerAnswer}"
                    </p>
                </div>
            )}

            {/* --- NEW SCHEMA: Why & Tradeoffs --- */}
            {(topic.why || topic.tradeoffs) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {topic.why && (
                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                            <h3 className="text-blue-400 font-bold mb-3 flex items-center">
                                <ArrowRight className="w-4 h-4 mr-2" />
                                Why it exists?
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {topic.why}
                            </p>
                        </div>
                    )}
                    {topic.tradeoffs && (
                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                            <h3 className="text-yellow-400 font-bold mb-3 flex items-center">
                                <Scale className="w-4 h-4 mr-2" />
                                Tradeoffs & Alternatives
                            </h3>
                            <ul className="space-y-2">
                                {topic.tradeoffs.map((t, i) => (
                                    <li key={i} className="flex items-start text-sm text-gray-300">
                                        <span className="mr-2 text-yellow-500/50">•</span>
                                        {t}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}

            {/* --- NEW SCHEMA: Bottlenecks --- */}
            {topic.failureCases && (
                <div className="mb-12 bg-red-900/10 border border-red-900/30 p-6 rounded-xl">
                    <h3 className="text-red-400 font-bold mb-4 flex items-center uppercase tracking-wider text-sm">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        What Breaks First? (Failure Cases)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {topic.failureCases.map((fail, i) => (
                            <div key={i} className="flex items-start bg-red-900/20 p-3 rounded-lg border border-red-900/20">
                                <span className="text-red-500 font-bold mr-3">{i + 1}</span>
                                <span className="text-gray-300 text-sm">{fail}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="prose prose-invert prose-lg max-w-none text-gray-300 mb-12">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        h1: ({ node, ...props }) => <h1 className="text-3xl font-bold text-white mt-8 mb-4 border-b border-gray-700 pb-2" {...props} />,
                        h2: ({ node, ...props }) => <h2 className="text-2xl font-bold text-brand-accent mt-8 mb-4" {...props} />,
                        h3: ({ node, ...props }) => <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-3" {...props} />,
                        ul: ({ node, ...props }) => <ul className="list-disc list-outside ml-6 space-y-2 mb-4" {...props} />,
                        ol: ({ node, ...props }) => <ol className="list-decimal list-outside ml-6 space-y-2 mb-4" {...props} />,
                        li: ({ node, ...props }) => <li className="text-gray-300" {...props} />,
                        p: ({ node, ...props }) => <p className="leading-7 text-gray-300 mb-4 text-justify" {...props} />,
                        strong: ({ node, ...props }) => <strong className="font-bold text-white" {...props} />,
                        table: ({ node, ...props }) => <div className="overflow-x-auto my-6"><table className="min-w-full divide-y divide-gray-700 border border-gray-700 rounded-lg" {...props} /></div>,
                        th: ({ node, ...props }) => <th className="px-4 py-3 bg-gray-800 text-left text-xs font-medium text-gray-300 uppercase tracking-wider" {...props} />,
                        td: ({ node, ...props }) => <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-400 border-t border-gray-700" {...props} />,
                        blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-brand-accent pl-4 italic text-gray-400 my-4" {...props} />,
                        code: ({ node, inline, className, children, ...props }) => {
                            return inline ? (
                                <code className="bg-gray-800 text-brand-accent px-1.5 py-0.5 rounded text-sm font-mono" {...props}>{children}</code>
                            ) : (
                                <code className="block bg-gray-900 p-4 rounded-lg text-sm font-mono overflow-x-auto mb-4" {...props}>{children}</code>
                            )
                        }
                    }}
                >
                    {topic.content}
                </ReactMarkdown>
            </div>

            {/* --- NEW SCHEMA: Real World Usage --- */}
            {topic.realWorldUsage && (
                <div className="mb-12 border-t border-gray-800 pt-8">
                    <h3 className="text-gray-400 font-bold mb-4 uppercase tracking-wider text-xs">
                        Seen In The Wild
                    </h3>
                    <p className="text-gray-400 italic">
                        {topic.realWorldUsage}
                    </p>
                </div>
            )}

            {/* Visualizer */}
            {/* Visualizer Section */}
            {(topic.visualizerType || topic.image) && (
                <div className="mb-12 glass-panel rounded-xl overflow-hidden relative shadow-2xl border-0">
                    <div className="absolute top-0 right-0 p-4 bg-gradient-to-bl from-brand-accent/20 to-transparent rounded-bl-3xl z-10">
                        <div className="flex items-center text-brand-accent font-bold text-xs uppercase tracking-wider">
                            {topic.visualizerType ? (
                                <><Play className="w-4 h-4 mr-2" /> Interactive</>
                            ) : (
                                <><span className="w-4 h-4 mr-2">📷</span> Diagram</>
                            )}
                        </div>
                    </div>
                    <div className="min-h-[20rem] flex items-center justify-center p-8 bg-black/20">
                        {topic.visualizerType ? (
                            <Visualizer type={topic.visualizerType} />
                        ) : (
                            <img
                                src={topic.image}
                                alt={topic.title}
                                className="max-w-full max-h-[30rem] object-contain rounded-lg shadow-lg"
                            />
                        )}
                    </div>
                </div>
            )}

            {/* Code Examples */}
            {/* Code Examples */}
            {topic.code && (
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-4 glass-panel p-2 rounded-lg">
                        <div className="flex items-center px-4">
                            <CodeIcon className="w-5 h-5 mr-2 text-brand-accent" />
                            <span className="font-bold text-white">Implementation</span>
                        </div>
                        <div className="flex space-x-1">
                            {['cpp', 'java', 'python'].map(lang => (
                                <button
                                    key={lang}
                                    onClick={() => setActiveTab(lang)}
                                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === lang
                                        ? 'bg-brand-accent/20 text-brand-accent shadow-sm ring-1 ring-brand-accent/50'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {lang === 'cpp' ? 'C++' : lang.charAt(0).toUpperCase() + lang.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-700/50">
                        <SyntaxHighlighter
                            language={activeTab === 'cpp' ? 'cpp' : activeTab}
                            style={vscDarkPlus}
                            customStyle={{ margin: 0, padding: '1.5rem', background: '#0a0a0a' }}
                        >
                            {topic.code[activeTab] || '// No code available'}
                        </SyntaxHighlighter>
                    </div>
                </div>
            )}

            {/* Interview Corner */}
            <div className="glass-panel rounded-2xl p-8 mb-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-500 to-transparent"></div>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500" />
                    Interview Frequency
                </h2>
                <div className="space-y-4">
                    {topic.interviewQuestions && topic.interviewQuestions.map((q, idx) => (
                        <div key={idx} className="glass-card p-5 rounded-xl border-l-[3px] border-l-transparent hover:border-l-green-500 transition-all">
                            <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                                <h3 className="text-white font-semibold flex-grow leading-tight">{q.question}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {q.companies && q.companies.map(c => (
                                        <span key={c} className="bg-black/40 text-gray-300 text-[10px] px-2 py-1 rounded border border-gray-700/50 uppercase tracking-wider font-medium">
                                            {c}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="text-gray-400 text-sm leading-relaxed pl-1">
                                {q.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Navigation */}
            <div className="flex justify-between border-t border-gray-800 pt-8 mt-12">
                {prevTopic ? (
                    <Link to={`/subject/${subjectId}/${prevTopic.id}`} className="flex items-center text-gray-400 hover:text-white group">
                        <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        <div>
                            <div className="text-xs text-gray-500 uppercase">Previous</div>
                            <div className="font-medium">{prevTopic.title}</div>
                        </div>
                    </Link>
                ) : <div />}

                {nextTopic ? (
                    <Link to={`/subject/${subjectId}/${nextTopic.id}`} className="flex items-center text-brand-accent hover:text-white group text-right">
                        <div>
                            <div className="text-xs text-brand-accent/70 uppercase">Next</div>
                            <div className="font-medium">{nextTopic.title}</div>
                        </div>
                        <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                ) : <div />}
            </div>
        </motion.div>
    );
};

export default TopicContent;
