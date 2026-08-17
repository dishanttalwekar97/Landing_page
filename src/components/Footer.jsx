export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <a className="brand" href="#top">
          <span className="brand-mark">T</span>
          <span>
            Trading <em>Techstreet</em>
          </span>
        </a>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#courses">Courses</a>
          <a href="#youtube">YouTube</a>
          <a href="#community">Community</a>
        </div>
        <div className="socials" aria-label="Social media">
          <a href="#" aria-label="YouTube">
            ▶
          </a>
          <a href="#" aria-label="Telegram">
            ✈
          </a>
          <a href="#" aria-label="Instagram">
            ◎
          </a>
        </div>
      </div>
      <p className="disclaimer">
        <strong>Disclaimer:</strong> All content is for educational and
        informational purposes only and does not constitute financial advice.
        Trading involves risk of loss; always do your own research and consider
        your individual circumstances.
      </p>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Trading Techstreet. All rights reserved.
        </span>
        <span>Built for disciplined learning.</span>
      </div>
      {/* Replace social # links with official URLs before launch. */}
    </footer>
  );
}
