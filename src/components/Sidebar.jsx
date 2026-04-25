import { Home, PlaySquare, Subscriptions, Library, History, ThumbsUp } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isCollapsed }) => {
  const menuItems = [
    { icon: <Home size={20} />, text: 'Home', path: '/' },
    { icon: <PlaySquare size={20} />, text: 'Shorts', path: '/shorts' },
    { icon: <Subscriptions size={20} />, text: 'Subscriptions', path: '/subscriptions' },
    { divider: true },
    { icon: <Library size={20} />, text: 'Library', path: '/library' },
    { icon: <History size={20} />, text: 'History', path: '/history' },
    { icon: <ThumbsUp size={20} />, text: 'Liked Videos', path: '/liked' },
  ];

  return (
    <nav className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      {menuItems.map((item, index) => (
        item.divider ? (
          <div key={index} className="divider"></div>
        ) : (
          <NavLink 
            key={index} 
            to={item.path} 
            className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}
          >
            <div className="icon">{item.icon}</div>
            <span>{item.text}</span>
          </NavLink>
        )
      ))}
    </nav>
  );
};

export default Sidebar;
