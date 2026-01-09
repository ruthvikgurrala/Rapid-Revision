import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Briefcase, Cpu, HelpCircle, User, LogIn, Menu, X, Lightbulb } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';

const Layout = ({ children }) => {
    const location = useLocation();
    const { currentUser } = useAuth();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <nav className="bg-brand-card border-b border-gray-700 relative z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <Link to="/" className="flex items-center space-x-2">
                                <Cpu className="h-8 w-8 text-brand-accent" />
                                <span className="text-xl font-bold text-white tracking-wider">RAPID REVISION</span>
                            </Link>
                            <div className="hidden md:block ml-10">
                                <div className="flex space-x-4">
                                    <Link
                                        to="/"
                                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/') ? 'bg-brand-accent text-brand-dark' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                                            }`}
                                    >
                                        <div className="flex items-center space-x-1">
                                            <BookOpen className="w-4 h-4" />
                                            <span>Subjects</span>
                                        </div>
                                    </Link>

                                    <Link
                                        to="/interview"
                                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/interview') ? 'bg-brand-accent text-brand-dark' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                                            }`}
                                    >
                                        <div className="flex items-center space-x-1">
                                            <Briefcase className="w-4 h-4" />
                                            <span>Interview Hub</span>
                                        </div>
                                    </Link>

                                    <Link
                                        to="/quiz"
                                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/quiz') ? 'bg-brand-accent text-brand-dark' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                                            }`}
                                    >
                                        <div className="flex items-center space-x-1">
                                            <HelpCircle className="w-4 h-4" />
                                            <span>Quiz</span>
                                        </div>
                                    </Link>

                                    <Link
                                        to="/hacks"
                                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/hacks') ? 'bg-brand-accent text-brand-dark' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                                            }`}
                                    >
                                        <div className="flex items-center space-x-1">
                                            <Lightbulb className="w-4 h-4" />
                                            <span>Hacks</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className="hidden md:ml-6 md:flex md:items-center">
                                {currentUser ? (
                                    <Link
                                        to="/profile"
                                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/profile') ? 'bg-brand-accent text-brand-dark' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}
                                    >
                                        <div className="flex items-center space-x-2">
                                            <div className="w-6 h-6 rounded-full bg-brand-accent/20 flex items-center justify-center">
                                                <User className="w-4 h-4 text-brand-accent" />
                                            </div>
                                            <span>{currentUser.displayName || 'Profile'}</span>
                                        </div>
                                    </Link>
                                ) : (
                                    <Link
                                        to="/login"
                                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/login') ? 'bg-brand-accent text-brand-dark' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}
                                    >
                                        <div className="flex items-center space-x-1">
                                            <LogIn className="w-4 h-4" />
                                            <span>Log In</span>
                                        </div>
                                    </Link>
                                )}
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-gray-300 hover:text-white p-2 rounded-md"
                            >
                                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>


                {/* Mobile Menu */}
                {
                    isMobileMenuOpen && (
                        <div className="md:hidden bg-brand-card border-b border-gray-700">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link
                                    to="/"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'bg-brand-accent text-brand-dark' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}
                                >
                                    <div className="flex items-center space-x-2">
                                        <BookOpen className="w-4 h-4" />
                                        <span>Subjects</span>
                                    </div>
                                </Link>

                                <Link
                                    to="/interview"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/interview') ? 'bg-brand-accent text-brand-dark' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}
                                >
                                    <div className="flex items-center space-x-2">
                                        <Briefcase className="w-4 h-4" />
                                        <span>Interview Hub</span>
                                    </div>
                                </Link>

                                <Link
                                    to="/quiz"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/quiz') ? 'bg-brand-accent text-brand-dark' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}
                                >
                                    <div className="flex items-center space-x-2">
                                        <HelpCircle className="w-4 h-4" />
                                        <span>Quiz</span>
                                    </div>
                                </Link>

                                <Link
                                    to="/hacks"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/hacks') ? 'bg-brand-accent text-brand-dark' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}
                                >
                                    <div className="flex items-center space-x-2">
                                        <Lightbulb className="w-4 h-4" />
                                        <span>Hacks</span>
                                    </div>
                                </Link>

                                <div className="border-t border-gray-700 pt-4 pb-1">
                                    {currentUser ? (
                                        <Link
                                            to="/profile"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/profile') ? 'bg-brand-accent text-brand-dark' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}
                                        >
                                            <div className="flex items-center space-x-2">
                                                <User className="w-4 h-4" />
                                                <span>{currentUser.displayName || 'Profile'}</span>
                                            </div>
                                        </Link>
                                    ) : (
                                        <Link
                                            to="/login"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/login') ? 'bg-brand-accent text-brand-dark' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}
                                        >
                                            <div className="flex items-center space-x-2">
                                                <LogIn className="w-4 h-4" />
                                                <span>Log In</span>
                                            </div>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                }
            </nav >

            <main className="flex-grow w-full">
                {children}
            </main>

            <footer className="bg-brand-card border-t border-gray-700 mt-auto">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-gray-400 text-sm">
                        Built for Rapid Revision • OS • DBMS • CN • OOPs • Behavioral
                    </p>
                </div>
            </footer>
        </div >
    );
};

export default Layout;
