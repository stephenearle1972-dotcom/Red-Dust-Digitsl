import { ArrowUp, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111] pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h2 className="font-heading text-2xl font-bold text-cream mb-4">
              Red Dust <span className="text-dust">Digital</span>
            </h2>
            <p className="text-cream/60 max-w-sm mb-6">
              Premium digital solutions for lodges, outfitters & wildlife businesses in the African bush.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-sm bg-charcoal flex items-center justify-center text-cream/60 hover:text-dust hover:bg-white/5 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-charcoal flex items-center justify-center text-cream/60 hover:text-dust hover:bg-white/5 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-charcoal flex items-center justify-center text-cream/60 hover:text-dust hover:bg-white/5 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-gold mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-cream/60 hover:text-dust transition-colors">About Us</a></li>
              <li><a href="#services" className="text-cream/60 hover:text-dust transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-cream/60 hover:text-dust transition-colors">Our Work</a></li>
              <li><a href="#pricing" className="text-cream/60 hover:text-dust transition-colors">Packages</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-gold mb-4 uppercase tracking-wider text-sm">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-cream/60 hover:text-dust transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-cream/60 hover:text-dust transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-sm">
            &copy; {new Date().getFullYear()} Red Dust Digital. All rights reserved.
          </p>
          <p className="text-cream/40 text-sm flex items-center gap-1">
            Proudly built in the Waterberg, Limpopo
          </p>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-sm bg-charcoal flex items-center justify-center text-cream/60 hover:text-dust hover:bg-white/5 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
