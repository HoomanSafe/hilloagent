import React from 'react';

interface DocsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DocsModal: React.FC<DocsModalProps> = ({ isOpen, onClose }) => {
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
          maxWidth: '680px',
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
            <div className="label" style={{ marginBottom: '4px' }}>Documentation</div>
            <h2 style={{ fontSize: '24px', fontWeight: 600, letterSpacing: '-0.02em', margin: 0 }}>
              About HiLLO Infrastructure
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '14px', lineHeight: '22px' }}>
          <div>
            <h3 style={{ fontSize: '17px', margin: '0 0 6px 0', color: 'var(--color-brand-green, #00ee16)' }}>
              1. Paper Trading Engine
            </h3>
            <p className="muted" style={{ margin: 0 }}>
              HiLLO executes simulated virtual-money trades on live price feeds. Every decision is evaluated at the top of each hour against onchain order books and Chainlink feeds, giving you a tamper-proof track record before putting real capital at risk.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '17px', margin: '0 0 6px 0', color: 'var(--color-brand-green, #00ee16)' }}>
              2. Robinhood Chain Tokenized US Equities
            </h3>
            <p className="muted" style={{ margin: 0 }}>
              Tokenized stocks on Robinhood Chain track NYSE and NASDAQ securities around the clock, 24/7. This allows AI agents to trade during aftermarket hours, weekends, and global macro shifts without waiting for traditional market opens.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '17px', margin: '0 0 6px 0', color: 'var(--color-brand-green, #00ee16)' }}>
              3. Transparent Decision Logging
            </h3>
            <p className="muted" style={{ margin: 0 }}>
              Every order or hold decision records the technical reason why it fired (e.g. 24h RSI threshold, 48h Z-score deviation, trend breakout). If an agent underperforms simply holding, the data is completely transparent.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '17px', margin: '0 0 6px 0', color: 'var(--color-brand-green, #00ee16)' }}>
              4. Non-Custodial Real Money Trading
            </h3>
            <p className="muted" style={{ margin: 0 }}>
              Live trading mode operates directly from your smart contract wallet with strict limits per order and an instantaneous emergency kill-switch. HiLLO never holds user funds or custody of private keys.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '30px', textAlign: 'right' }}>
          <button 
            type="button" 
            className="button button--primary"
            onClick={onClose}
          >
            Got it, thanks
          </button>
        </div>
      </div>
    </div>
  );
};
