import React, { useState } from 'react';

export const TrackRecordSection: React.FC = () => {
  const [hoveredPoint, setHoveredPoint] = useState<{ date: string; agent: string; hold: string } | null>(null);

  return (
    <section className="section" id="track-record">
      <div className="container">
        <div className="section-heading">
          <span className="label">Track record</span>
          <h2 className="section-heading__title words">
            <span className="word">Every</span>{' '}
            <span className="word">agent</span>{' '}
            <span className="word">next</span>{' '}
            <span className="word">to</span>{' '}
            <span className="highlight">
              <span className="word">just</span>{' '}
              <span className="word">holding.</span>
            </span>
          </h2>
          <p className="section-heading__lead reveal">
            Palantir Trend running live. The agent cut losses on the way down, while holding stayed underwater.
          </p>
        </div>

        <div className="card reveal" style={{ padding: 'var(--space-300, 24px)', overflow: 'hidden' }}>
          {/* Header & Legend */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
            <div>
              <strong style={{ fontSize: '18px', display: 'block' }}>Palantir Trend vs PLTR Buy & Hold</strong>
              <span className="muted" style={{ fontSize: '13px' }}>Hourly track record (Last 30 days)</span>
            </div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center', fontSize: '13px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '12px', height: '3px', background: 'var(--color-brand-green, #00ee16)', borderRadius: '2px', boxShadow: '0 0 8px rgba(0,238,22,0.6)' }}></span>
                <span>Palantir Trend (Agent)</span>
                <strong className="loss" style={{ marginLeft: '4px' }}>−4.3%</strong>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '12px', height: '0px', borderTop: '2px dashed var(--color-hold-line, #888)' }}></span>
                <span>PLTR (Hold)</span>
                <strong className="loss" style={{ marginLeft: '4px' }}>−19.0%</strong>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--color-gain-soft, rgba(0,238,22,0.12))', padding: '4px 10px', borderRadius: '9999px', border: '1px solid rgba(0,238,22,0.25)' }}>
                <span style={{ color: 'var(--color-brand-green, #00ee16)', fontWeight: 700 }}>+14.7 pts</span>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '12px' }}>vs holding</span>
              </div>
            </div>
          </div>

          {/* Responsive SVG Chart */}
          <div style={{ position: 'relative', width: '100%', height: 'auto', minHeight: '260px' }}>
            <svg 
              viewBox="0 0 600 300" 
              style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}
              onMouseLeave={() => setHoveredPoint(null)}
            >
              {/* Glow Filter */}
              <defs>
                <filter id="greenGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Grid Lines */}
              <line x1="8" y1="64" x2="592" y2="64" stroke="var(--color-border, rgba(255,255,255,0.06))" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="8" y1="132" x2="592" y2="132" stroke="var(--color-border, rgba(255,255,255,0.12))" strokeWidth="1" />
              <line x1="8" y1="200" x2="592" y2="200" stroke="var(--color-border, rgba(255,255,255,0.06))" strokeWidth="1" strokeDasharray="3 3" />

              {/* Baseline 0% */}
              <text x="596" y="136" fontSize="10" fill="var(--color-text-faint)" textAnchor="start">0%</text>
              <text x="596" y="68" fontSize="10" fill="var(--color-text-faint)" textAnchor="start">+10%</text>
              <text x="596" y="204" fontSize="10" fill="var(--color-text-faint)" textAnchor="start">-20%</text>

              {/* Holding PLTR line (dashed) */}
              <path 
                d="M8.0,140.2 L37.2,121.2 L51.8,80.6 L71.3,185.6 L105.3,166.8 L144.3,161.2 L178.3,185.8 L222.1,182.0 L246.5,223.2 L280.5,217.5 L304.9,257.8 L358.4,200.6 L402.2,195.0 L436.3,151.6 L475.2,30.2 L494.7,153.4 L548.2,149.9 L572.5,87.3 L592.0,210.0" 
                fill="none" 
                stroke="var(--color-hold-line, #71717a)" 
                strokeWidth="1.5" 
                strokeDasharray="4 4" 
                strokeLinejoin="round" 
                strokeLinecap="round" 
              />

              {/* HiLLO Agent line (Solid Logo Neon Green with glow) */}
              <path 
                d="M8.0,131.9 L46.9,87.9 L71.3,115.6 L85.9,81.3 L90.7,64.0 L139.4,64.0 L168.6,83.1 L188.1,77.1 L217.3,75.6 L251.3,118.4 L280.5,112.1 L304.9,148.0 L363.3,148.0 L426.5,155.4 L446.0,143.5 L514.1,143.5 L557.9,147.3 L572.5,142.2 L592.0,142.2" 
                fill="none" 
                stroke="var(--color-brand-green, #00ee16)" 
                strokeWidth="2.5" 
                strokeLinejoin="round" 
                strokeLinecap="round" 
                filter="url(#greenGlow)"
              />

              {/* Interactive nodes */}
              <circle cx="85.9" cy="81.3" r="4" fill="var(--color-brand-green, #00ee16)" />
              <circle cx="304.9" cy="148.0" r="4" fill="var(--color-brand-green, #00ee16)" />
              <circle cx="592.0" cy="142.2" r="5" fill="#00ee16" stroke="#fff" strokeWidth="2" />

              {/* Axis dates */}
              <text x="8" y="285" fontSize="11" fill="var(--color-text-faint)" textAnchor="start">Oct 11</text>
              <text x="300" y="285" fontSize="11" fill="var(--color-text-faint)" textAnchor="middle">Oct 26</text>
              <text x="592" y="285" fontSize="11" fill="var(--color-text-faint)" textAnchor="end">Nov 10</text>
            </svg>
          </div>

          <p className="note" style={{ marginTop: '16px' }}>
            <i className="ph ph-info"></i>
            Live paper trading since launch. Agent protected capital by sitting in cash during 3 steep PLTR drawdowns.
          </p>
        </div>
      </div>
    </section>
  );
};
