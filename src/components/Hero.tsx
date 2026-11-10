import React, { useState } from 'react';
import { CONTRACT_ADDRESS, CONTRACT_ADDRESS_SHORT, LOGO_PATH } from '../data/mockData';

interface HeroProps {
  onOpenStudio: () => void;
  onScrollToLeaderboard: () => void;
  onCopyNotice: (msg: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenStudio,
  onScrollToLeaderboard,
  onCopyNotice
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    onCopyNotice('Contract address copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="hero">
      <a 
        className="hero__badge" 
        href="#leaderboard"
        onClick={(e) => {
          e.preventDefault();
          onScrollToLeaderboard();
        }}
      >
        <img 
          src={LOGO_PATH} 
          alt="HiLLO Mark" 
          width={24} 
          height={24} 
          style={{ borderRadius: '4px' }}
        />
        <span>Open trading-agent infrastructure on Robinhood Chain</span>
        <i className="ph ph-caret-right"></i>
      </a>

      <h1 className="hero__title words">
        <span className="word" style={{ transitionDelay: '0ms' }}>Trading</span>{' '}
        <span className="word" style={{ transitionDelay: '55ms' }}>agents</span>{' '}
        <span className="word" style={{ transitionDelay: '110ms' }}>for</span>{' '}
        <span className="highlight">
          <span className="word" style={{ transitionDelay: '165ms' }}>stocks</span>{' '}
          <span className="word" style={{ transitionDelay: '220ms' }}>and</span>{' '}
          <span className="word" style={{ transitionDelay: '275ms' }}>crypto</span>
        </span>
      </h1>

      <p className="hero__lead reveal">
        Explore tokenized stocks, crypto, and perps. Build strategies, replay them against hourly market history, and inspect every paper-trading decision.
      </p>

      <div className="hero__actions reveal">
        <button 
          className="button button--primary button--large" 
          type="button"
          onClick={onOpenStudio}
        >
          Build your agent
        </button>
        <button 
          className="button button--ghost button--large" 
          type="button"
          onClick={onScrollToLeaderboard}
        >
          See live agents
        </button>
      </div>

      <button 
        className="token-pill" 
        type="button" 
        aria-label={`Copy the HiLLO contract address ${CONTRACT_ADDRESS}`}
        onClick={handleCopy}
      >
        <span className="token-pill__label">$HILLO CA</span>
        <code>{CONTRACT_ADDRESS_SHORT}</code>
        <i className={`ph ${copied ? 'ph-check' : 'ph-copy'}`} aria-hidden="true"></i>
      </button>
    </section>
  );
};
