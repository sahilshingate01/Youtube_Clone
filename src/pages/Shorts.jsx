import { useState } from 'react';
import { ThumbsUp, ThumbsDown, MessageSquare, Share2, MoreVertical } from 'lucide-react';
import { motion } from 'framer-motion';
import { shortsData } from '../data';

const ShortItem = ({ short }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="short-video-container"
    >
      <div className="short-video-wrapper">
        <img src={short.thumb} alt={short.title} className="short-main-thumb" />
        
        <div className="short-overlay-content">
          <div className="short-bottom-info">
            <div className="short-channel-row">
              <img src={`https://picsum.photos/40/40?random=${short.id}`} alt="avatar" className="short-avatar" />
              <span className="short-username">@{short.channel.replace(' ', '').toLowerCase()}</span>
              <button 
                className={`short-sub-btn ${isSubscribed ? 'subscribed' : ''}`}
                onClick={() => setIsSubscribed(!isSubscribed)}
              >
                {isSubscribed ? 'Subscribed' : 'Subscribe'}
              </button>
            </div>
            <h3 className="short-caption">{short.title}</h3>
          </div>
        </div>

        <div className="short-side-actions">
          <div className="short-action-item">
            <button 
              className={`action-circle ${isLiked ? 'active' : ''}`}
              onClick={() => setIsLiked(!isLiked)}
            >
              <ThumbsUp size={24} fill={isLiked ? 'currentColor' : 'none'} />
            </button>
            <span>{isLiked ? '1.3M' : '1.2M'}</span>
          </div>
          
          <div className="short-action-item">
            <button className="action-circle">
              <ThumbsDown size={24} />
            </button>
            <span>Dislike</span>
          </div>

          <div className="short-action-item">
            <button className="action-circle">
              <MessageSquare size={24} />
            </button>
            <span>12K</span>
          </div>

          <div className="short-action-item">
            <button className="action-circle">
              <Share2 size={24} />
            </button>
            <span>Share</span>
          </div>

          <div className="short-action-item">
            <button className="action-circle">
              <MoreVertical size={24} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Shorts = () => {
  return (
    <div className="shorts-page-wrapper">
      <div className="shorts-feed">
        {shortsData.map(short => (
          <ShortItem key={short.id} short={short} />
        ))}
      </div>
    </div>
  );
};

export default Shorts;
