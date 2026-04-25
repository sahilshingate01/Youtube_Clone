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
            <input name="search" className="search-input" placeholder="Search videos..." />
            <button type="submit" className="search-icon">
              <Search size={18} />
            </button>
          </div>
        </form>
      </div>
      
      <div className="right-section">
        <div className="theme-toggle" onClick={toggleTheme} title="Switch Theme">
          {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
        </div>
        <div className="menu-icon" title="Create">
          <Video size={24} />
        </div>
        <div className="menu-icon" title="Notifications">
          <Bell size={24} />
        </div>
        <div className="profile-icon">S</div>
      </div>
    </header>
  );
};

export default Navbar;
