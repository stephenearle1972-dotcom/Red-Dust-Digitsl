import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Red Dust Digital completely transformed our online presence. Since launching the new site, our direct bookings from the US have increased by 40%. They truly understand the safari industry.",
    name: "Johan van der Merwe",
    role: "Owner, Waterberg Luxury Lodge",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
  },
  {
    quote: "The AI WhatsApp bot they installed has been a game changer. It answers client questions about rifle imports and hunting packages while we are out in the bush with no signal.",
    name: "Pieter Botha",
    role: "Head PH, Limpopo Hunting Safaris",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
  },
  {
    quote: "Fast, professional, and they speak our language. The e-commerce store they built for our farm stall has opened up a whole new revenue stream shipping biltong nationwide.",
    name: "Sarah Jenkins",
    role: "Manager, Bushveld Farm Stall",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-[#1f1f1f] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-dust/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl md:text-5xl font-bold text-cream mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-dust mx-auto"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-charcoal p-8 rounded-sm border border-white/5 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5" />
              <p className="text-cream/80 italic mb-8 relative z-10 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border border-gold/30"
                />
                <div>
                  <h4 className="font-heading font-semibold text-gold">{testimonial.name}</h4>
                  <p className="text-cream/50 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
