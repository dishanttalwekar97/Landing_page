import Reveal from "./Reveal";
const testimonials = [
  [
    "“The lessons made chart reading feel far more structured and less overwhelming.”",
    "Learner Name",
  ],
  [
    "“I appreciated the steady focus on risk and process instead of chasing shortcuts.”",
    "Learner Name",
  ],
  [
    "“The course flow gave me a practical way to organize my market study.”",
    "Learner Name",
  ],
];
export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <Reveal>
        <div className="center-heading">
          <p className="eyebrow">Student perspective</p>
          <h2>Learn With a Stronger Framework</h2>
        </div>
      </Reveal>
      <div className="card-grid testimonial-grid">
        {/* PLACEHOLDER testimonials: replace all quotes and names with verified client-provided testimonials before launch. */}
        {testimonials.map(([quote, name], i) => (
          <Reveal key={i} delay={i * 100}>
            <figure className="card testimonial">
              <div className="stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <blockquote>{quote}</blockquote>
              <figcaption>
                <span className="avatar">{i + 1}</span>
                <span>
                  <strong>{name}</strong>
                  <small>Course Student</small>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
