import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import JoinCommunity from './pages/JoinCommunity';
import Partners from './pages/Partners';
import Experts from './pages/Experts';
import Feedback from './pages/Feedback';
import Blog from './pages/Blog';
import PasswordReset from './pages/PasswordReset';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/join-community" element={<JoinCommunity />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/experts" element={<Experts />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/reset-password" element={<PasswordReset />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
