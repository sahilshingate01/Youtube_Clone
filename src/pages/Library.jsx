import VideoCard from '../components/VideoCard';
import { videos } from '../data';

const Library = ({ title, onVideoSelect }) => {
  // Mock data slice for library/history
  const libraryVideos = title === 'Library' ? videos.slice(0, 4) : videos.slice(2, 6);

  return (
    <div className="library-page">
      <div className="lib-header">
        <h2>{title}</h2>
      </div>
      <div className="video-grid">
        {libraryVideos.map((video, index) => (
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

export default Library;
