import React from 'react';
import { STRATEGIES } from '../data/mockData';
import { StrategyTemplate } from '../types';

interface StrategiesSectionProps {
  onSelectStrategy: (strat: StrategyTemplate) => void;
}

export const StrategiesSection: React.FC<StrategiesSectionProps> = ({ onSelectStrategy }) => {
  return (
    <section className="section" id="strategies" style={{ borderTop: '1px solid var(--color-border, rgba(255,255,255,0.06))' }}>
      <div className="container">
        <div className="section-heading">
          <span className="label">Strategies</span>
          <h2 className="section-heading__title words">
            <span className="word">A</span>{' '}
            <span className="word">strategy</span>{' '}
            <span className="word">for</span>{' '}
            <span className="word">every</span>{' '}
            <span className="highlight">
              <span className="word">market</span>{' '}
              <span className="word">mood.</span>
            </span>
          </h2>
          <p className="section-heading__lead reveal">
            Ride strong trends, buy the dip or write your own rules. Every agent is measured against the simplest move of all: buying and holding.
          </p>
        </div>

        <div className="strategy-grid">
          {STRATEGIES.map((strat) => (
            <div 
              key={strat.id} 
              className="strategy-card reveal" 
              onClick={() => onSelectStrategy(strat)}
              style={{ cursor: 'pointer' }}
              title={`Create a ${strat.name} agent`}
            >
              <div>
                <img 
                  className="strategy-card__icon" 
                  src={strat.icon} 
                  alt={strat.name} 
                  width={72} 
                  height={72} 
                />
                <div className="strategy-card__label">{strat.badge}</div>
                <h3 className="strategy-card__title">{strat.name}</h3>
                <p className="strategy-card__text">{strat.description}</p>
              </div>

              <div className="stack stack--tight" style={{ marginTop: '24px' }}>
                <div className="token-stack">
                  {strat.recommendedTokens.map((tok) => (
                    <span key={tok} className="token-dot">{tok}</span>
                  ))}
                </div>
                <div className="strategy-card__foot">
                  <span>
                    30 day backtest
                    <strong>{strat.backtestName}</strong>
                  </span>
                  <span style={{ textAlign: 'right' }}>
                    Vs holding
                    <strong style={{ color: 'var(--color-gain, #0a9a4c)' }}>{strat.backtestVsHolding}</strong>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
