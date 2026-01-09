import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SubjectPageLayout from './pages/SubjectPageLayout';
import TopicContent from './pages/TopicContent';
import InterviewHub from './pages/InterviewHub';
import InterviewQuestionsView from './pages/InterviewQuestionsView';
import Quiz from './pages/Quiz';
import QuizSession from './pages/QuizSession';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Hacks from './pages/Hacks';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* New Sidebar Layout Route */}
          <Route path="/subject/:subjectId" element={<SubjectPageLayout />}>
            <Route path=":topicId" element={<TopicContent />} />
          </Route>

          {/* Interview Flow */}
          <Route path="/hacks" element={<Hacks />} />
          <Route path="/interview" element={<InterviewHub />} />
          <Route path="/interview/:subjectId" element={<InterviewQuestionsView />} />

          {/* Quiz Flow */}
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz/:subjectId" element={<QuizSession />} />

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />

          {/* Legacy/Redirects */}
          <Route path="/system-design" element={<Navigate to="/subject/system-design" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
