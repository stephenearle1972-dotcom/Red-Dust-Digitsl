import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Services', href: '#services' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-charcoal/95 backdrop-blur-md py-3 shadow-lg shadow-black/30' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="font-heading text-xl md:text-2xl font-bold tracking-tight text-cream">
            Red Dust <span className="text-dust">Digital</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-sm uppercase tracking-wider text-cream/80 hover:text-dust transition-colors">
                {link.name}
              </a>
            ))}
            <a href="#contact" className="px-5 py-2.5 bg-dust text-white text-sm uppercase tracking-wider rounded-sm hover:bg-dust/90 transition-colors">
              Get a Quote
            </a>
          </div>

          <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-charcoal flex flex-col items-center justify-center"
          >
            <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-5 right-6 p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center text-cream hover:text-dust">
              <X size={28} />
            </button>
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-heading text-3xl font-bold uppercase tracking-wider hover:text-dust transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-8 py-4 bg-dust text-white font-medium uppercase tracking-wider rounded-sm text-lg"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
