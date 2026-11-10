import React from 'react';
import { AgentItem } from '../types';

interface AgentDetailModalProps {
  agent: AgentItem | null;
  onClose: () => void;
  onOpenStudioWithAgent: (agent: AgentItem) => void;
}

export const AgentDetailModal: React.FC<AgentDetailModalProps> = ({
  agent,
  onClose,
  onOpenStudioWithAgent
}) => {
  if (!agent) return null;

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
          maxWidth: '560px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: 'var(--color-bg, #121116)',
          border: '1px solid var(--color-border, rgba(255,255,255,0.12))',
          borderRadius: 'var(--radius-3xl, 24px)',
          padding: '28px',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.7)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span className="pill">#{agent.rank} on Leaderboard</span>
              <span className="pill">{agent.author}</span>
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 600, letterSpacing: '-0.02em', margin: 0 }}>
              {agent.name}
            </h2>
            <div className="muted" style={{ fontSize: '13px', marginTop: '4px' }}>
              Strategy: <strong>{agent.strategy}</strong> · Active: <strong>{agent.hoursActive} hours</strong>
            </div>
          </div>

          <button 
            type="button" 
            onClick={onClose}
            style={{
              background: 'var(--color-surface, #1e1d24)',
              border: '1px solid var(--color-border, rgba(255,255,255,0.1))',
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

        {/* Performance metrics banner */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '12px',
            padding: '16px',
            borderRadius: '16px',
            backgroundColor: 'var(--color-surface, #1e1d24)',
            border: '1px solid var(--color-border)',
            marginBottom: '20px',
            textAlign: 'center'
          }}
        >
          <div>
            <span className="muted" style={{ fontSize: '12px', display: 'block' }}>Return</span>
            <strong className={agent.trend === 'loss' ? 'loss' : 'gain'} style={{ fontSize: '18px' }}>
              {agent.returnPct}
            </strong>
            <span style={{ fontSize: '11px', color: 'var(--color-text-faint)', display: 'block' }}>
              {agent.balanceUsd}
            </span>
          </div>

          <div>
            <span className="muted" style={{ fontSize: '12px', display: 'block' }}>vs Holding</span>
            <strong className="gain" style={{ fontSize: '18px' }}>
              {agent.vsHolding}
            </strong>
            <span style={{ fontSize: '11px', color: 'var(--color-text-faint)', display: 'block' }}>
              benchmark
            </span>
          </div>

          <div>
            <span className="muted" style={{ fontSize: '12px', display: 'block' }}>Total Trades</span>
            <strong style={{ fontSize: '18px' }}>
              {agent.tradesCount}
            </strong>
            <span style={{ fontSize: '11px', color: 'var(--color-text-faint)', display: 'block' }}>
              executed
            </span>
          </div>
        </div>

        {/* Markets Traded */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ fontSize: '14px', margin: '0 0 8px 0' }}>Markets Assigned</h4>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {agent.tickers.map((tok) => (
              <span 
                key={tok}
                style={{
                  padding: '6px 12px',
                  borderRadius: '8px',
                  background: 'var(--color-bg-subtle)',
                  border: '1px solid var(--color-border)',
                  fontSize: '13px',
                  fontWeight: 600
                }}
              >
                {tok}
              </span>
            ))}
          </div>
        </div>

        {/* Description / Logic */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '14px', margin: '0 0 8px 0' }}>Strategy Logic</h4>
          <p className="muted" style={{ fontSize: '14px', lineHeight: '20px', margin: 0 }}>
            {agent.description || 'Monitors hourly Robinhood Chain token prices. Evaluates technical parameters on the hour mark and logs trade rationale transparently.'}
          </p>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            type="button"
            className="button button--ghost"
            onClick={onClose}
            style={{ flex: 1 }}
          >
            Close
          </button>
          <button 
            type="button"
            className="button button--primary"
            onClick={() => {
              onClose();
              onOpenStudioWithAgent(agent);
            }}
            style={{ flex: 2 }}
          >
            Clone into Studio
            <i className="ph ph-sliders-horizontal"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
