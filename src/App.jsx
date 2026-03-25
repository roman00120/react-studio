import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import Benefits from "./sections/Benefits.jsx";
import Features from "./sections/Features.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Pricing from "./sections/Pricing.jsx";
import CTA from "./sections/CTA.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => (
  <div className="min-h-screen bg-ocean-950 text-slate-100">
    <Navbar />
    <main>
      <Hero />
      <div className="divider" />
      <Benefits />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />
    </main>
    <Footer />
  </div>
);

export default App;
