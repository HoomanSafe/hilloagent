import React, { useState } from 'react';
import { AGENTS_DATA } from '../data/mockData';
import { AgentItem } from '../types';

interface ShowcaseDeskProps {
  onOpenStudio: () => void;
  onSelectAgent: (agent: AgentItem) => void;
  onNavigateSection: (sec: string) => void;
}

export const ShowcaseDesk: React.FC<ShowcaseDeskProps> = ({
  onOpenStudio,
  onSelectAgent,
  onNavigateSection
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'running'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAgents = AGENTS_DATA.filter((a) => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchName = a.name.toLowerCase().includes(q);
      const matchTicker = a.tickers.some((t) => t.toLowerCase().includes(q));
      if (!matchName && !matchTicker) return false;
    }
    return true;
  });

  return (
    <section className="panel-dark" style={{ padding: 'var(--space-800, 64px) 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-500, 40px)' }}>
          <span className="label" style={{ display: 'inline-block', marginBottom: '8px' }}>Trading desk</span>
          <h2 className="showcase__title words">
            <span className="word">A</span>{' '}
            <span className="highlight">
              <span className="word">trading</span> <span className="word">desk</span>
            </span>
          </h2>
          <p className="hero__lead" style={{ maxWidth: '640px', margin: '12px auto 0' }}>
            Inspect every agent running live on Robinhood Chain, benchmarked against buy & hold.
          </p>
        </div>

        <div className="browser">
          <aside className="browser__side">
            <div className="browser__group">Studio</div>
            <div 
              className="browser__nav" 
              onClick={onOpenStudio} 
              style={{ cursor: 'pointer' }}
            >
              <i className="ph ph-sliders-horizontal"></i>
              <span>Studio</span>
            </div>
            <div 
              className="browser__nav browser__nav--on" 
              onClick={() => onNavigateSection('leaderboard')}
              style={{ cursor: 'pointer' }}
            >
              <i className="ph ph-trophy"></i>
              <span>Leaderboard</span>
            </div>
            <div 
              className="browser__nav" 
              onClick={() => onNavigateSection('markets')}
              style={{ cursor: 'pointer' }}
            >
              <i className="ph ph-chart-line-up"></i>
              <span>Markets</span>
            </div>

            <div className="browser__group">Learn</div>
            <div 
              className="browser__nav" 
              onClick={() => onNavigateSection('strategies')}
              style={{ cursor: 'pointer' }}
            >
              <i className="ph ph-book-open"></i>
              <span>Strategies</span>
            </div>
            <div 
              className="browser__nav" 
              onClick={() => onNavigateSection('faq')}
              style={{ cursor: 'pointer' }}
            >
              <i className="ph ph-question"></i>
              <span>FAQ</span>
            </div>
          </aside>

          <div className="browser__main">
            <div className="browser__top">
              <div className="browser__search">
                <i className="ph ph-magnifying-glass"></i>
                <input 
                  type="text" 
                  placeholder="Search agents and stocks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'inherit',
                    outline: 'none',
                    width: '100%',
                    font: 'inherit'
                  }}
                />
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-75, 6px)' }}>
                <button 
                  className="browser__chip" 
                  type="button"
                  onClick={onOpenStudio}
                  style={{ cursor: 'pointer' }}
                >
                  <i className="ph ph-plus"></i> New agent
                </button>
              </div>
            </div>

            <div style={{ marginTop: '16px' }}>
              <div className="browser__title">Leaderboard</div>
              <div style={{ color: 'rgba(246,247,244,0.5)', marginTop: '4px', fontSize: '13px' }}>
                Live paper agents, next to what holding would have made.
              </div>
            </div>

            <div style={{ display: 'flex', gap: 'var(--space-75, 6px)', flexWrap: 'wrap', margin: '14px 0' }}>
              <button 
                className={`browser__chip ${selectedFilter === 'all' ? 'browser__chip--active' : ''}`}
                style={{ cursor: 'pointer', borderColor: selectedFilter === 'all' ? 'var(--color-purple-rich)' : undefined }}
                onClick={() => setSelectedFilter('all')}
              >
                All strategies
              </button>
              <button 
                className={`browser__chip ${selectedFilter === 'running' ? 'browser__chip--active' : ''}`}
                style={{ cursor: 'pointer', borderColor: selectedFilter === 'running' ? 'var(--color-purple-rich)' : undefined }}
                onClick={() => setSelectedFilter('running')}
              >
                Running
              </button>
            </div>

            <div className="browser__table-wrap">
              <table className="browser__table">
                <thead>
                  <tr>
                    <th>Agent</th>
                    <th className="hide-sm">Strategy</th>
                    <th>Return</th>
                    <th className="hide-sm">vs holding</th>
                    <th className="hide-sm hide-md">Trades</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAgents.map((agent) => (
                    <tr 
                      key={agent.id}
                      onClick={() => onSelectAgent(agent)}
                      style={{ cursor: 'pointer' }}
                      title="Click to view agent details"
                    >
                      <td>
                        <span className="agent-cell">
                          {agent.tickers[0].includes('ETH') ? (
                            <span className="ticker-avatar ticker-avatar--coin" style={{ background: '#627eea' }} aria-hidden="true">
                              <i className="ph-fill ph-currency-eth"></i>
                            </span>
                          ) : agent.tickers[0].includes('BTC') ? (
                            <span className="ticker-avatar ticker-avatar--coin" style={{ background: '#f7931a' }} aria-hidden="true">
                              <i className="ph-fill ph-currency-btc"></i>
                            </span>
                          ) : agent.tickers[0].includes('HYPE') ? (
                            <span className="ticker-avatar ticker-avatar--logo ticker-avatar--token" style={{ background: '#0f1a1f' }} aria-hidden="true">
                              <img src="/img/coins/HYPE.jpg" alt="" loading="lazy" decoding="async" />
                            </span>
                          ) : agent.tickers[0] === 'PLTR' ? (
                            <span className="ticker-avatar ticker-avatar--logo" style={{ background: '#fff' }} aria-hidden="true">
                              <img src="/img/stocks/PLTR.png" alt="" loading="lazy" decoding="async" />
                            </span>
                          ) : agent.tickers[0] === 'NVDA' ? (
                            <span className="ticker-avatar ticker-avatar--logo" style={{ background: '#fff' }} aria-hidden="true">
                              <img src="/img/stocks/NVDA.png" alt="" loading="lazy" decoding="async" />
                            </span>
                          ) : (
                            <span className="ticker-avatar" style={{ background: agent.color || '#4c1f5e' }} aria-hidden="true">
                              {agent.tickers[0].slice(0, 3)}
                            </span>
                          )}
                          <span>
                            <strong>{agent.name}</strong>
                            <span className="sub">{agent.tickers.join(', ')}</span>
                          </span>
                        </span>
                      </td>
                      <td className="hide-sm">
                        {agent.strategy}
                        <span className="sub">by HiLLO</span>
                      </td>
                      <td className={agent.trend === 'loss' ? 'loss' : agent.trend === 'gain' ? 'gain' : ''}>
                        {agent.returnPct}
                        <span className="sub">{agent.balanceUsd}</span>
                      </td>
                      <td className="hide-sm gain">
                        {agent.vsHolding}
                        <span className="sub">vs holding</span>
                      </td>
                      <td className="hide-sm hide-md">
                        {agent.tradesCount}
                        <span className="sub">{agent.hoursActive} hours</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
