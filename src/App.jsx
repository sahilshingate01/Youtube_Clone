import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Shorts from './pages/Shorts';
import Subscriptions from './pages/Subscriptions';
import Library from './pages/Library';
import VideoModal from './components/VideoModal';
import { videos } from './data';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <Router>
      <div className="app">
        <Navbar 
          theme={theme} 
          toggleTheme={toggleTheme} 
          setSearchQuery={setSearchQuery}
          toggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />
        
        <div className="app-container">
          <Sidebar isCollapsed={isSidebarCollapsed} />
          
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home searchQuery={searchQuery} onVideoSelect={handleVideoSelect} />} />
              <Route path="/shorts" element={<Shorts />} />
              <Route path="/subscriptions" element={<Subscriptions onVideoSelect={handleVideoSelect} />} />
              <Route path="/library" element={<Library title="Library" onVideoSelect={handleVideoSelect} />} />
              <Route path="/history" element={<Library title="History" onVideoSelect={handleVideoSelect} />} />
              <Route path="/liked" element={<Library title="Liked Videos" onVideoSelect={handleVideoSelect} />} />
            </Routes>
          </main>
        </div>

        {selectedVideo && (
          <VideoModal 
            video={selectedVideo} 
            onClose={() => setSelectedVideo(null)} 
            onVideoSelect={handleVideoSelect}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
