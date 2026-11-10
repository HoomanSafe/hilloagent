import React, { useState } from 'react';
import { MARKETS_DATA } from '../data/mockData';
import { MarketItem } from '../types';

interface MarketsSectionProps {
  onSelectMarket: (market: MarketItem) => void;
}

export const MarketsSection: React.FC<MarketsSectionProps> = ({ onSelectMarket }) => {
  const [filter, setFilter] = useState<'all' | 'stock' | 'crypto'>('all');

  const filteredMarkets = MARKETS_DATA.filter((m) => {
    if (filter === 'all') return true;
    return m.category === filter;
  });

  return (
    <section className="section" id="markets">
      <div className="container">
        <div className="section-heading">
          <span className="label">Tokenized stocks and crypto</span>
          <h2 className="section-heading__title words">
            <span className="word">Every</span>{' '}
            <span className="word">big</span>{' '}
            <span className="word">name,</span>{' '}
            <span className="highlight">
              <span className="word">around</span>{' '}
              <span className="word">the</span>{' '}
              <span className="word">clock.</span>
            </span>
          </h2>
          <p className="section-heading__lead reveal">
            Robinhood Chain tokens that track US stocks, ETFs and crypto, priced every hour onchain. Build an agent for any of them.
          </p>
        </div>

        {/* Filter bar */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
          <button
            className={`browser__chip ${filter === 'all' ? 'browser__chip--active' : ''}`}
            onClick={() => setFilter('all')}
            style={{
              padding: '6px 14px',
              borderRadius: '9999px',
              cursor: 'pointer',
              border: '1px solid var(--color-border)',
              background: filter === 'all' ? 'var(--color-purple-rich)' : 'transparent',
              color: filter === 'all' ? '#fff' : 'inherit'
            }}
          >
            All markets ({MARKETS_DATA.length})
          </button>
          <button
            className={`browser__chip ${filter === 'stock' ? 'browser__chip--active' : ''}`}
            onClick={() => setFilter('stock')}
            style={{
              padding: '6px 14px',
              borderRadius: '9999px',
              cursor: 'pointer',
              border: '1px solid var(--color-border)',
              background: filter === 'stock' ? 'var(--color-purple-rich)' : 'transparent',
              color: filter === 'stock' ? '#fff' : 'inherit'
            }}
          >
            Stocks (20)
          </button>
          <button
            className={`browser__chip ${filter === 'crypto' ? 'browser__chip--active' : ''}`}
            onClick={() => setFilter('crypto')}
            style={{
              padding: '6px 14px',
              borderRadius: '9999px',
              cursor: 'pointer',
              border: '1px solid var(--color-border)',
              background: filter === 'crypto' ? 'var(--color-purple-rich)' : 'transparent',
              color: filter === 'crypto' ? '#fff' : 'inherit'
            }}
          >
            Crypto & Perps (2)
          </button>
        </div>

        <div className="stocks-grid">
          {filteredMarkets.map((m) => {
            const isLoss = m.trend === 'loss';
            return (
              <div
                key={m.ticker}
                className="stock-tile reveal"
                title={`Build an agent for ${m.name}`}
                onClick={() => onSelectMarket(m)}
                style={{ cursor: 'pointer' }}
              >
                <span className="stock-tile__head">
                  {m.ticker === 'BTC' ? (
                    <span className="ticker-avatar ticker-avatar--coin" style={{ background: '#f7931a' }} aria-hidden="true">
                      <i className="ph-fill ph-currency-btc"></i>
                    </span>
                  ) : m.ticker === 'ETH' ? (
                    <span className="ticker-avatar ticker-avatar--coin" style={{ background: '#627eea' }} aria-hidden="true">
                      <i className="ph-fill ph-currency-eth"></i>
                    </span>
                  ) : m.ticker === 'SPY' || m.ticker === 'QQQ' || m.ticker === 'GLD' || m.ticker === 'USO' ? (
                    <span className="ticker-avatar" style={{ background: m.ticker === 'SPY' ? '#1c4886' : m.ticker === 'QQQ' ? '#124170' : m.ticker === 'GLD' ? '#4c1f5e' : '#c18fff' }} aria-hidden="true">
                      {m.ticker}
                    </span>
                  ) : (
                    <span className="ticker-avatar ticker-avatar--logo" style={{ background: '#fff' }} aria-hidden="true">
                      <img src={`/img/stocks/${m.ticker}.png`} alt="" loading="lazy" decoding="async" />
                    </span>
                  )}
                  <span>
                    <strong>{m.ticker}</strong>
                    <span className="stock-tile__name">{m.name}</span>
                  </span>
                </span>

                <svg viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true">
                  <polyline
                    points={m.sparklinePoints}
                    fill="none"
                    stroke={isLoss ? 'var(--color-loss, #e04400)' : 'var(--color-gain, #0a9a4c)'}
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="stock-tile__price">
                  {m.price}
                  <small className={isLoss ? 'loss' : 'gain'}>{m.change}</small>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
