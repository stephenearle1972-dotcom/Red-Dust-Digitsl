import { motion } from 'motion/react';
import { Tent, Crosshair, Camera, ShoppingBag, MessageSquare, CalendarCheck } from 'lucide-react';

const services = [
  {
    icon: <Tent className="w-8 h-8 text-dust" />,
    title: "Lodge & Safari Websites",
    description: "Immersive sites that showcase your property and drive direct bookings."
  },
  {
    icon: <Crosshair className="w-8 h-8 text-dust" />,
    title: "Hunting & Outfitter Sites",
    description: "Professional platforms built for international and local hunting clients."
  },
  {
    icon: <Camera className="w-8 h-8 text-dust" />,
    title: "Photography Portfolios",
    description: "Gallery-driven sites with e-commerce for print and digital sales."
  },
  {
    icon: <ShoppingBag className="w-8 h-8 text-dust" />,
    title: "E-Commerce & Online Shops",
    description: "Sell products, packages, and experiences with integrated PayFast payments."
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-dust" />,
    title: "AI WhatsApp Assistants",
    description: "24/7 intelligent chatbots that answer enquiries and capture leads while you sleep."
  },
  {
    icon: <CalendarCheck className="w-8 h-8 text-dust" />,
    title: "Booking & Enquiry Systems",
    description: "Availability calendars, deposit payments, and automated confirmations."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-charcoal p-8 rounded-sm border border-white/5 hover:border-dust/30 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(196,87,42,0.1)] transition-all duration-300 group"
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
