import { motion } from 'motion/react';
import { Cpu, Smartphone, Briefcase, HeadphonesIcon } from 'lucide-react';
import type { ReactNode } from 'react';

const features: { icon: ReactNode; title: string; description: string }[] = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "AI-Powered Development",
    description: "We use cutting-edge AI tools to build sites faster and smarter. What used to take weeks now takes days — without sacrificing quality."
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile-First & Lightning Fast",
    description: "Over 80% of South African web traffic is mobile. Every site we build is optimised for phones first, desktop second."
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Real Business Understanding",
    description: "We're not just developers — we're business owners too. We understand what drives enquiries, bookings, and sales."
  },
  {
    icon: <HeadphonesIcon className="w-8 h-8" />,
    title: "Ongoing Support",
    description: "We don't disappear after launch. Monthly hosting, updates, security, and content management included in every package."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Features() {
  return (
    <section className="py-24 md:py-32 bg-[#1f1f1f]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-charcoal p-8 md:p-10 rounded-sm border border-white/5 hover:border-dust/30 transition-all duration-300 group"
            >
              <div className="mb-6 p-4 bg-dust/10 inline-block rounded-sm text-dust group-hover:bg-dust/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-semibold text-gold mb-4">
                {feature.title}
              </h3>
              <p className="text-cream/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
