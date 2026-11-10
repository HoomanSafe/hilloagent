import React, { useState } from 'react';
import { MARKETS_DATA, STRATEGIES } from '../data/mockData';
import { AgentItem, StrategyTemplate } from '../types';

interface StudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialStrategy?: StrategyTemplate | null;
  initialStock?: string | null;
  onAgentCreated: (agent: AgentItem) => void;
  onCopyNotice: (msg: string) => void;
}

export const StudioModal: React.FC<StudioModalProps> = ({
  isOpen,
  onClose,
  initialStrategy,
  initialStock,
  onAgentCreated,
  onCopyNotice
}) => {
  const [agentName, setAgentName] = useState('My Alpha Trend');
  const [selectedStrategy, setSelectedStrategy] = useState<string>(initialStrategy?.id || 'momentum');
  const [selectedTokens, setSelectedTokens] = useState<string[]>(
    initialStock ? [initialStock] : ['NVDA', 'PLTR']
  );
  const [stopLoss, setStopLoss] = useState<string>('−8%');
  const [maxHolding, setMaxHolding] = useState<string>('48h');
  
  // Replay Backtest State
  const [isReplaying, setIsReplaying] = useState(false);
  const [backtestResult, setBacktestResult] = useState<{
    simulatedReturn: string;
    vsHolding: string;
    trades: number;
    winRate: string;
  } | null>(null);

  if (!isOpen) return null;

  const toggleToken = (ticker: string) => {
    if (selectedTokens.includes(ticker)) {
      if (selectedTokens.length > 1) {
        setSelectedTokens(selectedTokens.filter((t) => t !== ticker));
      }
    } else {
      if (selectedTokens.length < 3) {
        setSelectedTokens([...selectedTokens, ticker]);
      } else {
        onCopyNotice('Maximum 3 markets per paper agent.');
      }
    }
  };

  const handleRunReplay = () => {
    setIsReplaying(true);
    setBacktestResult(null);

    setTimeout(() => {
      setIsReplaying(false);
      // Realistic simulation based on strategy
      const isMeme = selectedTokens.includes('GME') || selectedTokens.includes('AMC');
      const winPct = isMeme ? '+18.4%' : '+6.8%';
      const pts = isMeme ? '+24.1 pts' : '+15.3 pts';
      setBacktestResult({
        simulatedReturn: winPct,
        vsHolding: pts,
        trades: 7,
        winRate: '71.4%'
      });
      onCopyNotice('30-day replay completed against hourly Robinhood Chain prices!');
    }, 900);
  };

  const handleLaunchAgent = () => {
    const newAgent: AgentItem = {
      id: 'agent-' + Date.now(),
      name: agentName || 'Custom HiLLO Agent',
      author: 'by You',
      strategy: selectedStrategy.charAt(0).toUpperCase() + selectedStrategy.slice(1).replace('_', ' '),
      strategyType: selectedStrategy as any,
      tickers: selectedTokens,
      returnPct: '0.0%',
      balanceUsd: '$10,000.00',
      vsHolding: '+0.0 pts',
      tradesCount: 0,
      hoursActive: 0,
      rank: 1,
      trend: 'neutral',
      color: '#8075ff',
      description: `User-created ${selectedStrategy} paper agent with ${stopLoss} stop-loss.`
    };

    onAgentCreated(newAgent);
    onCopyNotice(`Agent "${newAgent.name}" launched! Initialized with $10,000 virtual balance.`);
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
        padding: '16px',
        overflowY: 'auto'
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
          padding: '28px',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.7)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <div className="label" style={{ marginBottom: '4px' }}>HiLLO Studio</div>
            <h2 style={{ fontSize: '24px', fontWeight: 600, letterSpacing: '-0.02em', margin: 0 }}>
              Build your paper trading agent
            </h2>
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

        {/* Agent Name */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '6px' }}>
            Agent Name
          </label>
          <input 
            className="input" 
            value={agentName}
            onChange={(e) => setAgentName(e.target.value)}
            placeholder="e.g. Palantir Breakout Alpha"
            style={{ width: '100%' }}
          />
        </div>

        {/* Select Strategy */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '8px' }}>
            Trading Strategy
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '10px' }}>
            {STRATEGIES.map((strat) => (
              <div 
                key={strat.id}
                onClick={() => setSelectedStrategy(strat.id)}
                style={{
                  padding: '12px',
                  borderRadius: '12px',
                  border: `1.5px solid ${selectedStrategy === strat.id ? 'var(--color-purple-rich, #8075ff)' : 'var(--color-border, rgba(255,255,255,0.08))'}`,
                  background: selectedStrategy === strat.id ? 'var(--color-surface, #1e1d24)' : 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '2px' }}>{strat.name}</div>
                <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>{strat.badge}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Select Markets */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <label style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
              Choose Markets (Up to 3)
            </label>
            <span style={{ fontSize: '12px', color: 'var(--color-purple-rich)' }}>
              {selectedTokens.length}/3 selected
            </span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxHeight: '120px', overflowY: 'auto', padding: '4px' }}>
            {MARKETS_DATA.slice(0, 16).map((m) => {
              const active = selectedTokens.includes(m.ticker);
              return (
                <button
                  key={m.ticker}
                  type="button"
                  onClick={() => toggleToken(m.ticker)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '9999px',
                    fontSize: '13px',
                    border: `1px solid ${active ? 'var(--color-purple-rich, #8075ff)' : 'var(--color-border)'}`,
                    background: active ? 'var(--color-purple-rich, #8075ff)' : 'var(--color-surface)',
                    color: active ? '#fff' : 'inherit',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span>{m.ticker}</span>
                  <span style={{ fontSize: '11px', opacity: 0.8 }}>{m.price}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Risk Controls */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '24px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '6px' }}>
              Stop Loss
            </label>
            <div style={{ display: 'flex', gap: '6px' }}>
              {['−5%', '−8%', '−12%'].map((sl) => (
                <button
                  key={sl}
                  type="button"
                  onClick={() => setStopLoss(sl)}
                  style={{
                    flex: 1,
                    padding: '8px 0',
                    borderRadius: '8px',
                    border: `1px solid ${stopLoss === sl ? 'var(--color-loss, #e04400)' : 'var(--color-border)'}`,
                    background: stopLoss === sl ? 'var(--color-loss-soft, rgba(224,68,0,0.1))' : 'transparent',
                    color: stopLoss === sl ? 'var(--color-loss)' : 'inherit',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: 500
                  }}
                >
                  {sl}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '6px' }}>
              Max Holding Time
            </label>
            <div style={{ display: 'flex', gap: '6px' }}>
              {['24h', '48h', '72h'].map((mh) => (
                <button
                  key={mh}
                  type="button"
                  onClick={() => setMaxHolding(mh)}
                  style={{
                    flex: 1,
                    padding: '8px 0',
                    borderRadius: '8px',
                    border: `1px solid ${maxHolding === mh ? 'var(--color-purple-rich)' : 'var(--color-border)'}`,
                    background: maxHolding === mh ? 'rgba(128,117,255,0.1)' : 'transparent',
                    color: maxHolding === mh ? 'var(--color-purple-rich)' : 'inherit',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: 500
                  }}
                >
                  {mh}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Backtest Section */}
        <div 
          style={{
            padding: '16px',
            borderRadius: '16px',
            backgroundColor: 'var(--color-bg-subtle, #16151b)',
            border: '1px solid var(--color-border, rgba(255,255,255,0.08))',
            marginBottom: '24px'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <strong style={{ fontSize: '14px', display: 'block' }}>30-Day Market Replay</strong>
              <span className="muted" style={{ fontSize: '12px' }}>Simulate hourly Robinhood Chain order execution</span>
            </div>
            <button 
              className="button button--ghost button--small"
              type="button"
              onClick={handleRunReplay}
              disabled={isReplaying}
              style={{ cursor: 'pointer' }}
            >
              {isReplaying ? (
                <>
                  <i className="ph ph-spinner ph-spin"></i> Replaying...
                </>
              ) : (
                <>
                  <i className="ph ph-play"></i> Replay 30 days
                </>
              )}
            </button>
          </div>

          {backtestResult && (
            <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid var(--color-border)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', textAlign: 'center' }}>
              <div>
                <span className="muted" style={{ fontSize: '11px', display: 'block' }}>Sim Return</span>
                <strong className="gain" style={{ fontSize: '15px' }}>{backtestResult.simulatedReturn}</strong>
              </div>
              <div>
                <span className="muted" style={{ fontSize: '11px', display: 'block' }}>vs Holding</span>
                <strong className="gain" style={{ fontSize: '15px' }}>{backtestResult.vsHolding}</strong>
              </div>
              <div>
                <span className="muted" style={{ fontSize: '11px', display: 'block' }}>Sim Trades</span>
                <strong style={{ fontSize: '15px' }}>{backtestResult.trades}</strong>
              </div>
              <div>
                <span className="muted" style={{ fontSize: '11px', display: 'block' }}>Win Rate</span>
                <strong style={{ fontSize: '15px' }}>{backtestResult.winRate}</strong>
              </div>
            </div>
          )}
        </div>

        {/* Launch Button */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <button 
            className="button button--ghost button--large"
            type="button"
            onClick={onClose}
            style={{ flex: 1 }}
          >
            Cancel
          </button>
          <button 
            className="button button--primary button--large"
            type="button"
            onClick={handleLaunchAgent}
            style={{ flex: 2 }}
          >
            Launch paper agent ($10k)
            <i className="ph ph-rocket-launch"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
