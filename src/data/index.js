// Import Subject Data
// In a real scenario, we would have extensive files for each. 
// For now, we will create placeholders or basic structures in the subfolders.

import osData from './os';
import dbmsData from './dbms';
import cnData from './cn';
import oopsData from './oops';
import behavioralData from './behavioral';
import systemDesignData from './system-design';

const countQuestions = (data) => {
    if (!data || !data.topics) return 0;
    return data.topics.reduce((acc, topic) => {
        return acc + (topic.interviewQuestions ? topic.interviewQuestions.length : 0);
    }, 0);
};

export const subjects = [
    {
        id: 'os',
        title: 'Operating Systems',
        description: 'Process Management, Threads, Deadlocks, Memory Management, and more.',
        color: 'bg-blue-500',
        textColor: 'text-blue-400',
        topicCount: osData.topics.length,
        interviewQCount: countQuestions(osData),
        data: osData
    },
    {
        id: 'dbms',
        title: 'DBMS',
        description: 'SQL Queries, Normalization, Transactions, ACID properties, and more.',
        color: 'bg-green-500',
        textColor: 'text-green-400',
        topicCount: dbmsData.topics.length,
        interviewQCount: countQuestions(dbmsData),
        data: dbmsData
    },
    {
        id: 'cn',
        title: 'Computer Networks',
        description: 'OSI Model, TCP/IP, Routing, Subnetting, and HTTP/HTTPS deep dives.',
        color: 'bg-purple-500',
        textColor: 'text-purple-400',
        topicCount: cnData.topics.length,
        interviewQCount: countQuestions(cnData),
        data: cnData
    },
    {
        id: 'oops',
        title: 'OOPs',
        description: 'Encapsulation, Polymorphism, Inheritance, Abstraction with Polyglot Code.',
        color: 'bg-yellow-500',
        textColor: 'text-yellow-400',
        topicCount: oopsData.topics.length,
        interviewQCount: countQuestions(oopsData),
        data: oopsData
    },
    {
        id: 'system-design',
        title: 'System Design',
        description: 'Scalability, Distributed Systems, Low-Level Design, and Architectural Patterns.',
        color: 'bg-indigo-500',
        textColor: 'text-indigo-400',
        topicCount: systemDesignData.topics.length,
        interviewQCount: countQuestions(systemDesignData),
        data: systemDesignData
    },
    {
        id: 'behavioral',
        title: 'Behavioral & HR',
        description: 'Master the "Tell me about yourself" and STAR method questions.',
        color: 'bg-orange-500',
        textColor: 'text-orange-400',
        topicCount: behavioralData.topics.length,
        interviewQCount: countQuestions(behavioralData),
        data: behavioralData
    }
];

export const getAllQuestions = () => {
    // Helper to aggregate all questions for the Interview Hub
    let allQs = [];
    subjects.forEach(sub => {
        if (sub.data && sub.data.topics) {
            sub.data.topics.forEach(topic => {
                if (topic.interviewQuestions) {
                    topic.interviewQuestions.forEach(q => {
                        allQs.push({
                            ...q,
                            subjectId: sub.id,
                            topicTitle: topic.title,
                            topicId: topic.id
                        })
                    })
                }
            })
        }
    })
    return allQs;
}
