import { Search, Menu, Video, Bell, Sun, Moon } from 'lucide-react';

const Navbar = ({ theme, toggleTheme, setSearchQuery, toggleSidebar }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    setSearchQuery(query);
  };

  return (
    <header>
      <div className="left-section">
        <div className="menu-icon" onClick={toggleSidebar}>
          <Menu size={24} />
        </div>
        <div className="logo" onClick={() => window.location.href = '/'}>
          <span>PREMIUM</span> YouTube
        </div>
      </div>
      
      <div className="middle-section">
        <form className="search-bar" onSubmit={handleSubmit}>
          <div className="search-wrapper">
            <input name="search" className="search-input" placeholder="Search" />
            <button type="submit" className="search-icon">
              <Search size={18} />
            </button>
          </div>
          <div className="mic-icon" title="Search with your voice">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"></path><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"></path></svg>
          </div>
        </form>
      </div>
      
      <div className="right-section">
        <div className="create-btn" title="Create">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"></path></svg>
          <span>Create</span>
        </div>
        <div className="theme-toggle" onClick={toggleTheme} title="Switch Theme">
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </div>
        <div className="menu-icon" title="Notifications">
          <div className="notif-count">9+</div>
          <Bell size={22} />
        </div>
        <div className="profile-icon user-avatar">
          <img src="https://picsum.photos/32/32?random=99" alt="user" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
