import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-cream mb-6">
              Born in the Bush. <br/>
              <span className="text-gold">Built for Business.</span>
            </h2>
            <div className="w-20 h-1 bg-dust mb-8"></div>
            
            <div className="space-y-6 text-cream/80 text-lg leading-relaxed">
              <p>
                Based in the Waterberg, Limpopo, Red Dust Digital builds stunning, high-performance websites for the wildlife and hospitality industry.
              </p>
              <p>
                We understand your world because we live in it. From luxury lodges to hunting outfitters, photography portfolios to local businesses — we craft digital experiences that convert visitors into bookings.
              </p>
              <p>
                No cookie-cutter templates. No generic corporate speak. Just authentic, powerful web design that speaks to your ideal client.
              </p>
            </div>
            
            <div className="mt-10">
              <img 
                src="https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?q=80&w=2600&auto=format&fit=crop" 
                alt="Waterberg Landscape" 
                className="w-full h-48 object-cover rounded-sm grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative h-[500px] lg:h-[700px] rounded-sm overflow-hidden"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: 'url("https://images.unsplash.com/photo-1547471080-7cb2cb6a5a36?q=80&w=2670&auto=format&fit=crop")',
                backgroundAttachment: 'fixed' // Parallax effect
              }}
            ></div>
            <div className="absolute inset-0 bg-charcoal/20"></div>
            <div className="absolute inset-0 border border-gold/20 m-6 rounded-sm"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
