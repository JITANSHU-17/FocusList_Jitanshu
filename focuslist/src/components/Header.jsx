function Header() {
  return (
    <header className="app-header">
      <div className="header-content">
        <div>
          <p className="app-label">PRODUCTIVITY APP</p>
          <h1>FocusList</h1>
          <p className="app-description">
            Focus on what matters today.
          </p>
        </div>

        <div className="header-badge" aria-label="Local storage enabled">
          <span className="status-dot"></span>
          Saved locally
        </div>
      </div>
    </header>
  );
}

export default Header;