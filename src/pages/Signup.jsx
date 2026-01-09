import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { UserPlus, Mail, Lock, User, AlertCircle } from 'lucide-react';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { signup, updateUserProfile } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            return setError("Passwords do not match");
        }

        try {
            setError('');
            setLoading(true);

            // 1. Create Auth User
            const userCredential = await signup(email, password);
            const user = userCredential.user;

            // 2. Update Profile Display Name
            await updateUserProfile(name);

            // 3. Create Firestore User Document
            await setDoc(doc(db, "users", user.uid), {
                displayName: name,
                email: email,
                createdAt: serverTimestamp(),
                completed_topics: [] // Initialize empty progress
            });

            navigate('/profile');
        } catch (err) {
            setError('Failed to create account: ' + err.message);
        }
        setLoading(false);
    };

    return (
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md bg-brand-card border border-gray-700 rounded-2xl p-8 shadow-2xl"
            >
                <div className="text-center mb-8">
                    <div className="bg-brand-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <UserPlus className="w-8 h-8 text-brand-secondary" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">Create Account</h2>
                    <p className="text-gray-400 mt-2">Join to save your revision progress</p>
                </div>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-xl mb-6 flex items-center">
                        <AlertCircle className="w-5 h-5 mr-2" />
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-400 text-sm font-medium mb-2">Display Name</label>
                        <div className="relative">
                            <User className="absolute left-4 top-3.5 text-gray-500 w-5 h-5" />
                            <input
                                type="text"
                                required
                                className="w-full bg-gray-900 border border-gray-700 text-white pl-12 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-brand-secondary focus:border-transparent outline-none"
                                placeholder="John Doe"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-400 text-sm font-medium mb-2">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-3.5 text-gray-500 w-5 h-5" />
                            <input
                                type="email"
                                required
                                className="w-full bg-gray-900 border border-gray-700 text-white pl-12 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-brand-secondary focus:border-transparent outline-none"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-400 text-sm font-medium mb-2">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-3.5 text-gray-500 w-5 h-5" />
                            <input
                                type="password"
                                required
                                className="w-full bg-gray-900 border border-gray-700 text-white pl-12 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-brand-secondary focus:border-transparent outline-none"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-400 text-sm font-medium mb-2">Confirm Password</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-3.5 text-gray-500 w-5 h-5" />
                            <input
                                type="password"
                                required
                                className="w-full bg-gray-900 border border-gray-700 text-white pl-12 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-brand-secondary focus:border-transparent outline-none"
                                placeholder="••••••••"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-brand-secondary text-white font-bold py-3 rounded-xl hover:bg-opacity-90 transition-colors disabled:opacity-50"
                    >
                        {loading ? 'Creating Account...' : 'Sign Up'}
                    </button>
                </form>

                <div className="mt-6 text-center text-gray-400">
                    Already have an account?{' '}
                    <Link to="/login" className="text-brand-secondary hover:text-white font-medium">
                        Log In
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Signup;
