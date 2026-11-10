import React, { useEffect, useState } from 'react';

export const StatsBand: React.FC = () => {
  const [decisions, setDecisions] = useState(33005);

  // Increment decisions gently over time to give that live paper trading desk feel
  useEffect(() => {
    const timer = setInterval(() => {
      setDecisions((prev) => prev + 1);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="stats-band" aria-label="HiLLO in numbers">
      <div className="stat-big">
        <span className="stat-big__label">Markets</span>
        <span className="stat-big__value">
          <span className="odometer" data-odometer="true" aria-label="22">
            <span className="odometer__digit" data-digit="2" aria-hidden="true">
              <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </span>
            <span className="odometer__digit" data-digit="2" aria-hidden="true">
              <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </span>
          </span>
        </span>
      </div>

      <div className="stat-big">
        <span className="stat-big__label">Agents running</span>
        <span className="stat-big__value">
          <span className="odometer" data-odometer="true" aria-label="25">
            <span className="odometer__digit" data-digit="2" aria-hidden="true">
              <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </span>
            <span className="odometer__digit" data-digit="5" aria-hidden="true">
              <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </span>
          </span>
        </span>
      </div>

      <div className="stat-big">
        <span className="stat-big__label">Decisions explained</span>
        <span className="stat-big__value">
          <span style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 600 }}>
            {decisions.toLocaleString()}
          </span>
        </span>
      </div>

      <div className="stat-big">
        <span className="stat-big__label">Hours of real prices</span>
        <span className="stat-big__value">
          <span className="odometer" data-odometer="true" aria-label="900">
            <span className="odometer__digit" data-digit="9" aria-hidden="true">
              <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </span>
            <span className="odometer__digit" data-digit="0" aria-hidden="true">
              <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </span>
            <span className="odometer__digit" data-digit="0" aria-hidden="true">
              <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </span>
            <span style={{ marginLeft: '2px', fontSize: '28px', opacity: 0.8 }}>+</span>
          </span>
        </span>
      </div>
    </section>
  );
};
