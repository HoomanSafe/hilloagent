import React, { useState } from 'react';
import { LOGO_PATH, SOCIAL_X_URL } from '../data/mockData';

interface FooterProps {
  onOpenStudio: () => void;
  onOpenLogin: () => void;
  onOpenSwap: () => void;
  onOpenDocs: () => void;
  onOpenStats: () => void;
  onNavigateSection: (sec: string) => void;
  onCopyNotice: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenStudio,
  onOpenLogin,
  onOpenSwap,
  onOpenDocs,
  onOpenStats,
  onNavigateSection,
  onCopyNotice
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      onCopyNotice('Please enter a valid email address.');
      return;
    }
    setSubscribed(true);
    onCopyNotice('Thank you! You are subscribed to HiLLO updates.');
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Newsletter Box */}
        <div className="footer__news">
          <div>
            <h2 className="footer__news-title">Stay updated</h2>
            <p>New strategies, live trading news and the best agents of the week. One email a month.</p>
          </div>
          <form className="footer__form" onSubmit={handleSubscribe} noValidate>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input 
              className="input" 
              id="newsletter-email" 
              type="email" 
              placeholder="your@email.com" 
              autoComplete="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              disabled={subscribed}
            />
            <button className="button button--primary" type="submit">
              {subscribed ? 'Subscribed ✓' : 'Notify me'}
            </button>
          </form>
        </div>

        {/* Links Grid */}
        <div className="footer__grid">
          <div className="footer__brand">
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
            <p>No code trading agents for tokenized US stocks on Robinhood Chain.</p>
            <span className="footer__status">
              <span className="pulse"></span>Prices updated hourly
            </span>
            <div className="footer__social">
              {/* REPLACED X SOCIAL MEDIA LINK AS REQUESTED: https://x.com/HilloAgent */}
              <a 
                className="footer__social-link" 
                href={SOCIAL_X_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="HiLLO on X"
                title="Follow HiLLO on X (@HilloAgent)"
              >
                <i className="ph ph-x-logo" aria-hidden="true"></i>
              </a>
              <a 
                className="footer__social-link" 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="HiLLO on GitHub"
                title="HiLLO on GitHub"
              >
                <i className="ph ph-github-logo" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h3>Product</h3>
            <a href="#app" onClick={(e) => { e.preventDefault(); onOpenLogin(); }}>Dashboard</a>
            <a href="#markets" onClick={(e) => { e.preventDefault(); onNavigateSection('markets'); }}>Markets</a>
            <a href="#studio" onClick={(e) => { e.preventDefault(); onOpenStudio(); }}>Studio</a>
            <a href="#leaderboard" onClick={(e) => { e.preventDefault(); onNavigateSection('leaderboard'); }}>Leaderboard</a>
            <a href="#swap" onClick={(e) => { e.preventDefault(); onOpenSwap(); }}>Swap</a>
            <a href="#stats" onClick={(e) => { e.preventDefault(); onOpenStats(); }}>Stats</a>
          </div>

          <div className="footer__col">
            <h3>Strategies</h3>
            <a href="#studio" onClick={(e) => { e.preventDefault(); onOpenStudio(); }}>Momentum</a>
            <a href="#studio" onClick={(e) => { e.preventDefault(); onOpenStudio(); }}>Mean reversion</a>
            <a href="#studio" onClick={(e) => { e.preventDefault(); onOpenStudio(); }}>Build your own</a>
            <a href="#docs" onClick={(e) => { e.preventDefault(); onOpenDocs(); }}>Docs</a>
          </div>

          <div className="footer__col">
            <h3>Legal</h3>
            <a href="#docs" onClick={(e) => { e.preventDefault(); onOpenDocs(); }}>Terms</a>
            <a href="#docs" onClick={(e) => { e.preventDefault(); onOpenDocs(); }}>Privacy</a>
            <a href="#docs" onClick={(e) => { e.preventDefault(); onOpenDocs(); }}>Verify HiLLO</a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer__bottom">
          <span>© 2026 HiLLO. Paper trading only. Nothing here is investment advice.</span>
          <span>Not available to US persons or residents of sanctioned countries.</span>
        </div>
      </div>

      {/* Large watermark text */}
      <div className="footer__wordmark" aria-hidden="true">HiLLO</div>
    </footer>
  );
};
