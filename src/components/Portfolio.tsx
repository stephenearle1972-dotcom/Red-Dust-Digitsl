import { motion } from 'motion/react';

const projects = [
  {
    title: "Askari Wildlife Photography",
    category: "Portfolio & E-Commerce",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=2590&auto=format&fit=crop"
  },
  {
    title: "Waterberg Luxury Lodge",
    category: "Lodge & Booking",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Limpopo Hunting Safaris",
    category: "Outfitter Platform",
    image: "https://images.unsplash.com/photo-1504280741734-e47ea321c172?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Bushveld Farm Stall",
    category: "Local E-Commerce",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop"
  },
  {
    title: "Wilderness Trail Outfitters",
    category: "Adventure Booking",
    image: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Marula Country Estate",
    category: "Property Showcase",
    image: "https://images.unsplash.com/photo-1580982335151-51203b5f7954?q=80&w=2670&auto=format&fit=crop"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-heading text-3xl md:text-5xl font-bold text-cream mb-4"
            >
              Our Work
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-dust"
            ></motion.div>
          </div>
          <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            href="#contact" 
            className="text-gold hover:text-cream transition-colors flex items-center gap-2 uppercase tracking-wide text-sm font-medium"
          >
            Start Your Project <span aria-hidden="true">&rarr;</span>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm cursor-pointer"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-dust font-medium text-sm uppercase tracking-wider mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {project.category}
                </p>
                <h3 className="font-heading text-2xl font-semibold text-cream">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
