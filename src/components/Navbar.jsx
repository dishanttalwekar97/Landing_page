import { useEffect, useState } from 'react';

const links = [['About', 'about'], ['Courses', 'courses'], ['YouTube', 'youtube'], ['Founder', 'founder'], ['Testimonials', 'testimonials'], ['Community', 'community']];
export default function Navbar() {
  const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false); const [progress, setProgress] = useState(0);
  useEffect(() => { const onScroll = () => { setScrolled(window.scrollY > 20); const distance = document.documentElement.scrollHeight - window.innerHeight; setProgress(distance > 0 ? (window.scrollY / distance) * 100 : 0); }; onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll); }, []);
  const close = () => setOpen(false);
  return <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
    <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} aria-hidden="true"></div>
    <nav className="nav-shell" aria-label="Main navigation">
      <a href="#top" className="brand" onClick={close}><span className="brand-mark">T</span><span>Trading <em>Techstreet</em></span></a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="nav-links"><span></span><span></span><span></span><span className="sr-only">Toggle navigation</span></button>
      <div id="nav-links" className={`nav-links ${open ? 'nav-links--open' : ''}`}>{links.map(([label, id]) => <a href={`#${id}`} key={id} onClick={close}>{label}</a>)}<a className="button button--small" href="#courses" onClick={close}>Explore Courses</a></div>
    </nav>
  </header>;
}
