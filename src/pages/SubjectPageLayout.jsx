import React, { useEffect } from 'react';
import { useParams, useNavigate, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { subjects } from '../data';
import { Menu, X } from 'lucide-react';
import SidebarItem from '../components/SidebarItem';

const SubjectPageLayout = () => {
    const { subjectId, topicId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const subject = subjects.find(s => s.id === subjectId);

    // Redirect to first topic if at root /subject/:id
    useEffect(() => {
        if (subject && !topicId && subject.data.topics.length > 0) {
            navigate(`/subject/${subjectId}/${subject.data.topics[0].id}`, { replace: true });
        }
    }, [subject, topicId, navigate, subjectId]);

    if (!subject) return <div className="text-white p-8">Subject not found (Check URL)</div>;

    // Default closed on mobile, open on desktop
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    return (
        <div className="flex flex-col md:flex-row min-h-[calc(100vh-4rem)]">
            {/* Mobile Header for Sidebar */}
            <div className="md:hidden bg-brand-card border-b border-gray-700 p-4 flex items-center justify-between">
                <span className="font-bold text-white">{subject.title}</span>
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-white">
                    <Menu />
                </button>
            </div>

            {/* SIDEBAR */}
            <motion.aside
                initial={false}
                animate={{ x: isSidebarOpen ? 0 : '-100%' }}
                // Reset transform on desktop to force visibility
                className={`
                    fixed inset-y-0 left-0 z-50
                    w-[85vw] max-w-xs bg-gray-900 border-r border-gray-700 overflow-y-auto
                    md:sticky md:top-0 md:w-72 md:bg-brand-card md:z-30
                    md:!transform-none md:!translate-x-0
                    transition-transform duration-300 ease-in-out
                    h-full md:h-screen
                    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                `}
            >
                <div className="p-4 md:p-6">
                    {/* Mobile Sidebar Header */}
                    <div className="flex items-center justify-between mb-6 md:hidden">
                        <h2 className="text-lg font-bold text-white tracking-wider">
                            {subject.title}
                        </h2>
                        <button
                            onClick={() => setIsSidebarOpen(false)}
                            className="p-2 text-gray-400 hover:text-white bg-gray-800 rounded-lg transition-colors border border-gray-700"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <h2 className="hidden md:block text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                        {subject.title} Syllabus
                    </h2>
                    <nav className="space-y-1">
                        {/* New Recursive Hierarchy */}
                        {subject.data.hierarchy ? (
                            subject.data.hierarchy.map((item) => (
                                <SidebarItem key={item.id} item={item} />
                            ))
                        ) : (
                            /* Fallback for legacy flat structure (DBMS/CN/OOPs until updated) */
                            subject.data.topics.map((topic) => (
                                <SidebarItem key={topic.id} item={topic} />
                            ))
                        )}
                    </nav>
                </div>
            </motion.aside>

            {/* MAIN CONTENT AREA */}
            <main className="flex-1 min-w-0 bg-brand-dark container mx-auto p-4 md:p-8 lg:p-12">
                {/* This renders the TopicContent component */}
                <Outlet />
            </main>

            {/* Backdrop for mobile */}
            {
                isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/80 z-40 md:hidden backdrop-blur-sm"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                )
            }
        </div >
    );
};

export default SubjectPageLayout;
