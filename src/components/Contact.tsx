import { motion } from 'motion/react';
import { MapPin, Mail, Phone, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1547471080-7cb2cb6a5a36?q=80&w=2670&auto=format&fit=crop")',
          backgroundAttachment: 'fixed'
        }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto bg-[#1f1f1f]/90 backdrop-blur-sm border border-white/10 rounded-sm overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            
            {/* Contact Form */}
            <div className="lg:col-span-3 p-8 md:p-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-heading text-3xl md:text-4xl font-bold text-cream mb-2"
              >
                Ready to leave your mark in the dust?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-cream/60 mb-8"
              >
                Fill out the form below and we'll get back to you within 24 hours.
              </motion.p>

              <motion.form 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-cream/80">Name</label>
                    <input type="text" id="name" className="w-full bg-charcoal border border-white/10 rounded-sm px-4 py-3 text-cream focus:outline-none focus:border-dust transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-cream/80">Email</label>
                    <input type="email" id="email" className="w-full bg-charcoal border border-white/10 rounded-sm px-4 py-3 text-cream focus:outline-none focus:border-dust transition-colors" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-cream/80">Phone / WhatsApp</label>
                    <input type="tel" id="phone" className="w-full bg-charcoal border border-white/10 rounded-sm px-4 py-3 text-cream focus:outline-none focus:border-dust transition-colors" placeholder="+27 82 123 4567" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="type" className="text-sm font-medium text-cream/80">Business Type</label>
                    <select id="type" className="w-full bg-charcoal border border-white/10 rounded-sm px-4 py-3 text-cream focus:outline-none focus:border-dust transition-colors appearance-none">
                      <option value="">Select an option...</option>
                      <option value="lodge">Lodge / Accommodation</option>
                      <option value="hunting">Hunting Farm / Outfitter</option>
                      <option value="photography">Photography</option>
                      <option value="local">Local Business</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-cream/80">Project Details</label>
                  <textarea id="message" rows={4} className="w-full bg-charcoal border border-white/10 rounded-sm px-4 py-3 text-cream focus:outline-none focus:border-dust transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                </div>

                <button type="submit" className="w-full bg-dust text-white font-medium py-4 rounded-sm hover:bg-dust/90 transition-colors uppercase tracking-wide text-sm">
                  Send Enquiry
                </button>
              </motion.form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 bg-dust p-8 md:p-12 text-white flex flex-col justify-center">
              <h3 className="font-heading text-2xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-white/80 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-white/80">Waterberg District<br/>Limpopo, South Africa</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-white/80 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:hello@reddustdigital.co.za" className="text-white/80 hover:text-white transition-colors">hello@reddustdigital.co.za</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-white/80 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:+27821234567" className="text-white/80 hover:text-white transition-colors">+27 82 123 4567</a>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-white/20">
                  <a href="#" className="inline-flex items-center gap-2 bg-white text-dust px-6 py-3 rounded-sm font-medium hover:bg-cream transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
