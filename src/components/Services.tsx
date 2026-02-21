import { motion } from 'motion/react';
import { Globe, ShoppingBag, MapPin, Camera, MessageSquare, CalendarCheck } from 'lucide-react';

const services = [
  {
    icon: <Globe className="w-8 h-8 text-dust" />,
    title: "Business Websites",
    description: "Professional, mobile-first websites that showcase your business and convert visitors into customers."
  },
  {
    icon: <ShoppingBag className="w-8 h-8 text-dust" />,
    title: "E-Commerce & Online Shops",
    description: "Sell products and services online with secure PayFast payment integration."
  },
  {
    icon: <MapPin className="w-8 h-8 text-dust" />,
    title: "Directory & Listing Platforms",
    description: "Hyperlocal business directories that connect communities with local services."
  },
  {
    icon: <Camera className="w-8 h-8 text-dust" />,
    title: "Photography & Portfolio Sites",
    description: "Gallery-driven sites with lightbox viewing, print sales, and stunning visual impact."
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-dust" />,
    title: "AI WhatsApp Assistants",
    description: "24/7 intelligent chatbots that answer enquiries and capture leads while you sleep."
  },
  {
    icon: <CalendarCheck className="w-8 h-8 text-dust" />,
    title: "Booking & Enquiry Systems",
    description: "Online booking forms, availability calendars, and automated confirmations."
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

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#1f1f1f]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl md:text-5xl font-bold text-cream mb-4"
          >
            What We Build
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-charcoal p-6 md:p-8 rounded-sm border border-white/5 hover:border-dust/30 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(196,87,42,0.1)] transition-all duration-300 group"
            >
              <div className="mb-6 p-4 bg-[#252525] inline-block rounded-sm group-hover:bg-dust/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="font-heading text-xl font-semibold text-gold mb-3">
                {service.title}
              </h3>
              <p className="text-cream/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
