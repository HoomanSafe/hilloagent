import React from 'react';
import { AGENTS_DATA } from '../data/mockData';
import { AgentItem } from '../types';

interface FullLeaderboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAgent: (agent: AgentItem) => void;
  onOpenStudio: () => void;
}

export const FullLeaderboardModal: React.FC<FullLeaderboardModalProps> = ({
  isOpen,
  onClose,
  onSelectAgent,
  onOpenStudio
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="modal-backdrop"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
      onClick={onClose}
    >
      <div 
        className="card"
        style={{
          width: '100%',
          maxWidth: '780px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: 'var(--color-bg, #121116)',
          border: '1px solid var(--color-border, rgba(255,255,255,0.12))',
          borderRadius: 'var(--radius-3xl, 24px)',
          padding: '32px',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.7)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div>
            <div className="label" style={{ marginBottom: '4px' }}>Public Track Record</div>
            <h2 style={{ fontSize: '24px', fontWeight: 600, letterSpacing: '-0.02em', margin: 0 }}>
              HiLLO Live Leaderboard
            </h2>
          </div>
          <button 
            type="button" 
            onClick={onClose}
            style={{
              background: 'var(--color-surface, #1e1d24)',
              border: '1px solid var(--color-border)',
              color: 'inherit',
              borderRadius: '9999px',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <i className="ph ph-x"></i>
          </button>
        </div>

        <div className="table-wrap">
          <table className="table table--clickable">
            <thead>
              <tr>
                <th>#</th>
                <th>Agent</th>
                <th>Strategy</th>
                <th>Markets</th>
                <th className="num">Return</th>
                <th className="num">vs holding</th>
              </tr>
            </thead>
            <tbody>
              {AGENTS_DATA.map((agent) => (
                <tr 
                  key={agent.id}
                  onClick={() => {
                    onClose();
                    onSelectAgent(agent);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <td className="rank">{agent.rank}</td>
                  <td>
                    <span className="row-link" style={{ fontWeight: 600 }}>{agent.name}</span>
                    <span className="pill" style={{ marginLeft: '6px' }}>by HiLLO</span>
                  </td>
                  <td className="muted">{agent.strategy}</td>
                  <td className="muted">{agent.tickers.join(', ')}</td>
                  <td className={`num ${agent.trend === 'loss' ? 'loss' : agent.trend === 'gain' ? 'gain' : ''}`}>
                    {agent.returnPct}
                  </td>
                  <td className="num gain">
                    {agent.vsHolding}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="muted" style={{ fontSize: '13px' }}>
            Showing all 25 active agents. All orders locked & verified.
          </span>
          <button 
            type="button"
            className="button button--primary"
            onClick={() => {
              onClose();
              onOpenStudio();
            }}
          >
            Create your own
            <i className="ph ph-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
