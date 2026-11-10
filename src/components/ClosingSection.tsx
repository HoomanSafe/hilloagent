import React from 'react';

interface ClosingSectionProps {
  onOpenStudio: () => void;
  onOpenLogin: () => void;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({ onOpenStudio, onOpenLogin }) => {
  return (
    <section className="section" style={{ borderBottom: '1px solid var(--color-border, rgba(255,255,255,0.06))' }}>
      <div className="container">
        <div className="closing reveal">
          <div className="closing__copy">
            <span className="label">Get started</span>
            <h2 className="closing__title words">
              <span className="word">Your</span>{' '}
              <span className="word">first</span>{' '}
              <span className="word">agent</span>{' '}
              <span className="word">is</span>{' '}
              <span className="highlight">
                <span className="word">free.</span>
              </span>
            </h2>
            <p className="section-heading__lead">
              Build it, replay its last 30 days and launch it in about five minutes. No deposit, no gas.
            </p>

            <div className="hero__actions" style={{ justifyContent: 'flex-start', marginTop: '24px' }}>
              <button 
                className="button button--primary button--large" 
                type="button"
                onClick={onOpenLogin}
              >
                Go to app
                <i className="ph ph-arrow-right"></i>
              </button>
              <button 
                className="button button--ghost button--large" 
                type="button"
                onClick={onOpenStudio}
              >
                Try the Studio
              </button>
            </div>

            <ul className="closing__points">
              <li>
                <i className="ph ph-check" style={{ color: 'var(--color-gain, #0a9a4c)' }}></i> Free
              </li>
              <li>
                <i className="ph ph-check" style={{ color: 'var(--color-gain, #0a9a4c)' }}></i> Virtual money only
              </li>
              <li>
                <i className="ph ph-check" style={{ color: 'var(--color-gain, #0a9a4c)' }}></i> Up to 5 agents at once
              </li>
            </ul>
          </div>

          <div className="closing__stack" aria-hidden="true">
            <div className="closing__card closing__card--back">
              <div className="closing__card-head">
                <img src="/img/icons/backtest.png" alt="" width={36} height={36} />
                <span>Backtest</span>
              </div>
              <div className="closing__big gain">+14.8 pts</div>
              <div className="muted" style={{ fontSize: '13px', lineHeight: '18px' }}>
                Momentum on PLTR. Holding −19.2%, agent −4.3%
              </div>
            </div>

            <div className="closing__card closing__card--mid">
              <div className="closing__card-head">
                <img src="/img/icons/leaderboard.png" alt="" width={36} height={36} />
                <span>Versus holding</span>
              </div>
              <div className="closing__big gain">+23.6 pts</div>
              <div className="muted" style={{ fontSize: '13px', lineHeight: '18px' }}>
                Chip Breakout, last 30 days
              </div>
            </div>

            <div className="closing__card closing__card--front">
              <div className="closing__card-head">
                <img src="/img/icons/agent.png" alt="" width={36} height={36} />
                <span>Chip Breakout</span>
              </div>
              <div className="closing__big loss">−0.9%</div>
              <div className="decision">
                <span className="decision__action decision__action--hold">hold</span>
                <span>
                  <strong>NVDA</strong>{' '}
                  <span className="muted">Waiting. Not yet: price $168.79 crosses above 72h highest $187.92.</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
