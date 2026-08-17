import Reveal from "./Reveal";
export default function Hero() {
  return (
    <section id="top" className="hero section">
      <div className="hero-glow"></div>
      <div className="chart-motif" aria-hidden="true">
        {[30, 55, 42, 78, 61, 94, 70, 108, 86, 124, 102, 144].map((h, i) => (
          <i key={i} style={{ height: h }}></i>
        ))}
      </div>
      <Reveal className="hero-content">
        <p className="eyebrow">Trading education, built on discipline</p>
        <h1>
          Master the Markets.
          <br />
          <span>Trade With Confidence.</span>
        </h1>
        <p className="hero-copy">
          Build practical skill in Price Action, Scalping, Technical Analysis,
          Risk Management, and the habits that support thoughtful trading
          decisions.
        </p>
        <div className="hero-actions">
          <a className="button" href="#courses">
            Explore Courses <span>→</span>
          </a>
          <a className="button button--ghost" href="#youtube">
            Watch on YouTube <span>↗</span>
          </a>
        </div>
        <p className="risk-note">
          Educational content for traders who value process over hype.
        </p>
      </Reveal>
    </section>
  );
}
