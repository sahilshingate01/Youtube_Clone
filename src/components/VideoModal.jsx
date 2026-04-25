import { useState } from 'react';
import { X, Play, ThumbsUp, ThumbsDown, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { videos, mockComments } from '../data';

const VideoModal = ({ video, onClose, onVideoSelect }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const relatedVideos = videos.filter(v => v.id !== video.id);

  return (
    <div className="video-modal active" onClick={(e) => e.target.classList.contains('video-modal') && onClose()}>
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="modal-content"
      >
        <button className="close-modal" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="player-container">
          <div className="left-col">
            <div className="main-video">
              <img src={video.thumbnail} alt={video.title} />
              <div className="play-overlay">
                <Play size={64} fill="currentColor" />
              </div>
            </div>
            
            <div className="modal-video-details">
              <h2>{video.title}</h2>
              <div className="modal-video-meta">
                <div className="channel-info">
                  <img src={video.avatar} alt={video.channel} />
                  <div>
                    <h4>{video.channel}</h4>
                    <p>{video.subscribers || '1.2M'} subscribers</p>
                  </div>
                  <button 
                    className={`subscribe-btn ${isSubscribed ? 'subscribed' : ''}`}
                    onClick={() => setIsSubscribed(!isSubscribed)}
                  >
                    {isSubscribed ? 'Subscribed' : 'Subscribe'}
                  </button>
                </div>
                <div className="video-actions">
                  <button 
                    className="action-btn" 
                    onClick={() => {setIsLiked(!isLiked); setIsDisliked(false)}}
                    style={{ color: isLiked ? 'var(--accent-color)' : 'white' }}
                  >
                    <ThumbsUp size={20} fill={isLiked ? 'currentColor' : 'none'} />
                    <span>Likes</span>
                  </button>
                  <button 
                    className="action-btn"
                    onClick={() => {setIsDisliked(!isDisliked); setIsLiked(false)}}
                    style={{ color: isDisliked ? 'var(--accent-color)' : 'white' }}
                  >
                    <ThumbsDown size={20} fill={isDisliked ? 'currentColor' : 'none'} />
                  </button>
                  <button className="action-btn">
                    <Share2 size={20} />
                    <span>Share</span>
                  </button>
                </div>
              </div>
              
              <div className="video-description">
                <p>{video.views} • {video.time}</p>
                <p>{video.description}</p>
              </div>
              
              <div className="comments-section">
                <h3>Comments</h3>
                <div className="add-comment">
                  <div className="profile-icon">S</div>
                  <input type="text" placeholder="Add a comment..." />
                </div>
                <div className="comments-list">
                  {mockComments.map(comment => (
                    <div key={comment.id} className="comment">
                      <img src={comment.avatar} alt={comment.user} className="channel-avatar" style={{ width: 32, height: 32 }} />
                      <div className="comment-info">
                        <h5>{comment.user} • <span>{comment.time}</span></h5>
                        <p>{comment.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="right-col">
            <h3>Up next</h3>
            <div className="related-videos">
              {relatedVideos.map(v => (
                <div key={v.id} className="related-video-card" onClick={() => onVideoSelect(v)}>
                  <img src={v.thumbnail} alt={v.title} className="related-thumb" />
                  <div className="related-info">
                    <h4>{v.title}</h4>
                    <p>{v.channel}</p>
                    <p>{v.views} • {v.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VideoModal;
