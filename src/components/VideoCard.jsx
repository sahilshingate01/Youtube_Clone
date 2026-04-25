const VideoCard = ({ video, onClick, index }) => {
  return (
    <div 
      className="video-card" 
      onClick={onClick}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="thumbnail-container">
        <img src={video.thumbnail} className="thumbnail" alt={video.title} loading="lazy" />
        {video.progress > 0 && (
          <div className="progress-bar" style={{ width: `${video.progress}%` }}></div>
        )}
      </div>
      <div className="video-info">
        <img src={video.avatar} alt={video.channel} className="channel-avatar" />
        <div className="video-details">
          <h3 className="video-title" title={video.title}>{video.title}</h3>
          <p className="channel-name">
            {video.channel} {video.verified && <span className="verified">✓</span>}
          </p>
          <p className="video-stats">{video.views} • {video.time}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
