import React, { useState } from 'react';
import { LOGO_PATH } from '../data/mockData';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (walletOrEmail: string) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [step, setStep] = useState<'options' | 'emailCode'>('options');
  const [code, setCode] = useState('');

  if (!isOpen) return null;

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setStep('emailCode');
  };

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess(email);
    onClose();
  };

  const handleWalletConnect = (name: string) => {
    const fakeAddr = '0x' + Math.random().toString(16).substring(2, 10) + '...' + Math.random().toString(16).substring(2, 6);
    onSuccess(`${name} (${fakeAddr})`);
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
          maxWidth: '420px',
          backgroundColor: 'var(--color-bg, #121116)',
          border: '1px solid var(--color-border, rgba(255,255,255,0.12))',
          borderRadius: 'var(--radius-3xl, 24px)',
          padding: '28px',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.7)',
          textAlign: 'center'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
          <img src={LOGO_PATH} alt="HiLLO" width={48} height={48} style={{ borderRadius: '10px' }} />
        </div>

        <h2 style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '-0.02em', margin: '0 0 6px 0' }}>
          Log in or sign up
        </h2>
        <p className="muted" style={{ fontSize: '13px', margin: '0 0 24px 0' }}>
          Free paper trading on Robinhood Chain. Funds never leave your wallet.
        </p>

        {step === 'options' ? (
          <div>
            <form onSubmit={handleEmailSubmit} style={{ marginBottom: '16px' }}>
              <input 
                className="input" 
                type="email" 
                placeholder="your@email.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%', marginBottom: '8px', textAlign: 'center' }}
                autoFocus
              />
              <button className="button button--primary" type="submit" style={{ width: '100%', justifyContent: 'center' }}>
                Continue with email
              </button>
            </form>

            <div style={{ display: 'flex', alignItems: 'center', margin: '16px 0', gap: '8px' }}>
              <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }}></div>
              <span style={{ fontSize: '12px', color: 'var(--color-text-faint)' }}>OR CONNECT WALLET</span>
              <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }}></div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button 
                type="button"
                className="button button--ghost"
                onClick={() => handleWalletConnect('MetaMask')}
                style={{ width: '100%', justifyContent: 'center', gap: '10px' }}
              >
                <i className="ph ph-wallet"></i> MetaMask
              </button>
              <button 
                type="button"
                className="button button--ghost"
                onClick={() => handleWalletConnect('Coinbase Wallet')}
                style={{ width: '100%', justifyContent: 'center', gap: '10px' }}
              >
                <i className="ph ph-shield-check"></i> Coinbase Wallet
              </button>
              <button 
                type="button"
                className="button button--ghost"
                onClick={() => handleWalletConnect('Phantom')}
                style={{ width: '100%', justifyContent: 'center', gap: '10px' }}
              >
                <i className="ph ph-ghost"></i> Phantom / Solana
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleCodeSubmit}>
            <p style={{ fontSize: '14px', marginBottom: '16px' }}>
              Enter the 6-digit verification code sent to <strong>{email}</strong>
            </p>
            <input 
              className="input" 
              type="text" 
              placeholder="123456" 
              value={code}
              onChange={(e) => setCode(e.target.value)}
              style={{ width: '100%', marginBottom: '12px', textAlign: 'center', fontSize: '20px', letterSpacing: '4px' }}
              autoFocus
            />
            <div style={{ display: 'flex', gap: '8px' }}>
              <button 
                type="button" 
                className="button button--ghost"
                onClick={() => setStep('options')}
                style={{ flex: 1 }}
              >
                Back
              </button>
              <button 
                type="submit" 
                className="button button--primary"
                style={{ flex: 1 }}
              >
                Verify & Enter
              </button>
            </div>
          </form>
        )}

        <div style={{ marginTop: '20px', fontSize: '11px', color: 'var(--color-text-faint)' }}>
          By continuing, you agree to HiLLO's Terms of Service and Risk Disclosures.
        </div>
      </div>
    </div>
  );
};
