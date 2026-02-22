import { motion } from 'motion/react';

const unsplash = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const features = [
  {
    title: "AI-Powered Development",
    description: "We use cutting-edge AI tools to build sites faster and smarter. What used to take weeks now takes days — without sacrificing quality.",
    image: 'photo-1677442136019-21780ecad995'
  },
  {
    title: "Mobile-First & Lightning Fast",
    description: "Over 80% of South African web traffic is mobile. Every site we build is optimised for phones first, desktop second.",
    image: 'photo-1512941937669-90a1b58e7e9c'
  },
  {
    title: "Real Business Understanding",
    description: "We're not just developers — we're business owners too. We understand what drives enquiries, bookings, and sales.",
    image: 'photo-1552664730-d307ca884978'
  },
  {
    title: "Ongoing Support",
    description: "We don't disappear after launch. Monthly hosting, updates, security, and content management included in every package.",
    image: 'photo-1573497019940-1c28c88b4f3e'
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
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-20`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2"
              >
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden group">
                  <img
                    src={unsplash(feature.image, 800)}
                    srcSet={`${unsplash(feature.image, 400)} 400w, ${unsplash(feature.image, 800)} 800w, ${unsplash(feature.image, 1200)} 1200w`}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    loading="lazy"
                  />
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
