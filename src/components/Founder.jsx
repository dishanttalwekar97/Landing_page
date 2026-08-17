import Reveal from "./Reveal";
export default function Founder() {
  return (
    <section id="founder" className="section founder-section">
      <div className="founder-glow"></div>
      <Reveal className="founder-layout">
        {/* Replace this abstract placeholder with an approved client portrait before launch. */}
        <div
          className="founder-portrait"
          role="img"
          aria-label="Abstract placeholder portrait for Akhand Pratap Singh"
        >
          <span>APS</span>
        </div>
        <div>
          <p className="eyebrow">Meet your mentor</p>
          <h2>Akhand Pratap Singh</h2>
          <p className="founder-role">
            Professional Trader &amp; Trading Educator
          </p>
          <p className="body-copy">
            With over five years of market experience, Akhand Pratap Singh
            teaches traders to focus on understanding price, managing risk, and
            developing a process they can follow with confidence. His work has
            helped more than 5,000 students make their learning more structured.
          </p>
          <div className="badges">
            <span>5+ Years Experience</span>
            <span>5,000+ Students</span>
            <span>3+ Awards</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
