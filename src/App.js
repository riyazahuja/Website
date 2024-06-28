import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import WritingPage from './components/WritingPage';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';

function App() {
  const [hoverInfo, setHoverInfo] = useState([]);
  
  const location = useLocation();
  
  useEffect(() => {
    switch (location.pathname) {
      case '/projects':
        setHoverInfo(["Explore my projects.", "See my work.", "Find out more."]);
        break;
      case '/resume':
        setHoverInfo(["Check out my resume.", "View my qualifications.", "See my experience."]);
        break;
      case '/writing':
        setHoverInfo(["Read my writings.", "Explore my blog.", "Check out my articles."]);
        break;
      default:
        setHoverInfo(["Welcome to my personal website.", "Explore my projects.", "Read my writings."]);
    }
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen">
      <LeftSidebar />
      <div className="main-content flex flex-col">
        <Header hoverInfo={hoverInfo} />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/writing" element={<WritingPage />} />
          </Routes>
        </main>
        <Footer hoverInfo={hoverInfo} />
      </div>
      <RightSidebar />
    </div>
  );
}

export default function RootApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
