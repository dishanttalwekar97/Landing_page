import Reveal from "./Reveal";
export default function About() {
  return (
    <section id="about" className="section">
      <Reveal className="two-column">
        <div>
          <p className="eyebrow">The approach</p>
          <h2>Learn Trading From Experience</h2>
        </div>
        <div className="body-copy">
          <p>
            Trading Techstreet turns complex market concepts into structured,
            practical learning. Each lesson is designed to help you read price
            with more clarity and approach decisions with discipline.
          </p>
          <p>
            From price action and chart structure to trading psychology and
            money management, the learning path serves both beginners building
            foundations and experienced traders refining their process.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
