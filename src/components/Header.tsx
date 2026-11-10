import React, { useState } from 'react';
import { LOGO_PATH } from '../data/mockData';

interface HeaderProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenStudio: () => void;
  onOpenLogin: () => void;
  onOpenSwap: () => void;
  onOpenDocs: () => void;
  onOpenStats: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  onToggleTheme,
  onOpenStudio,
  onOpenLogin,
  onOpenSwap,
  onOpenDocs,
  onOpenStats,
  onNavigateSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigateSection(sectionId);
  };

  return (
    <header className="nav">
      <nav className="container nav__bar" aria-label="Main">
        <a className="brand" href="/" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <img 
            className="brand__mark" 
            src={LOGO_PATH} 
            alt="HiLLO" 
            width={28} 
            height={28} 
          />
          <span style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>HiLLO</span>
        </a>

        <ul className="nav__links">
          <li>
            <a 
              className="nav__link" 
              href="#markets" 
              onClick={(e) => { e.preventDefault(); handleNavClick('markets'); }}
            >
              Markets
            </a>
          </li>
          <li>
            <a 
              className="nav__link" 
              href="#leaderboard" 
              onClick={(e) => { e.preventDefault(); handleNavClick('leaderboard'); }}
            >
              Leaderboard
            </a>
          </li>
          <li>
            <button 
              className="nav__link" 
              type="button"
              onClick={onOpenSwap}
              style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', padding: 0 }}
            >
              Swap
            </button>
          </li>
          <li>
            <button 
              className="nav__link" 
              type="button"
              onClick={onOpenDocs}
              style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', padding: 0 }}
            >
              Docs
            </button>
          </li>
          <li>
            <button 
              className="nav__link" 
              type="button"
              onClick={onOpenStats}
              style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', padding: 0 }}
            >
              Stats
            </button>
          </li>
        </ul>

        <div className="nav__actions">
          <button 
            className="theme-toggle" 
            type="button" 
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} 
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            <i className={`ph ${theme === 'dark' ? 'ph-sun' : 'ph-moon'}`} aria-hidden="true"></i>
          </button>

          <button 
            className="button button--primary button--small" 
            type="button"
            onClick={onOpenLogin}
          >
            Go to app
            <i className="ph ph-arrow-right"></i>
          </button>

          <button 
            className={`nav__menu-button ${mobileMenuOpen ? 'nav__menu-button--open' : ''}`}
            type="button" 
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="nav__menu-line" style={mobileMenuOpen ? { transform: 'rotate(45deg) translate(3px, 3px)' } : {}}></span>
            <span className="nav__menu-line" style={mobileMenuOpen ? { transform: 'rotate(-45deg) translate(3px, -3px)' } : {}}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div 
          className="mobile-nav-drawer"
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'var(--color-bg, #121116)',
            padding: '24px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            zIndex: 9999,
            borderTop: '1px solid var(--color-border, rgba(255,255,255,0.08))',
            overflowY: 'auto'
          }}
        >
          <a 
            className="nav__link" 
            style={{ fontSize: '18px', padding: '12px 0', borderBottom: '1px solid var(--color-border, rgba(255,255,255,0.06))' }}
            href="#markets" 
            onClick={(e) => { e.preventDefault(); handleNavClick('markets'); }}
          >
            Markets
          </a>
          <a 
            className="nav__link" 
            style={{ fontSize: '18px', padding: '12px 0', borderBottom: '1px solid var(--color-border, rgba(255,255,255,0.06))' }}
            href="#leaderboard" 
            onClick={(e) => { e.preventDefault(); handleNavClick('leaderboard'); }}
          >
            Leaderboard
          </a>
          <button 
            className="nav__link" 
            type="button"
            onClick={() => { setMobileMenuOpen(false); onOpenSwap(); }}
            style={{ textAlign: 'left', background: 'none', border: 'none', borderBottom: '1px solid var(--color-border, rgba(255,255,255,0.06))', cursor: 'pointer', font: 'inherit', fontSize: '18px', padding: '12px 0' }}
          >
            Swap
          </button>
          <button 
            className="nav__link" 
            type="button"
            onClick={() => { setMobileMenuOpen(false); onOpenDocs(); }}
            style={{ textAlign: 'left', background: 'none', border: 'none', borderBottom: '1px solid var(--color-border, rgba(255,255,255,0.06))', cursor: 'pointer', font: 'inherit', fontSize: '18px', padding: '12px 0' }}
          >
            Docs
          </button>
          <button 
            className="nav__link" 
            type="button"
            onClick={() => { setMobileMenuOpen(false); onOpenStats(); }}
            style={{ textAlign: 'left', background: 'none', border: 'none', borderBottom: '1px solid var(--color-border, rgba(255,255,255,0.06))', cursor: 'pointer', font: 'inherit', fontSize: '18px', padding: '12px 0' }}
          >
            Stats
          </button>

          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button 
              className="button button--primary button--large"
              type="button"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => { setMobileMenuOpen(false); onOpenStudio(); }}
            >
              Build your agent
              <i className="ph ph-sliders-horizontal"></i>
            </button>
            <button 
              className="button button--ghost button--large"
              type="button"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => { setMobileMenuOpen(false); onOpenLogin(); }}
            >
              Log in / Connect wallet
              <i className="ph ph-wallet"></i>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
