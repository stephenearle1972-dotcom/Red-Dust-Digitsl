import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail, Phone, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error('Form submission error:', err);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto bg-[#1f1f1f]/90 backdrop-blur-sm border border-white/10 rounded-sm overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-5">

            <div className="lg:col-span-3 p-6 sm:p-8 md:p-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-heading text-3xl md:text-4xl font-bold text-cream mb-2"
              >
                Let's Build Something
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

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-dust/10 border border-dust/30 p-8 text-center rounded-sm"
                >
                  <h3 className="font-heading text-2xl font-bold mb-3 text-gold">Thank You!</h3>
                  <p className="text-cream/70">Your enquiry has been sent. We'll be in touch within 24 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm uppercase tracking-wider text-dust hover:text-cream transition-colors"
                  >
                    Send Another Enquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-cream/80">Name</label>
                      <input type="text" id="name" name="name" required className="w-full bg-charcoal border border-white/10 rounded-sm px-4 py-3 text-cream focus:outline-none focus:border-dust transition-colors min-h-[44px]" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-cream/80">Email</label>
                      <input type="email" id="email" name="email" required className="w-full bg-charcoal border border-white/10 rounded-sm px-4 py-3 text-cream focus:outline-none focus:border-dust transition-colors min-h-[44px]" placeholder="you@example.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-cream/80">Phone / WhatsApp</label>
                      <input type="tel" id="phone" name="phone" className="w-full bg-charcoal border border-white/10 rounded-sm px-4 py-3 text-cream focus:outline-none focus:border-dust transition-colors min-h-[44px]" placeholder="+27 071 422 9928" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="type" className="text-sm font-medium text-cream/80">Business Type</label>
                      <select id="type" name="business-type" className="w-full bg-charcoal border border-white/10 rounded-sm px-4 py-3 text-cream focus:outline-none focus:border-dust transition-colors appearance-none min-h-[44px]">
                        <option value="">Select an option...</option>
                        <option value="small-business">Small Business</option>
                        <option value="ecommerce">E-Commerce</option>
                        <option value="directory">Directory / Listings</option>
                        <option value="photography">Photography / Portfolio</option>
                        <option value="training">Training / Education</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="budget" className="text-sm font-medium text-cream/80">Budget Range</label>
                      <select id="budget" name="budget" className="w-full bg-charcoal border border-white/10 rounded-sm px-4 py-3 text-cream focus:outline-none focus:border-dust transition-colors appearance-none min-h-[44px]">
                        <option value="">Select budget...</option>
                        <option value="under-5000">Under R5,000</option>
                        <option value="5000-10000">R5,000 - R10,000</option>
                        <option value="10000-15000">R10,000 - R15,000</option>
                        <option value="15000+">R15,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-cream/80">Project Details</label>
                    <textarea id="message" name="message" rows={4} required className="w-full bg-charcoal border border-white/10 rounded-sm px-4 py-3 text-cream focus:outline-none focus:border-dust transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-dust text-white font-medium py-4 rounded-sm hover:bg-dust/90 transition-colors uppercase tracking-wide text-sm min-h-[44px]">
                    Send Enquiry
                  </button>
                </motion.form>
              )}
            </div>

            <div className="lg:col-span-2 bg-dust p-6 sm:p-8 md:p-12 text-white flex flex-col justify-center">
              <h3 className="font-heading text-2xl font-bold mb-8">Contact Information</h3>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-white/80 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-white/80">Waterberg, Vaalwater<br/>Limpopo, South Africa</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-white/80 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:spe@heatt.co.za" className="text-white/80 hover:text-white transition-colors">spe@heatt.co.za</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-white/80 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:+27714229928" className="text-white/80 hover:text-white transition-colors">+27 071 422 9928</a>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-white/20">
                  <a href="https://wa.me/27714229928" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-dust px-6 py-3 rounded-sm font-medium hover:bg-cream transition-colors min-h-[44px]">
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
