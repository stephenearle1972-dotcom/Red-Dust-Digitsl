import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-[#1f1f1f] relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-dust/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl md:text-5xl font-bold text-cream mb-6"
          >
            Our Track Record
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-dust mx-auto mb-10"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-cream/80 text-lg md:text-xl leading-relaxed mb-10"
          >
            4 live projects. 11 directory sites across South Africa. Thousands of business listings. AI-powered WhatsApp bots handling enquiries 24/7. We let our work speak for itself.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            href="#portfolio"
            className="inline-flex items-center justify-center px-8 py-4 border border-gold text-gold font-medium rounded-sm hover:bg-gold hover:text-charcoal transition-colors uppercase tracking-wide text-sm min-h-[44px]"
          >
            View Our Portfolio
          </motion.a>
        </div>
      </div>
    </section>
  );
}
