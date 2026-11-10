import React, { useState } from 'react';
import { DECISIONS_FEED } from '../data/mockData';

export const DecisionLogSection: React.FC = () => {
  const [actionFilter, setActionFilter] = useState<'all' | 'buy' | 'sell'>('all');

  const filteredDecisions = DECISIONS_FEED.filter((d) => {
    if (actionFilter === 'all') return true;
    return d.action === actionFilter;
  });

  return (
    <section className="section" id="decisions">
      <div className="container feed-section">
        <div>
          <div className="section-heading" style={{ marginBottom: 0 }}>
            <span className="label">Decision log</span>
            <h2 className="section-heading__title words">
              <span className="word">Every</span>{' '}
              <span className="word">move,</span>{' '}
              <span className="highlight">
                <span className="word">explained.</span>
              </span>
            </h2>
            <p className="section-heading__lead reveal" style={{ marginTop: '12px' }}>
              Live paper trades, recorded every hour. You see what the agent saw and why it acted.
            </p>

            <div style={{ marginTop: '24px', display: 'flex', gap: '8px' }}>
              <button
                className={`browser__chip ${actionFilter === 'all' ? 'browser__chip--active' : ''}`}
                onClick={() => setActionFilter('all')}
                style={{
                  cursor: 'pointer',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  border: '1px solid var(--color-border)',
                  background: actionFilter === 'all' ? 'var(--color-brand-green, #00ee16)' : 'transparent',
                  color: actionFilter === 'all' ? '#04061a' : 'inherit',
                  fontWeight: actionFilter === 'all' ? 700 : 500
                }}
              >
                All decisions ({DECISIONS_FEED.length})
              </button>
              <button
                className={`browser__chip ${actionFilter === 'buy' ? 'browser__chip--active' : ''}`}
                onClick={() => setActionFilter('buy')}
                style={{
                  cursor: 'pointer',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  border: '1px solid var(--color-border)',
                  background: actionFilter === 'buy' ? 'var(--color-gain, #0a9a4c)' : 'transparent',
                  color: actionFilter === 'buy' ? '#fff' : 'inherit'
                }}
              >
                Buys
              </button>
              <button
                className={`browser__chip ${actionFilter === 'sell' ? 'browser__chip--active' : ''}`}
                onClick={() => setActionFilter('sell')}
                style={{
                  cursor: 'pointer',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  border: '1px solid var(--color-border)',
                  background: actionFilter === 'sell' ? 'var(--color-loss, #e04400)' : 'transparent',
                  color: actionFilter === 'sell' ? '#fff' : 'inherit'
                }}
              >
                Sells
              </button>
            </div>

            <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-muted)' }}>
              <span className="pulse"></span>
              <span style={{ fontSize: '13px' }}>Feed synced with Robinhood Chain oracles</span>
            </div>
          </div>
        </div>

        <div className="feed" style={{ maxHeight: '520px', overflowY: 'auto' }}>
          {filteredDecisions.map((item) => (
            <div key={item.id} className="feed__item">
              <div className="feed__meta">
                <span>{item.agentName}</span>
                <span>{item.time}</span>
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-100, 8px)', alignItems: 'flex-start' }}>
                <span className={`decision__action decision__action--${item.action}`}>
                  {item.action}
                </span>
                <span>
                  <strong>{item.ticker}</strong>{' '}
                  <span className="muted">{item.reason}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
