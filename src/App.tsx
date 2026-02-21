import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Addons from './components/Addons';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-charcoal text-cream font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Features />
      <Pricing />
      <Addons />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
