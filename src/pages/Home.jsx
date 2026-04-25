import { useState } from 'react';
import { MoreVertical } from 'lucide-react';
import VideoCard from '../components/VideoCard';
import { videos, shortsData } from '../data';

const Home = ({ searchQuery, onVideoSelect }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Gaming', 'Music', 'Mixes', 'Comedy clubs', 'Grand Theft Auto', 'Capcom', 'Data Structures', 'AI', 'Résumés', 'Audio commentaries', 'Indian Institutes of Technology', 'Gadgets'];

  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.channel.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || 
                           video.title.toLowerCase().includes(activeCategory.toLowerCase()) ||
                           video.channel.toLowerCase().includes(activeCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  // Split videos to insert shorts shelf
  const topVideos = filteredVideos.slice(0, 3);
  const remainingVideos = filteredVideos.slice(3);

  return (
    <div className="home-container">
      <div className="filter-bar">
        {categories.map(cat => (
          <button 
            key={cat} 
            className={`filter \${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      
      <div className="video-grid">
        {topVideos.map((video, index) => (
          <VideoCard 
            key={video.id} 
            video={video} 
            index={index} 
            onClick={() => onVideoSelect(video)} 
          />
        ))}
      </div>

      {activeCategory === 'All' && searchQuery === '' && (
        <div className="shorts-shelf">
          <div className="shelf-header">
            <div className="shelf-title">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Youtube_shorts_icon.svg" width="24" alt="shorts" />
              <span>Shorts</span>
            </div>
            <MoreVertical size={20} />
          </div>
          <div className="shorts-horizontal-grid">
            {shortsData.map(short => (
              <div key={short.id} className="short-shelf-item">
                <div className="short-shelf-thumb">
                  <img src={short.thumb} alt={short.title} />
                </div>
                <div className="short-shelf-info">
                  <h4>{short.title}</h4>
                  <p>{short.views} views</p>
                </div>
              </div>
            ))}
          </div>
          <div className="shelf-divider"></div>
        </div>
      )}

      <div className="video-grid">
        {remainingVideos.map((video, index) => (
          <VideoCard 
            key={video.id} 
            video={video} 
            index={index + 3} 
            onClick={() => onVideoSelect(video)} 
          />
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '100px 0' }}>
          <h2 style={{ fontSize: 48, marginBottom: 16 }}>🔍</h2>
          <h2>No videos found</h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: 8 }}>Try searching for something else</p>
        </div>
      )}
    </div>
  );
};

export default Home;
