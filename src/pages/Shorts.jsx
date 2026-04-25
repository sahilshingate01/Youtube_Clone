import { ThumbsUp, ThumbsDown, MessageSquare } from 'lucide-react';
import { shortsData } from '../data';

const Shorts = () => {
  return (
    <div className="shorts-container">
      {shortsData.map(short => (
        <div key={short.id} className="short-video">
          <img src={short.thumb} alt={short.title} />
          <div className="short-info">
            <h3>{short.title}</h3>
            <p>{short.channel} • {short.views} views</p>
          </div>
          <div className="short-actions">
            <div className="s-action"><ThumbsUp size={24} fill="currentColor" /><span>Like</span></div>
            <div className="s-action"><ThumbsDown size={24} /><span>Dislike</span></div>
            <div className="s-action"><MessageSquare size={24} /><span>Comment</span></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shorts;
