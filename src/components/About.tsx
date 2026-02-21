import { motion } from 'motion/react';

const cld = (publicId: string, w: number) =>
  `https://res.cloudinary.com/dkn6tnxao/image/upload/f_auto,c_scale,q_auto:good,w_${w}/v1/${publicId}`;

const BG_IMAGE = 'reddust/backgrounds/wildlife-landscape-1';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={cld(BG_IMAGE, 1200)}
          srcSet={`${cld(BG_IMAGE, 400)} 400w, ${cld(BG_IMAGE, 800)} 800w, ${cld(BG_IMAGE, 1200)} 1200w`}
          sizes="100vw"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-charcoal/85"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-heading text-3xl md:text-5xl font-bold text-cream mb-6"
          >
            Built <span className="text-gold">Different</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-dust mx-auto mb-10"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-cream/80 text-lg leading-relaxed"
          >
            Red Dust Digital builds modern, lightning-fast websites for South African businesses. From local directories to photography portfolios, training platforms to e-commerce — we craft digital experiences that look stunning and actually drive results. Based in Limpopo and powered by the latest AI-assisted development tools, we deliver agency-quality websites at a fraction of the traditional cost and turnaround time.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
