import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const packages = [
  {
    name: "Starter",
    price: "R4,500",
    monthly: "R299/mo",
    description: "Perfect for new businesses needing a professional online presence.",
    features: [
      "Single page scrolling site",
      "Image gallery",
      "Contact form",
      "WhatsApp chat button",
      "Mobile responsive design",
      "Basic SEO setup",
      "Standard hosting"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "R8,500",
    monthly: "R449/mo",
    description: "Our most popular package for lodges and established outfitters.",
    features: [
      "Multi-page website (up to 5)",
      "Booking/Enquiry form",
      "PayFast payment integration",
      "Full masonry gallery",
      "Google Business integration",
      "Advanced SEO setup",
      "1hr monthly content updates",
      "Premium hosting"
    ],
    popular: true
  },
  {
    name: "Premium",
    price: "R14,000",
    monthly: "R699/mo",
    description: "The ultimate digital machine for high-volume businesses.",
    features: [
      "Everything in Professional",
      "E-commerce shop setup",
      "AI WhatsApp Assistant bot",
      "Multilingual support (2 languages)",
      "Blog / News section",
      "Custom booking calendar",
      "2hrs monthly content updates",
      "Priority support"
    ],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl md:text-5xl font-bold text-cream mb-4"
          >
            Packages
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-dust mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-cream/70 max-w-2xl mx-auto"
          >
            Transparent pricing. No hidden fees. Choose the package that fits your business stage.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {packages.map((pkg, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative bg-[#222] rounded-sm border ${pkg.popular ? 'border-dust shadow-[0_0_30px_rgba(196,87,42,0.15)] md:-translate-y-4' : 'border-white/5'} p-8 flex flex-col h-full`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dust text-white px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-sm">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="font-heading text-2xl font-semibold text-gold mb-2">{pkg.name}</h3>
                <p className="text-cream/60 text-sm h-10">{pkg.description}</p>
              </div>
              
              <div className="mb-8 pb-8 border-b border-white/10">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-cream">{pkg.price}</span>
                  <span className="text-cream/50 text-sm">setup</span>
                </div>
                <div className="text-dust font-medium mt-1">+ {pkg.monthly}</div>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-cream/80 text-sm">
                    <Check className="w-5 h-5 text-sage shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className={`w-full py-4 text-center rounded-sm font-medium uppercase tracking-wide text-sm transition-colors duration-300 ${
                  pkg.popular 
                    ? 'bg-dust text-white hover:bg-dust/90' 
                    : 'bg-transparent border border-white/20 text-cream hover:border-gold hover:text-gold'
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-cream/70">
            Need something custom? <a href="#contact" className="text-gold hover:underline underline-offset-4">Let's talk.</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
