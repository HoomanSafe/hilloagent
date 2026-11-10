import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (idx: number) => {
    if (openIndices.includes(idx)) {
      setOpenIndices(openIndices.filter((i) => i !== idx));
    } else {
      setOpenIndices([...openIndices, idx]);
    }
  };

  return (
    <section className="section section--subtle" id="faq">
      <div className="container">
        <div className="section-heading section-heading--center">
          <span className="label">FAQ</span>
          <h2 className="section-heading__title words">
            <span className="word">Before</span>{' '}
            <span className="word">you</span>{' '}
            <span className="highlight">
              <span className="word">build.</span>
            </span>
          </h2>
        </div>

        <div className="faq reveal" style={{ maxWidth: '780px', margin: '0 auto' }}>
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <details 
                key={idx} 
                open={isOpen}
                onClick={(e) => {
                  e.preventDefault();
                  toggleIndex(idx);
                }}
                style={{ cursor: 'pointer' }}
              >
                <summary style={{ listStyle: 'none' }}>
                  <span>{item.q}</span>
                  <i 
                    className={`ph ${isOpen ? 'ph-minus' : 'ph-plus'}`} 
                    style={{ transition: 'transform 0.2s ease', transform: isOpen ? 'rotate(90deg)' : 'none' }}
                  ></i>
                </summary>
                <p style={{ marginTop: '12px' }}>{item.a}</p>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
};
