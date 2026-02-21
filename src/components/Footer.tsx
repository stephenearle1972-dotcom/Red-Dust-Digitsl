import { ArrowUp, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111] pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          <div className="sm:col-span-2">
            <h2 className="font-heading text-2xl font-bold text-cream mb-4">
              Red Dust <span className="text-dust">Digital</span>
            </h2>
            <p className="text-cream/60 max-w-sm mb-6">
              Modern, high-performance websites for South African businesses. Built with AI, backed by real expertise.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-sm bg-charcoal flex items-center justify-center text-cream/60 hover:text-dust hover:bg-white/5 transition-all min-h-[44px]">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-sm bg-charcoal flex items-center justify-center text-cream/60 hover:text-dust hover:bg-white/5 transition-all min-h-[44px]">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://wa.me/27714229928" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-sm bg-charcoal flex items-center justify-center text-cream/60 hover:text-dust hover:bg-white/5 transition-all min-h-[44px]">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-gold mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#portfolio" className="text-cream/60 hover:text-dust transition-colors">Portfolio</a></li>
              <li><a href="#services" className="text-cream/60 hover:text-dust transition-colors">Services</a></li>
              <li><a href="#pricing" className="text-cream/60 hover:text-dust transition-colors">Packages</a></li>
              <li><a href="#contact" className="text-cream/60 hover:text-dust transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-gold mb-4 uppercase tracking-wider text-sm">Contact</h3>
            <ul className="space-y-3 text-cream/60 text-sm">
              <li>Waterberg, Limpopo</li>
              <li><a href="mailto:spe@heatt.co.za" className="hover:text-dust transition-colors">spe@heatt.co.za</a></li>
              <li><a href="https://wa.me/27714229928" target="_blank" rel="noopener noreferrer" className="hover:text-dust transition-colors">+27 071 422 9928</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-sm">
            &copy; 2025 Red Dust Digital. All rights reserved.
          </p>
          <p className="text-cream/40 text-sm">
            Proudly built in Limpopo, South Africa
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-sm bg-charcoal flex items-center justify-center text-cream/60 hover:text-dust hover:bg-white/5 transition-all min-h-[44px]"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
