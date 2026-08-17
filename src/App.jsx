import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStats from "./components/TrustStats";
import About from "./components/About";
import Courses from "./components/Courses";
import YouTubeSection from "./components/YouTubeSection";
import Founder from "./components/Founder";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Community from "./components/Community";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStats />
        <About />
        <Courses />
        <YouTubeSection />
        <Founder />
        <WhyUs />
        <Testimonials />
        <Community />
      </main>
      <Footer />
    </>
  );
}
