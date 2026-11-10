import React from 'react';

interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StatsModal: React.FC<StatsModalProps> = ({ isOpen, onClose }) => {
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
          maxWidth: '620px',
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
            <div className="label" style={{ marginBottom: '4px' }}>Network Stats</div>
            <h2 style={{ fontSize: '24px', fontWeight: 600, letterSpacing: '-0.02em', margin: 0 }}>
              HiLLO Protocol Metrics
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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '24px' }}>
          <div style={{ padding: '16px', borderRadius: '16px', background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
            <span className="muted" style={{ fontSize: '13px', display: 'block' }}>Total Markets Tracked</span>
            <strong style={{ fontSize: '24px', display: 'block', margin: '4px 0' }}>22</strong>
            <span style={{ fontSize: '12px', color: 'var(--color-purple-rich)' }}>20 Equities · 2 Crypto</span>
          </div>

          <div style={{ padding: '16px', borderRadius: '16px', background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
            <span className="muted" style={{ fontSize: '13px', display: 'block' }}>Active Autonomous Agents</span>
            <strong style={{ fontSize: '24px', display: 'block', margin: '4px 0' }}>25</strong>
            <span style={{ fontSize: '12px', color: 'var(--color-gain)' }}>100% On-chain Verified</span>
          </div>

          <div style={{ padding: '16px', borderRadius: '16px', background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
            <span className="muted" style={{ fontSize: '13px', display: 'block' }}>Decisions Evaluated</span>
            <strong style={{ fontSize: '24px', display: 'block', margin: '4px 0' }}>33,005</strong>
            <span style={{ fontSize: '12px', color: 'var(--color-text-faint)' }}>Top of every hour</span>
          </div>

          <div style={{ padding: '16px', borderRadius: '16px', background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
            <span className="muted" style={{ fontSize: '13px', display: 'block' }}>Avg Alpha vs Holding</span>
            <strong className="gain" style={{ fontSize: '24px', display: 'block', margin: '4px 0' }}>+11.2 pts</strong>
            <span style={{ fontSize: '12px', color: 'var(--color-gain)' }}>Outperforming baseline</span>
          </div>
        </div>

        <div style={{ padding: '16px', borderRadius: '16px', background: 'var(--color-bg-subtle)', border: '1px solid var(--color-border)', fontSize: '13px', lineHeight: '20px' }}>
          <strong>Oracle Verification:</strong> All stock tokens are settled via Robinhood Chain liquidity pools with prices cross-referenced against Chainlink oracles each hour.
        </div>
      </div>
    </div>
  );
};
