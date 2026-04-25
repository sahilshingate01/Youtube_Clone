import { useState } from 'react';
import VideoCard from '../components/VideoCard';
import { videos } from '../data';

const Subscriptions = ({ onVideoSelect }) => {
  const [viewMode, setViewMode] = useState('Grid');

  return (
    <div className="subscriptions-page">
      <div className="sub-header">
        <h2>Latest</h2>
        <div className="sub-view-options">
          <button 
            className={viewMode === 'Grid' ? 'active' : ''} 
            onClick={() => setViewMode('Grid')}
          >
            Grid
          </button>
          <button 
            className={viewMode === 'List' ? 'active' : ''} 
            onClick={() => setViewMode('List')}
          >
            List
          </button>
        </div>
      </div>
      <div className={`video-grid ${viewMode === 'List' ? 'list-view' : ''}`}>
        {videos.slice(0, 3).map((video, index) => (
          <VideoCard 
            key={video.id} 
            video={video} 
            index={index} 
            onClick={() => onVideoSelect(video)} 
          />
        ))}
      </div>
    </div>
  );
};

export default Subscriptions;
