import Reveal from "./Reveal";
const stats = [
  ["950K+", "YouTube Community"],
  ["5,000+", "Students"],
  ["5+", "Years Trading Experience"],
  ["500+", "Educational Videos"],
];
export default function TrustStats() {
  return (
    <section className="stats-wrap">
      {/* Confirm these published audience and content metrics with the client before launch. */}
      <Reveal className="stats">
        {stats.map(([number, label], i) => (
          <div className="stat" key={label} style={{ "--i": i }}>
            <strong>{number}</strong>
            <span>{label}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
