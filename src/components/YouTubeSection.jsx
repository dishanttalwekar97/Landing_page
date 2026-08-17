import Reveal from "./Reveal";
const videos = [
  "Price action essentials",
  "Scalping setup breakdown",
  "Risk management framework",
  "Understanding liquidity",
  "Trading psychology guide",
  "Market structure analysis",
];
export default function YouTubeSection() {
  return (
    <section id="youtube" className="section">
      <Reveal>
        <div className="center-heading">
          <p className="eyebrow">Trading Techstreet on YouTube</p>
          <h2>Learn. Analyze. Trade.</h2>
          <p>
            Clear market education and actionable analysis for your trading
            study routine.
          </p>
        </div>
      </Reveal>
      <div className="video-grid">
        {videos.map((title, i) => (
          <Reveal key={title} delay={i * 65}>
            <article className="video-card">
              <div
                className="thumbnail"
                role="img"
                aria-label={`Placeholder thumbnail for ${title}`}
              >
                <span className="play">▶</span>
                <span className="chart-line"></span>
              </div>
              <h3>{title}</h3>
              <p>Trading Techstreet · Video lesson</p>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="center-action">
        <a href="#" className="button button--ghost">
          Watch More on YouTube →
        </a>
        {/* Replace # with the official Trading Techstreet YouTube channel URL before launch. */}
      </Reveal>
    </section>
  );
}
