import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { ChevronDown, ChevronRight, FileText, Folder } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SidebarItem = ({ item, depth = 0 }) => {
    const { subjectId, topicId } = useParams();
    const [isOpen, setIsOpen] = useState(false);

    // Check if this item or any of its children is currently active
    const isActive = (node) => {
        if (node.id === topicId) return true;
        if (node.children) {
            return node.children.some(child => isActive(child));
        }
        return false;
    };

    const isCurrentActive = isActive(item);

    // Auto-expand if active specific children (optional, good UX)
    React.useEffect(() => {
        if (isCurrentActive) setIsOpen(true);
    }, [isCurrentActive]);

    const hasChildren = item.children && item.children.length > 0;

    if (hasChildren) {
        return (
            <div className="mb-1">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`
                        w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors
                        ${isCurrentActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'}
                    `}
                    style={{ paddingLeft: `${depth * 12 + 12}px` }}
                >
                    <div className="flex items-center">
                        <Folder className={`w-4 h-4 mr-2 ${isCurrentActive ? 'text-brand-accent' : 'text-gray-500'}`} />
                        <span className="truncate">{item.title}</span>
                    </div>
                    {isOpen ? <ChevronDown className="w-3 h-3 text-gray-500" /> : <ChevronRight className="w-3 h-3 text-gray-500" />}
                </button>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            {item.children.map(child => (
                                <SidebarItem key={child.id} item={child} depth={depth + 1} />
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    }

    return (
        <NavLink
            to={`/subject/${subjectId}/${item.id}`}
            className={({ isActive }) => `
                block px-3 py-2 text-sm font-medium rounded-lg transition-colors mb-1
                ${isActive
                    ? 'bg-brand-accent/10 text-brand-accent border-l-2 border-brand-accent py-2'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'}
            `}
            style={{ paddingLeft: `${depth * 12 + 12}px` }}
        >
            <div className="flex items-center">
                <FileText className="w-3 h-3 mr-2 opacity-70" />
                <span className="truncate">{item.title}</span>
            </div>
        </NavLink>
    );
};

export default SidebarItem;
