import Reveal from "./Reveal";
const courses = [
  [
    "01",
    "Price Action Trading",
    "Understand market structure, price movement, and the key levels that matter.",
  ],
  [
    "02",
    "Scalping",
    "Learn short-term concepts, setups, and clearer execution frameworks.",
  ],
  [
    "03",
    "Options Trading",
    "Explore options, market behaviour, setups, and risk management.",
  ],
  [
    "04",
    "Smart Money Concepts",
    "Study liquidity, market structure, FVG, and related concepts.",
  ],
  [
    "05",
    "Crypto Trading",
    "Navigate crypto markets with practical setups and risk awareness.",
  ],
  [
    "06",
    "Forex & Gold",
    "Build foundations for trading the Forex and Gold markets.",
  ],
];
export default function Courses() {
  return (
    <section id="courses" className="section section-tint">
      <Reveal>
        <div className="section-heading">
          <div>
            <p className="eyebrow">Study with intention</p>
            <h2>Courses for Every Stage of the Journey</h2>
          </div>
          <p>
            Focused lessons. Practical frameworks. A more disciplined way to
            learn.
          </p>
        </div>
      </Reveal>
      <div className="card-grid courses-grid">
        {courses.map(([num, title, text], i) => (
          <Reveal key={title} delay={i * 70}>
            <article className="card course-card">
              <span className="card-number">{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#community" aria-label={`Learn more about ${title}`}>
                Explore topic <span>→</span>
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
