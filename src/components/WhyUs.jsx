import Reveal from "./Reveal";
const items = [
  [
    "◈",
    "Practical Learning",
    "Learn concepts with a focus on real chart context and application.",
  ],
  [
    "▤",
    "Structured Education",
    "Follow clear learning paths instead of scattered information.",
  ],
  [
    "◎",
    "Multiple Markets",
    "Explore equities, options, crypto, Forex, and Gold concepts.",
  ],
  [
    "◐",
    "Risk Management",
    "Make risk awareness central to every trading decision.",
  ],
  [
    "◌",
    "Trading Psychology",
    "Develop habits that support consistency and discipline.",
  ],
  ["↗", "Community", "Learn alongside a growing community of market learners."],
];
export default function WhyUs() {
  return (
    <section className="section section-tint">
      <Reveal>
        <div className="section-heading">
          <div>
            <p className="eyebrow">Built for better decisions</p>
            <h2>Why Trading Techstreet?</h2>
          </div>
        </div>
      </Reveal>
      <div className="card-grid why-grid">
        {items.map(([icon, title, text], i) => (
          <Reveal key={title} delay={i * 65}>
            <article className="card why-card">
              <span className="feature-icon">{icon}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
