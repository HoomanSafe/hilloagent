import React from 'react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="section section--subtle" id="how-it-works">
      <div className="container">
        <div className="section-heading">
          <span className="label">How it works</span>
          <h2 className="section-heading__title words">
            <span className="word">From</span>{' '}
            <span className="word">idea</span>{' '}
            <span className="word">to</span>{' '}
            <span className="highlight">
              <span className="word">running</span>{' '}
              <span className="word">agent.</span>
            </span>
          </h2>
          <p className="section-heading__lead reveal">
            No code, no formulas, no deposit. Shape it, check it, launch it.
          </p>
        </div>

        <div className="grid-steps">
          <article className="feature reveal" style={{ background: 'var(--color-surface)' }}>
            <img className="feature__icon" src="/img/icons/backtest.png" alt="" width={64} height={64} />
            <span className="feature__step">Step 1</span>
            <h3>Replay the last 30 days</h3>
            <p>Pick a strategy or write your own rules, choose up to three markets and a stop loss. The Studio replays real hourly prices with your exact settings, instantly.</p>
          </article>

          <article className="feature reveal" style={{ background: 'var(--color-surface)' }}>
            <img className="feature__icon" src="/img/icons/agent.png" alt="" width={64} height={64} />
            <span className="feature__step">Step 2</span>
            <h3>Launch your agent</h3>
            <p>Sign one free message with your wallet. Your agent checks prices every hour and writes down why it acted.</p>
          </article>

          <article className="feature reveal" style={{ background: 'var(--color-surface)' }}>
            <img className="feature__icon" src="/img/icons/leaderboard.png" alt="" width={64} height={64} />
            <span className="feature__step">Step 3</span>
            <h3>Find what makes money</h3>
            <p>Your agent trades every hour on real market prices. See which rules turn a profit and beat simply holding, then run more agents on the winners.</p>
          </article>

          <article className="feature reveal feature--soon" style={{ background: 'var(--color-surface)' }}>
            <img className="feature__icon" src="/img/icons/tokenize.png" alt="" width={64} height={64} />
            <span className="feature__step">Step 4<span className="feature__soon">Soon</span></span>
            <h3>Tokenize your agent</h3>
            <p>Turn a strategy with a track record into a token others can follow.</p>
          </article>
        </div>
      </div>
    </section>
  );
};
