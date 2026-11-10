import React, { useState } from 'react';

export const RoadmapSection: React.FC = () => {
  const [activeTradingMode, setActiveTradingMode] = useState<'paper' | 'live'>('live');
  const [stopSwitchActive, setStopSwitchActive] = useState(true);
  const [tradeLimit, setTradeLimit] = useState(250);

  return (
    <section className="panel-dark next-panel" id="roadmap">
      <div className="container">
        <div className="section-heading section-heading--center">
          <span className="label">Roadmap</span>
          <h2 className="section-heading__title words">
            <span className="word">What&#x27;s</span>{' '}
            <span className="highlight">
              <span className="word">next.</span>
            </span>
          </h2>
          <p className="section-heading__lead reveal">
            Live today: paper trading, crypto markets and real money trading on chain. Planned: the agent launchpad.
          </p>
        </div>

        <div className="next-grid">
          {/* Card 1: Agent Launchpad */}
          <article className="next-card next-card--featured reveal">
            <div className="next-preview" aria-hidden="true">
              <div className="next-token">
                <img src="/img/icons/agent.png" alt="" width={32} height={32} />
                <span>
                  <strong>Night Owl NVDA</strong>
                  <span>Agent token on Pons</span>
                </span>
                <span className="next-token__ticker">$OWL</span>
              </div>

              <span className="next-flow"></span>

              <div className="next-split">
                <span className="next-split__head">Creator fees, split by contract</span>

                <div className="next-split__row" style={{ '--share': 70, '--i': 0 } as React.CSSProperties}>
                  <span>Agent creator</span>
                  <span className="next-split__bar">
                    <span style={{ width: '70%' }}></span>
                  </span>
                  <strong className="next-split__pct">70%</strong>
                </div>

                <div className="next-split__row" style={{ '--share': 20, '--i': 1 } as React.CSSProperties}>
                  <span>Agent AI fuel</span>
                  <span className="next-split__bar">
                    <span style={{ width: '20%' }}></span>
                  </span>
                  <strong className="next-split__pct">20%</strong>
                </div>

                <div className="next-split__row" style={{ '--share': 10, '--i': 2 } as React.CSSProperties}>
                  <span>HiLLO buyback and burn</span>
                  <span className="next-split__bar">
                    <span style={{ width: '10%' }}></span>
                  </span>
                  <strong className="next-split__pct">10%</strong>
                </div>
              </div>

              <div className="next-stop next-launch">
                <span>Launch on Pons</span>
                <i className="ph ph-rocket-launch"></i>
              </div>
            </div>

            <div className="next-card__body">
              <span className="next-card__badge">
                <span className="pulse"></span>Planned, not built
              </span>
              <h3>Agent launchpad</h3>
              <p>
                The plan: launch a token for your agent on Pons, right from HiLLO, with a contract that splits the creator fees so part of them keeps the agent&#x27;s AI running.
              </p>
              <ul className="next-points">
                <li style={{ '--i': 0 } as React.CSSProperties}>
                  <i className="ph ph-rocket-launch" aria-hidden="true"></i> Two steps from your own wallet
                </li>
                <li style={{ '--i': 1 } as React.CSSProperties}>
                  <i className="ph ph-git-fork" aria-hidden="true"></i> Fee split to be enforced by contract, no admin
                </li>
                <li style={{ '--i': 2 } as React.CSSProperties}>
                  <i className="ph ph-users-three" aria-hidden="true"></i> Anyone could launch on a published agent, its creator still earns
                </li>
              </ul>
            </div>

            <div className="next-card__foot">
              <i className="ph ph-hourglass-medium"></i>Now: writing the fee split contract, then an audit
            </div>
          </article>

          {/* Card 2: Real money trading */}
          <article className="next-card reveal">
            <div className="next-preview" aria-hidden="true">
              <div className="next-mode">
                <span 
                  className={`next-mode__option ${activeTradingMode === 'paper' ? 'next-mode__option--on' : ''}`}
                  onClick={() => setActiveTradingMode('paper')}
                  style={{ cursor: 'pointer' }}
                >
                  <i className="ph ph-flask"></i> Paper
                </span>
                <span 
                  className={`next-mode__option ${activeTradingMode === 'live' ? 'next-mode__option--on' : ''}`}
                  onClick={() => setActiveTradingMode('live')}
                  style={{ cursor: 'pointer' }}
                >
                  <i className="ph-fill ph-lock-simple"></i> Live
                </span>
              </div>

              <div className="next-wallet">
                <span className="next-wallet__icon">
                  <i className="ph ph-wallet"></i>
                </span>
                <span>
                  <strong>Your wallet</strong>
                  <span>Funds never leave it</span>
                </span>
                <span className="next-wallet__ok">
                  <i className="ph-fill ph-shield-check"></i>
                </span>
              </div>

              <div className="next-limit">
                <span className="next-limit__head">
                  <span>Limit per trade</span>
                  <strong>${tradeLimit} max</strong>
                </span>
                <input
                  type="range"
                  min="50"
                  max="1000"
                  step="25"
                  value={tradeLimit}
                  onChange={(e) => setTradeLimit(Number(e.target.value))}
                  style={{ width: '100%', marginTop: '6px', accentColor: 'var(--color-brand-green, #00ee16)' }}
                />
              </div>

              <div className="next-stop" onClick={() => setStopSwitchActive(!stopSwitchActive)} style={{ cursor: 'pointer' }}>
                <span>Stop the agent anytime</span>
                <span className={`next-switch ${stopSwitchActive ? 'next-switch--on' : ''}`} style={{ background: stopSwitchActive ? 'var(--color-brand-green, #00ee16)' : undefined }}></span>
              </div>
            </div>

            <div className="next-card__body">
              <span className="next-card__badge">
                <span className="pulse"></span>Live
              </span>
              <h3>Real money trading</h3>
              <p>
                Run your agent from your own wallet, with limits you set and a switch to stop it at any time. Paper trading stays free.
              </p>
            </div>

            <div className="next-card__foot">
              <i className="ph ph-hourglass-medium"></i>Live on Robinhood Chain. See every trade on chain
            </div>
          </article>

          {/* Card 3: Crypto markets */}
          <article className="next-card reveal">
            <div className="next-preview" aria-hidden="true">
              <div className="next-tabs">
                <span>Stocks</span>
                <span className="next-tabs__on">Crypto</span>
              </div>

              <div className="next-coin">
                <span className="next-coin__icon">
                  <i className="ph ph-currency-eth"></i>
                </span>
                <strong>Ether</strong>
                <svg viewBox="0 0 64 24" className="next-coin__spark">
                  <path d="M2 22 L12 16 L22 19 L32 10 L42 13 L52 6 L62 9" fill="none" stroke="var(--color-brand-green, #00ee16)" strokeWidth="1.5"></path>
                </svg>
                <span className="next-skeleton"></span>
              </div>

              <div className="next-coin">
                <span className="next-coin__icon">
                  <i className="ph ph-currency-btc"></i>
                </span>
                <strong>Bitcoin</strong>
                <svg viewBox="0 0 64 24" className="next-coin__spark">
                  <path d="M2 18 L12 20 L22 12 L32 15 L42 8 L52 11 L62 5" fill="none" stroke="var(--color-brand-green, #00ee16)" strokeWidth="1.5"></path>
                </svg>
                <span className="next-skeleton"></span>
              </div>

              <div className="next-coin">
                <span className="next-coin__icon">
                  <i className="ph ph-coins"></i>
                </span>
                <strong>More tokens</strong>
                <svg viewBox="0 0 64 24" className="next-coin__spark">
                  <path d="M2 14 L12 18 L22 15 L32 19 L42 12 L52 14 L62 8" fill="none" stroke="var(--color-brand-green, #00ee16)" strokeWidth="1.5"></path>
                </svg>
                <span className="next-skeleton"></span>
              </div>
            </div>

            <div className="next-card__body">
              <span className="next-card__badge">
                <span className="pulse"></span>Live now
              </span>
              <h3>Crypto markets</h3>
              <p>
                ETH and BTC on Robinhood Chain, priced every hour from onchain pools and checked against Chainlink. Mix them with stocks in one agent.
              </p>
            </div>

            <div className="next-card__foot">
              <i className="ph ph-hourglass-medium"></i>Next: more coins once their pools are deep enough
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
