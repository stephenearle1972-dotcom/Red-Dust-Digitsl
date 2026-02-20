import { motion } from 'motion/react';
import { Bot, ShoppingCart, Calendar, Megaphone, Camera } from 'lucide-react';

const addons = [
  {
    icon: <Bot className="w-6 h-6" />,
    title: "AI WhatsApp Assistant",
    price: "R3,500 setup + R349/mo"
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "E-Commerce Module",
    price: "R3,000 setup + R149/mo"
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Booking Calendar",
    price: "R2,500 setup + R99/mo"
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Google Ads Management",
    price: "R1,500 setup + R800/mo"
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Professional Photography",
    price: "From R3,500 / day"
  }
];

export default function Addons() {
  return (
    <section className="py-20 bg-[#1a1a1a] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-heading text-2xl md:text-4xl font-bold text-cream mb-2"
            >
              Power-Ups
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-cream/60"
            >
              Add these modules to any package at any time.
            </motion.p>
          </div>
        </div>

        <div className="flex overflow-x-auto pb-8 -mx-6 px-6 snap-x snap-mandatory hide-scrollbar gap-4 md:grid md:grid-cols-3 lg:grid-cols-5 md:overflow-visible md:pb-0 md:px-0 md:mx-0">
          {addons.map((addon, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="min-w-[260px] md:min-w-0 snap-start bg-[#252525] p-6 rounded-sm border border-white/5 hover:border-gold/30 transition-colors flex flex-col"
            >
              <div className="text-sage mb-4 bg-sage/10 w-12 h-12 rounded-sm flex items-center justify-center">
                {addon.icon}
              </div>
              <h3 className="font-heading font-semibold text-cream mb-2">{addon.title}</h3>
              <p className="text-dust text-sm font-medium mt-auto">{addon.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
