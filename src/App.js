import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import ResumePage from './components/ResumePage';
import InfoPage from './components/InfoPage';
import WritingPage from './components/WritingPage';
import ProjectDataPage from './components/ProjectDataPage';
import PostDataPage from './components/PostDataPage';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import CanvasAnimation from './components/CanvasAnimation';

function App() {
    const [hoverInfo, setHoverInfo] = useState([]);
    const [darkMode, setDarkMode] = useState(false);

    const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case '/projects':
                setHoverInfo(["Projects!"]);
                break;
            case '/resume':
                setHoverInfo(["Resume"]);
                break;
            case '/writing':
                setHoverInfo(["Writing"]);
                break;
            case '/info':
                setHoverInfo(["This is the info page", "This is the second element of the info page", "This is the third element of the info page"]);
                break;
            case '/':
              setHoverInfo(["Hello my name is Riyaz Ahuja and this is my website!"]);
              break;
            default:
              const raw = location.pathname.split('/')
              const last = raw[raw.length-1]
              setHoverInfo([last]);
        }
    }, [location.pathname]);

    useEffect(() => {
        const body = document.body;
        if (darkMode) {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
        } else {
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    useEffect(() => {
      const cursor = document.querySelector('.cursor');
      const cursorPulse = document.querySelector('.cursor-pulse');
    
      const moveCursor = (e) => {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
        cursorPulse.style.top = `${e.clientY}px`;
        cursorPulse.style.left = `${e.clientX}px`;
      };
    
      const addHoverEffect = () => {
        document.body.classList.add('hovering');
      };
    
      const removeHoverEffect = () => {
        document.body.classList.remove('hovering');
      };
    
      const handleClick = () => {
        document.body.classList.remove('hovering');
      };
    
      const attachEventListeners = () => {
        window.addEventListener('mousemove', moveCursor);
        document.querySelectorAll('a, button, .navbar a').forEach((el) => {
          el.addEventListener('mouseover', addHoverEffect);
          el.addEventListener('mouseout', removeHoverEffect);
          el.addEventListener('click', handleClick);
        });
      };
    
      attachEventListeners();
    
      return () => {
        window.removeEventListener('mousemove', moveCursor);
        document.querySelectorAll('a, button, .navbar a').forEach((el) => {
          el.removeEventListener('mouseover', addHoverEffect);
          el.removeEventListener('mouseout', removeHoverEffect);
          el.removeEventListener('click', handleClick);
        });
      };
    }, [location]);

    return (
        <div className="flex min-h-screen">
            <CanvasAnimation darkMode={darkMode} />
            <LeftSidebar darkMode={darkMode} />
            <div className="main-content flex flex-col relative z-10">
                <Header hoverInfo={hoverInfo} darkMode={darkMode} />
                <main className="flex-grow p-4">
                            <Routes location={location}>
                                <Route path="/" element={<HomePage darkMode={darkMode} />} />
                                <Route path="/projects" element={<ProjectsPage darkMode={darkMode} />} />
                                <Route path="/projects/:projectId" element={<ProjectDataPage darkMode={darkMode} />} />
                                <Route path="/writing" element={<WritingPage darkMode={darkMode} />} />
                                <Route path="/writing/:postId" element={<PostDataPage darkMode={darkMode} />} />
                                <Route path="/resume" element={<ResumePage darkMode={darkMode} />} />
                                <Route path="/info" element={<InfoPage darkMode={darkMode} />} />
                            </Routes>
                </main>
                <Footer hoverInfo={hoverInfo} darkMode={darkMode} />
            </div>
            <RightSidebar darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className="cursor"></div>
            <div className="cursor-pulse"></div>
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
