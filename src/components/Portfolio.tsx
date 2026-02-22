import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const cld = (publicId: string, w: number) =>
  `https://res.cloudinary.com/dkn6tnxao/image/upload/f_auto,c_scale,q_auto:good,w_${w}/v1/${publicId}`;

const projects = [
  {
    title: "Askari Photography",
    category: "Photography & E-Commerce",
    description: "Award-winning wildlife photography portfolio with integrated online print shop, gallery lightbox, and PayFast checkout. Scroll-triggered animations and cinematic dark theme.",
    image: 'reddust/portfolio/askari-desktop',
    link: "https://askariphoto.netlify.app/"
  },
  {
    title: "DCJ Training",
    category: "Education & Training",
    description: "LEGO Robotics after-school program website with online registration, pricing tiers, event calendar, and gallery. Built for parent-friendly mobile browsing.",
    image: 'reddust/portfolio/dcj-desktop',
    link: "https://dcjtraining.co.za/"
  },
  {
    title: "TownConnect",
    category: "Directory Platform",
    description: "Franchise-model hyperlocal business directory platform operating across 11 South African towns. AI-powered WhatsApp bots, PayFast payments, and partner management.",
    image: 'reddust/portfolio/townconnect-desktop',
    link: "https://townconnect.co.za/"
  },
  {
    title: "MenlynConnect",
    category: "Local Directory",
    description: "Community business directory for the Menlyn area, Pretoria. Part of the TownConnect network, featuring local business listings, categories, and direct contact integration.",
    image: 'reddust/portfolio/menlynconnect-desktop',
    link: "https://menlynconnect.co.za/"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#f8f5f0]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-heading text-3xl md:text-5xl font-bold text-charcoal mb-4"
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
            className="text-dust hover:text-charcoal transition-colors flex items-center gap-2 uppercase tracking-wide text-sm font-medium"
          >
            Start Your Project <span aria-hidden="true">&rarr;</span>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-sm cursor-pointer block shadow-lg shadow-black/10"
            >
              <div className="aspect-video overflow-hidden bg-charcoal/5">
                <img
                  src={cld(project.image, 800)}
                  srcSet={`${cld(project.image, 400)} 400w, ${cld(project.image, 800)} 800w, ${cld(project.image, 1200)} 1200w`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  alt={`${project.title} website screenshot`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <p className="text-dust font-medium text-xs uppercase tracking-wider mb-2">
                  {project.category}
                </p>
                <h3 className="font-heading text-xl md:text-2xl font-semibold text-cream mb-2 flex items-center gap-2">
                  {project.title}
                  <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-cream/70 text-sm leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
