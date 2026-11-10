import React from 'react';

export const TaglineSection: React.FC = () => {
  const sentence = "Most trading ideas sound smart until you replay them against real prices. We show you the truth before you commit.".split(" ");

  return (
    <section className="section section--subtle">
      <div className="container">
        <p className="tagline" data-tagline="true">
          {sentence.map((word, idx) => (
            <span key={idx} className="tagline__word" style={{ transitionDelay: `${idx * 40}ms` }}>
              {word}{' '}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};
