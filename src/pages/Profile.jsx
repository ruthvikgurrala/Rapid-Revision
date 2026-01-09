import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, LogOut, CheckSquare, Clock, Trophy, Share2 } from 'lucide-react';
import { subjects } from '../data';

const Profile = () => {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('stats'); // 'stats', 'history', 'topics'
    const [isEditingTopics, setIsEditingTopics] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            if (currentUser) {
                const docRef = doc(db, "users", currentUser.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUserData(docSnap.data());
                }
            }
            setLoading(false);
        };
        fetchData();
    }, [currentUser]);

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch {
            console.error("Failed to log out");
        }
    };

    const toggleTopicCompletion = async (topicId) => {
        if (!userData) return;

        const currentTopics = userData.completed_topics || [];
        let newTopics;

        if (currentTopics.includes(topicId)) {
            newTopics = currentTopics.filter(id => id !== topicId);
        } else {
            newTopics = [...currentTopics, topicId];
        }

        setUserData({ ...userData, completed_topics: newTopics }); // Optimistic update

        await updateDoc(doc(db, "users", currentUser.uid), {
            completed_topics: newTopics
        });
    };

    if (loading) return <div className="text-white p-8">Loading Profile...</div>;
    if (!currentUser) return <div className="text-white p-8">Please log in to view profile.</div>;

    // Calculate Stats
    const totalQuizzes = userData?.quiz_history?.length || 0;
    const avgScore = totalQuizzes > 0
        ? (userData.quiz_history.reduce((acc, q) => acc + (q.score / q.total) * 100, 0) / totalQuizzes).toFixed(1)
        : 0;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <div className="bg-brand-card border border-gray-700 rounded-2xl p-8 mb-8 flex flex-col md:flex-row items-center justify-between shadow-xl">
                <div className="flex items-center mb-6 md:mb-0">
                    <div className="bg-gradient-to-r from-brand-accent to-blue-500 w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                        {currentUser.displayName ? currentUser.displayName[0].toUpperCase() : <User />}
                    </div>
                    <div className="ml-6">
                        <h1 className="text-3xl font-bold text-white">{currentUser.displayName}</h1>
                        <p className="text-gray-400">{currentUser.email}</p>
                    </div>
                </div>
                <button
                    onClick={handleLogout}
                    className="flex items-center px-6 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/50 rounded-xl transition-all"
                >
                    <LogOut className="w-5 h-5 mr-2" />
                    Log Out
                </button>
            </div>

            {/* Tabs */}
            <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
                {['stats', 'history', 'topics'].map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-2 rounded-full font-medium transition-all capitalize whitespace-nowrap ${activeTab === tab
                            ? 'bg-brand-accent text-brand-dark'
                            : 'bg-gray-800 text-gray-400 hover:text-white'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                {activeTab === 'stats' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-brand-card border border-gray-700 rounded-xl p-6">
                            <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Total Quizzes</h3>
                            <div className="text-4xl font-bold text-white flex items-center">
                                <Trophy className="w-8 h-8 text-yellow-500 mr-3" />
                                {totalQuizzes}
                            </div>
                        </div>
                        <div className="bg-brand-card border border-gray-700 rounded-xl p-6">
                            <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Avg Score</h3>
                            <div className="text-4xl font-bold text-white flex items-center">
                                <Share2 className="w-8 h-8 text-green-500 mr-3" />
                                {avgScore}%
                            </div>
                        </div>
                        <div className="bg-brand-card border border-gray-700 rounded-xl p-6">
                            <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Topics Completed</h3>
                            <div className="text-4xl font-bold text-white flex items-center">
                                <CheckSquare className="w-8 h-8 text-blue-500 mr-3" />
                                {userData?.completed_topics?.length || 0}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'history' && (
                    <div className="bg-brand-card border border-gray-700 rounded-xl overflow-hidden">
                        {userData?.quiz_history && userData.quiz_history.length > 0 ? (
                            <div className="divide-y divide-gray-800">
                                {userData.quiz_history.slice().reverse().map((quiz, idx) => (
                                    <div key={idx} className="p-6 flex items-center justify-between hover:bg-gray-800/50 transition-colors">
                                        <div>
                                            <h4 className="text-white font-bold text-lg mb-1">{subjects.find(s => s.id === quiz.subjectId)?.title || quiz.subjectId}</h4>
                                            <p className="text-gray-500 text-sm flex items-center">
                                                <Clock className="w-3 h-3 mr-1" />
                                                {new Date(quiz.timestamp?.toDate()).toLocaleDateString()}
                                            </p>
                                        </div>
                                        <div className={`px-4 py-2 rounded-lg font-bold ${(quiz.score / quiz.total) >= 0.8 ? 'bg-green-500/20 text-green-400' :
                                            (quiz.score / quiz.total) >= 0.5 ? 'bg-yellow-500/20 text-yellow-400' :
                                                'bg-red-500/20 text-red-400'
                                            }`}>
                                            {quiz.score} / {quiz.total}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="p-12 text-center text-gray-500">No quizzes taken yet. Go practice!</div>
                        )}
                    </div>
                )}

                {activeTab === 'topics' && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center bg-brand-card border border-gray-700 p-4 rounded-xl">
                            <div>
                                <h3 className="text-white font-bold text-lg">Topic Tracker</h3>
                                <p className="text-gray-400 text-sm">Track your revision progress manually.</p>
                            </div>
                            <button
                                onClick={() => setIsEditingTopics(!isEditingTopics)}
                                className={`px-4 py-2 rounded-lg font-bold transition-all ${isEditingTopics
                                        ? 'bg-green-500 text-white hover:bg-green-600'
                                        : 'bg-brand-accent text-brand-dark hover:bg-white'
                                    }`}
                            >
                                {isEditingTopics ? 'Done Editing' : 'Edit Progress'}
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {subjects.map(subject => (
                                <div key={subject.id} className="bg-brand-card border border-gray-700 rounded-xl p-6">
                                    <h3 className="text-white font-bold text-xl mb-4 border-b border-gray-800 pb-2">{subject.title}</h3>
                                    <div className="space-y-3">
                                        {subject.data?.topics?.map(topic => (
                                            <label key={topic.id} className={`flex items-center space-x-3 group ${isEditingTopics ? 'cursor-pointer' : 'cursor-default'}`}>
                                                <div className="relative">
                                                    <input
                                                        type="checkbox"
                                                        disabled={!isEditingTopics}
                                                        className={`w-5 h-5 border-2 rounded bg-transparent transition-all appearance-none ${isEditingTopics
                                                                ? 'border-gray-600 checked:bg-brand-accent checked:border-brand-accent'
                                                                : 'border-gray-700 checked:bg-gray-600 checked:border-gray-600'
                                                            }`}
                                                        checked={userData?.completed_topics?.includes(topic.id) || false}
                                                        onChange={() => toggleTopicCompletion(topic.id)}
                                                    />
                                                    <CheckSquare className={`w-3.5 h-3.5 absolute top-1 left-0.5 pointer-events-none transition-opacity ${userData?.completed_topics?.includes(topic.id)
                                                            ? (isEditingTopics ? 'text-brand-dark opacity-100' : 'text-gray-400 opacity-100')
                                                            : 'opacity-0'
                                                        }`} />
                                                </div>
                                                <span className={`transition-colors ${userData?.completed_topics?.includes(topic.id)
                                                        ? 'text-gray-500 line-through'
                                                        : (isEditingTopics ? 'text-gray-300 group-hover:text-white' : 'text-gray-500')
                                                    }`}>
                                                    {topic.title}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default Profile;
