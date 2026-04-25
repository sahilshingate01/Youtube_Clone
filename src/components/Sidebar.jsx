import { Home, PlaySquare, Subscriptions, Library, History, ThumbsUp, UserCircle, ChevronRight, Video, Clock } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isCollapsed }) => {
  const mainItems = [
    { icon: <Home size={22} />, text: 'Home', path: '/' },
    { icon: <PlaySquare size={22} />, text: 'Shorts', path: '/shorts' },
    { icon: <Subscriptions size={22} />, text: 'Subscriptions', path: '/subscriptions' },
  ];

  const youItems = [
    { icon: <History size={22} />, text: 'History', path: '/history' },
    { icon: <PlaySquare size={22} />, text: 'Your videos', path: '/library' },
    { icon: <Clock size={22} />, text: 'Watch later', path: '/library' },
    { icon: <ThumbsUp size={22} />, text: 'Liked videos', path: '/liked' },
  ];

  return (
    <nav className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-section">
        {mainItems.map((item, index) => (
          <NavLink 
            key={index} 
            to={item.path} 
            className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}
          >
            <div className="icon">{item.icon}</div>
            <span>{item.text}</span>
          </NavLink>
        ))}
      </div>

      <div className="divider"></div>

      <div className="sidebar-section">
        <div className="section-header">
          <span>You</span>
          <ChevronRight size={16} />
        </div>
        {youItems.map((item, index) => (
          <NavLink 
            key={index} 
            to={item.path} 
            className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}
          >
            <div className="icon">{item.icon}</div>
            <span>{item.text}</span>
          </NavLink>
        ))}
      </div>

      <div className="divider"></div>
      
      {!isCollapsed && (
        <div className="sidebar-footer">
          <p>About Press Copyright</p>
          <p>Contact us Creators</p>
          <p>Advertise Developers</p>
          <p>© 2026 Google LLC</p>
        </div>
      )}
    </nav>
  );
};

export default Sidebar;
