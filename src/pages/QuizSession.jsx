import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle, XCircle, RotateCcw, Trophy, Brain } from 'lucide-react';

import { subjects } from '../data';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import { doc, updateDoc, arrayUnion, Timestamp } from 'firebase/firestore';

const QuizSession = () => {
    const { subjectId } = useParams();
    const subject = subjects.find(s => s.id === subjectId);
    const { currentUser } = useAuth();

    // State
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (subject) {
            // Aggregate all questions for this subject
            let allQs = [];
            if (subject.data && subject.data.topics) {
                subject.data.topics.forEach(topic => {
                    if (topic.interviewQuestions) {
                        allQs.push(...topic.interviewQuestions);
                    }
                });
            }

            // Shuffle and pick 10 (or fewer if not enough)
            const shuffled = allQs.sort(() => 0.5 - Math.random());
            setQuestions(shuffled.slice(0, 10));
            setLoading(false);
        }
    }, [subject]);



    const saveQuizResult = async () => {
        if (!currentUser) return;

        // Calculate the score with the *current* update included
        // (Wait, 'score' state variable hasn't updated yet for the final question if it was correct)
        // Actually, handleRate updates state, but state update is async.
        // Better to calculate final score inside handleRate or pass it.
    };

    // Refactoring handleRate to be safer with state
    const handleAnswer = (success) => {
        const newScore = success ? score + 1 : score;
        setScore(newScore);

        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setShowAnswer(false);
        } else {
            setIsFinished(true);
            saveResultToDb(newScore);
        }
    }

    const saveResultToDb = async (finalScore) => {
        if (!currentUser) return;
        try {
            const userRef = doc(db, "users", currentUser.uid);
            await updateDoc(userRef, {
                quiz_history: arrayUnion({
                    subjectId: subjectId,
                    score: finalScore,
                    total: questions.length,
                    timestamp: Timestamp.now()
                })
            });
        } catch (err) {
            console.error("Error saving score:", err);
        }
    };

    const restartQuiz = () => {
        // Reshuffle logic could go here, or just reload content
        const shuffled = [...questions].sort(() => 0.5 - Math.random());
        setQuestions(shuffled);
        setCurrentIndex(0);
        setShowAnswer(false);
        setScore(0);
        setIsFinished(false);
    };

    if (!subject) return <div className="text-white p-8">Subject not found</div>;
    if (loading) return <div className="text-white p-8">Loading Quiz...</div>;
    if (questions.length === 0) return <div className="text-white p-8">No questions available for this subject yet.</div>;

    const currentQ = questions[currentIndex];
    const progress = ((currentIndex) / questions.length) * 100;

    // --- RESULTS SCREEN ---
    if (isFinished) {
        // Calculate grade
        let message = "";
        let color = "";
        const percentage = (score / questions.length) * 100;

        if (percentage >= 80) { message = "Outstanding! L3 Ready."; color = "text-green-400"; }
        else if (percentage >= 50) { message = "Good job, but review needed."; color = "text-yellow-400"; }
        else { message = "Time to hit the docs again."; color = "text-red-400"; }

        return (
            <div className="max-w-3xl mx-auto px-4 py-12 text-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-brand-card border border-gray-700 rounded-2xl p-12 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-secondary to-brand-accent" />
                    <Trophy className={`w-24 h-24 mx-auto mb-6 ${color}`} />
                    <h2 className="text-4xl font-bold text-white mb-2">{score} / {questions.length}</h2>
                    <p className={`text-xl mb-8 ${color}`}>{message}</p>

                    <div className="flex justify-center space-x-4">
                        <Link to="/quiz" className="flex items-center px-6 py-3 bg-gray-700 text-white rounded-xl hover:bg-gray-600 transition-colors">
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Other Quizzes
                        </Link>
                        <button onClick={restartQuiz} className="flex items-center px-6 py-3 bg-brand-accent text-brand-dark font-bold rounded-xl hover:bg-opacity-90 transition-colors">
                            <RotateCcw className="w-5 h-5 mr-2" />
                            Retry
                        </button>
                    </div>
                </motion.div>
            </div>
        );
    }

    // --- QUIZ SCREEN ---
    return (
        <div className="max-w-3xl mx-auto px-4 py-8 h-[calc(100vh-100px)] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <Link to="/quiz" className="text-gray-400 hover:text-white transition-colors">
                    <ArrowLeft className="w-6 h-6" />
                </Link>
                <div className="flex flex-col items-center">
                    <span className="text-gray-400 text-sm uppercase tracking-widest">{subject.title} Quiz</span>
                    <span className="text-brand-accent font-mono text-xl">{currentIndex + 1} <span className="text-gray-600">/</span> {questions.length}</span>
                </div>
                <div className="w-6" /> {/* Spacer */}
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1 bg-gray-800 rounded-full mb-8">
                <motion.div
                    className="h-full bg-brand-accent rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                />
            </div>

            {/* Flashcard Area */}
            <div className="flex-1 flex flex-col justify-center relative perspective-1000">
                <AnimatePresence mode="wait">
                    {!showAnswer ? (
                        // QUESTION CARD
                        <motion.div
                            key="question"
                            initial={{ opacity: 0, rotateX: 90 }}
                            animate={{ opacity: 1, rotateX: 0 }}
                            exit={{ opacity: 0, rotateX: -90 }}
                            transition={{ duration: 0.3 }}
                            className="bg-brand-card border border-gray-700 rounded-2xl p-10 min-h-[400px] flex flex-col items-center justify-center text-center shadow-2xl"
                        >
                            <Brain className="w-12 h-12 text-gray-600 mb-6" />
                            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                {currentQ.question}
                            </h3>
                            <button
                                onClick={() => setShowAnswer(true)}
                                className="mt-12 px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-full font-semibold transition-all hover:scale-105"
                            >
                                Show Answer
                            </button>
                        </motion.div>
                    ) : (
                        // ANSWER CARD
                        <motion.div
                            key="answer"
                            initial={{ opacity: 0, rotateX: 90 }}
                            animate={{ opacity: 1, rotateX: 0 }}
                            exit={{ opacity: 0, rotateX: -90 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gray-800 border-2 border-brand-accent rounded-2xl p-10 min-h-[400px] flex flex-col items-center justify-center text-center shadow-2xl relative"
                        >
                            <div className="absolute top-4 right-4">
                                {currentQ.companies && currentQ.companies.map(c => (
                                    <span key={c} className="inline-block bg-brand-card text-xs text-gray-400 px-2 py-1 rounded ml-1 border border-gray-700">
                                        {c}
                                    </span>
                                ))}
                            </div>

                            <h4 className="text-gray-400 text-sm font-bold uppercase mb-4 tracking-widest">Answer</h4>
                            <div className="text-xl md:text-2xl text-white mb-10 leading-relaxed font-light">
                                {currentQ.answer}
                            </div>

                            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                                <button
                                    onClick={() => handleAnswer(false)}
                                    className="flex items-center justify-center py-4 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/50 rounded-xl transition-all"
                                >
                                    <XCircle className="w-6 h-6 mr-2" />
                                    Missed it
                                </button>
                                <button
                                    onClick={() => handleAnswer(true)}
                                    className="flex items-center justify-center py-4 bg-green-500/10 hover:bg-green-500/20 text-green-500 border border-green-500/50 rounded-xl transition-all"
                                >
                                    <CheckCircle className="w-6 h-6 mr-2" />
                                    Got it
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default QuizSession;
