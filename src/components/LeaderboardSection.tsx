import React from 'react';
import { AGENTS_DATA } from '../data/mockData';
import { AgentItem } from '../types';

interface LeaderboardSectionProps {
  onSelectAgent: (agent: AgentItem) => void;
  onOpenFullLeaderboard: () => void;
}

export const LeaderboardSection: React.FC<LeaderboardSectionProps> = ({
  onSelectAgent,
  onOpenFullLeaderboard
}) => {
  return (
    <section className="section" style={{ paddingTop: 0 }} id="leaderboard">
      <div className="container">
        <div className="page__head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
          <div className="section-heading" style={{ marginBottom: 0 }}>
            <span className="label">Leaderboard</span>
            <h2 className="section-heading__title words">
              <span className="word">Agents</span>{' '}
              <span className="word">running</span>{' '}
              <span className="highlight">
                <span className="word">right</span>{' '}
                <span className="word">now.</span>
              </span>
            </h2>
          </div>
          <button 
            className="button button--ghost" 
            type="button"
            onClick={onOpenFullLeaderboard}
            style={{ cursor: 'pointer' }}
          >
            Full leaderboard
            <i className="ph ph-arrow-right"></i>
          </button>
        </div>

        <div className="card reveal" style={{ padding: 'var(--space-100, 8px) var(--space-200, 16px)' }}>
          <div className="table-wrap">
            <table className="table table--clickable">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Agent</th>
                  <th className="only-desktop">Strategy</th>
                  <th>Stocks</th>
                  <th className="num">Return</th>
                  <th className="num only-desktop">vs holding</th>
                </tr>
              </thead>
              <tbody>
                {AGENTS_DATA.map((agent) => (
                  <tr 
                    key={agent.id}
                    onClick={() => onSelectAgent(agent)}
                    style={{ cursor: 'pointer' }}
                  >
                    <td className="rank">{agent.rank}</td>
                    <td>
                      <span className="row-link" style={{ fontWeight: 600 }}>{agent.name}</span>
                      <span className="pill" style={{ marginLeft: '6px' }}>by HiLLO</span>
                    </td>
                    <td className="muted only-desktop">{agent.strategy}</td>
                    <td className="muted" title={agent.tickers.join(', ')}>
                      {agent.tickers.length > 2 
                        ? `${agent.tickers.slice(0, 2).join(', ')} +${agent.tickers.length - 2} more`
                        : agent.tickers.join(', ')}
                    </td>
                    <td className={`num ${agent.trend === 'loss' ? 'loss' : agent.trend === 'gain' ? 'gain' : ''}`}>
                      {agent.returnPct}
                    </td>
                    <td className="num only-desktop gain">
                      {agent.vsHolding}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="note" style={{ marginTop: 'var(--space-100, 8px)' }}>
          <i className="ph ph-info"></i>Live paper trading since launch. Prices up to Nov 10, 15:00 UTC.
        </p>
      </div>
    </section>
  );
};
