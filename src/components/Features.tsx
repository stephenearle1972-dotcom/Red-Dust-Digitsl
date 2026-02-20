import { motion } from 'motion/react';

const features = [
  {
    title: "Built for the Bush",
    description: "We know your clients, your seasons, your challenges. No cookie-cutter templates. We build custom solutions tailored to the unique needs of the wildlife and hospitality industry.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2668&auto=format&fit=crop"
  },
  {
    title: "Mobile-First & Lightning Fast",
    description: "90% of your enquiries come from phones. Our sites are built for speed, ensuring your stunning imagery loads instantly even on patchy bushveld connections.",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "AI-Powered Tools",
    description: "WhatsApp bots that handle enquiries at 2am when your American hunting client is browsing. Capture leads and answer FAQs automatically while you sleep.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop"
  },
  {
    title: "Ongoing Support",
    description: "We don't disappear after launch. Monthly hosting, security updates, and content management are included. Consider us your outsourced digital team.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
  }
];

export default function Features() {
  return (
    <section className="py-24 md:py-32 bg-[#1f1f1f] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl md:text-5xl font-bold text-cream mb-4"
          >
            Why Red Dust Digital?
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-dust mx-auto"
          ></motion.div>
        </div>

        <div className="space-y-24 md:space-y-32">
          {features.map((feature, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2"
              >
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden group">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                    style={{ 
                      backgroundImage: `url(${feature.image})`,
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-1/2"
              >
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-gold mb-6">
                  {feature.title}
                </h3>
                <p className="text-cream/80 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
