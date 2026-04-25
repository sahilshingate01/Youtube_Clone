import { useState } from 'react';
import VideoCard from '../components/VideoCard';
import { videos } from '../data';

const Home = ({ searchQuery, onVideoSelect }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Music', 'Coding', 'Tech', 'Gaming', 'AI', 'Live', 'Podcasts'];

  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.channel.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || 
                           video.title.toLowerCase().includes(activeCategory.toLowerCase()) ||
                           video.channel.toLowerCase().includes(activeCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <div className="filter-bar">
        {categories.map(cat => (
          <button 
            key={cat} 
            className={`filter ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      
      <div className="video-grid">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video, index) => (
            <VideoCard 
              key={video.id} 
              video={video} 
              index={index} 
              onClick={() => onVideoSelect(video)} 
            />
          ))
        ) : (
          <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '100px 0' }}>
            <h2 style={{ fontSize: 48, marginBottom: 16 }}>🔍</h2>
            <h2>No videos found</h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: 8 }}>Try searching for something else</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
