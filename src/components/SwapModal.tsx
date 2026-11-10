import React, { useState } from 'react';
import { MARKETS_DATA } from '../data/mockData';

interface SwapModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNotice: (msg: string) => void;
}

export const SwapModal: React.FC<SwapModalProps> = ({ isOpen, onClose, onNotice }) => {
  const [fromAmount, setFromAmount] = useState('500');
  const [fromToken, setFromToken] = useState('USDC');
  const [toToken, setToToken] = useState('NVDA');

  if (!isOpen) return null;

  const handleSwap = (e: React.FormEvent) => {
    e.preventDefault();
    onNotice(`Simulated swap executed: ${fromAmount} ${fromToken} for tokenized ${toToken} on Robinhood Chain!`);
    onClose();
  };

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
          maxWidth: '440px',
          backgroundColor: 'var(--color-bg, #121116)',
          border: '1px solid var(--color-border, rgba(255,255,255,0.12))',
          borderRadius: 'var(--radius-3xl, 24px)',
          padding: '28px',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.7)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <div className="label" style={{ marginBottom: '2px' }}>Robinhood Chain DEX</div>
            <h2 style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '-0.02em', margin: 0 }}>
              Swap Tokens
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

        <form onSubmit={handleSwap}>
          {/* Pay box */}
          <div style={{ padding: '16px', borderRadius: '16px', background: 'var(--color-surface)', border: '1px solid var(--color-border)', marginBottom: '8px' }}>
            <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>You pay</span>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px' }}>
              <input 
                type="number"
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                style={{ background: 'transparent', border: 'none', outline: 'none', color: 'inherit', fontSize: '24px', fontWeight: 600, width: '150px' }}
              />
              <span style={{ fontWeight: 600, padding: '4px 10px', background: 'var(--color-bg)', borderRadius: '8px' }}>
                {fromToken}
              </span>
            </div>
          </div>

          {/* Swap icon */}
          <div style={{ display: 'flex', justifyContent: 'center', margin: '-4px 0' }}>
            <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
              <i className="ph ph-arrows-down-up"></i>
            </div>
          </div>

          {/* Receive box */}
          <div style={{ padding: '16px', borderRadius: '16px', background: 'var(--color-surface)', border: '1px solid var(--color-border)', marginTop: '8px', marginBottom: '20px' }}>
            <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>You receive (est.)</span>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px' }}>
              <span style={{ fontSize: '24px', fontWeight: 600 }}>
                {(Number(fromAmount || 0) / 168.79).toFixed(3)}
              </span>
              <select 
                value={toToken}
                onChange={(e) => setToToken(e.target.value)}
                style={{
                  fontWeight: 600,
                  padding: '6px 10px',
                  background: 'var(--color-bg)',
                  color: 'inherit',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  outline: 'none'
                }}
              >
                {MARKETS_DATA.map((m) => (
                  <option key={m.ticker} value={m.ticker}>{m.ticker}</option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '16px', display: 'flex', justifyContent: 'space-between' }}>
            <span>Network Fee:</span>
            <span>$0.00 (Gas sponsored)</span>
          </div>

          <button 
            type="submit" 
            className="button button--primary button--large"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Swap on Robinhood Chain
          </button>
        </form>
      </div>
    </div>
  );
};
