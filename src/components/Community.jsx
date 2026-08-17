import Reveal from "./Reveal";
import { FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

const communities = [
  {
    icon: FaYoutube,
    title: "YouTube",
    text: "Weekly lessons, market breakdowns, and practical trading education.",
    note: "New videos every week",
    href: "#",
  },
  {
    icon: FaTelegramPlane,
    title: "Telegram",
    text: "Stay connected with the learning community and timely updates.",
    note: "Live community channel",
    href: "#",
  },
  {
    icon: FaInstagram,
    title: "Instagram",
    text: "Short-form market insights, reels, and educational snippets.",
    note: "Daily insight posts",
    href: "#",
  },
  {
    icon: MdSchool,
    title: "Course App",
    text: "Access structured lessons and progress through content at your pace.",
    note: "Learn anytime, anywhere",
    href: "#",
  },
];
export default function Community() {
  return (
    <section id="community" className="section community-section">
      <div className="community-glow"></div>
      <Reveal>
        <div className="center-heading">
          <p className="eyebrow">Stay connected</p>
          <h2>Join the Trading Community.</h2>
          <p>
            Learn with Trading Techstreet across every platform you already use.
          </p>
        </div>
      </Reveal>
      <div className="card-grid community-grid">
        {communities.map(({ icon: Icon, title, text, note, href }, i) => (
          <Reveal key={title} delay={i * 85}>
            <a
              className="card community-card"
              href={href}
              aria-label={`Visit Trading Techstreet on ${title}`}
            >
              <span className="community-icon" aria-hidden="true">
                <Icon />
              </span>
              <div className="community-copy">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <div className="community-meta">
                <span className="community-note">{note}</span>
                <span className="arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
      {/* Replace # placeholders with official social and app links before launch. */}
    </section>
  );
}
