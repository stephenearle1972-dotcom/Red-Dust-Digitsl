import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax effect */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2668&auto=format&fit=crop")',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-charcoal/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-transparent to-charcoal"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center mt-16">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 tracking-tight"
        >
          Red Dust <span className="text-dust">Digital</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-3xl font-heading text-gold mb-4 max-w-3xl text-balance"
        >
          Websites that capture the wild heart of your business
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg text-cream/80 mb-10 max-w-2xl text-balance"
        >
          Premium digital solutions for lodges, outfitters & wildlife businesses in the African bush.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a href="#portfolio" className="px-8 py-4 bg-dust text-white font-medium rounded-sm hover:bg-dust/90 transition-colors duration-300 text-center uppercase tracking-wide text-sm">
            View Our Work
          </a>
          <a href="#contact" className="px-8 py-4 bg-transparent border border-gold text-gold font-medium rounded-sm hover:bg-gold hover:text-charcoal transition-colors duration-300 text-center uppercase tracking-wide text-sm">
            Get a Quote
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <a href="#about" className="text-cream/50 hover:text-gold transition-colors">
            <ChevronDown size={32} strokeWidth={1.5} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
