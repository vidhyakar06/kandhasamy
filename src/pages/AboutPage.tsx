import React from 'react';
import { motion } from 'framer-motion';
import { Award, Feather, ShieldCheck, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 overflow-hidden bg-primary">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">
                Our Story
              </span>
              <h1 className="text-5xl md:text-7xl font-serif text-text-dark mb-8 leading-tight">
                A Legacy Woven <br /> in <span className="italic">Every Thread.</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
                The name Kandhasamy Textile has been synonymous with exceptional textile craftsmanship for generations. What started as a small family weaving tradition in the heart of India has evolved into a global symbol of heritage and luxury.
              </p>
              <p className="text-gray-600 mb-10 leading-relaxed font-light">
                Our mission is simple: to bring the unmatched comfort of high-quality, ethically sourced textiles into every home, honoring the ancient techniques that make our fabrics truly special.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src="/assets/govindaraja/g1.jpg" 
                  alt="Traditional Weaving" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 border-8 border-accent-gold/20 -z-10 hidden md:block"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-beige-light py-24 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-text-dark mb-4">The Pillars of Kandhasamy Textile</h2>
            <div className="w-20 h-1 bg-accent-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Feather className="text-accent-gold" size={32} />, title: "Feather Light", desc: "Our unique weave ensures maximum absorbency without the heavy weight." },
              { icon: <Award className="text-accent-gold" size={32} />, title: "Master Craft", desc: "Every piece is inspected by third-generation master weavers." },
              { icon: <ShieldCheck className="text-accent-gold" size={32} />, title: "Fully Organic", desc: "100% GOTS certified organic cotton and bamboo fibers." },
              { icon: <Heart className="text-accent-gold" size={32} />, title: "Made with Love", desc: "Ethics and sustainability at the heart of everything we do." }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-white flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-md transition-shadow">
                  {value.icon}
                </div>
                <h3 className="text-lg font-serif mb-3 uppercase tracking-wider">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Detail */}
      <section className="px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, order: 2 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:order-1"
            >
              <div className="aspect-square relative overflow-hidden bg-gray-100">
                <img 
                  src="/assets/govindaraja/g5.jpg" 
                  alt="Textile Detail" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-accent-gold/10 mix-blend-multiply"></div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:order-2"
            >
              <span className="text-accent-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">
                The Craft
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-text-dark mb-8">Where Art Meets <br /> <span className="italic">Daily Ritual.</span></h2>
              <p className="text-gray-600 mb-6 leading-relaxed font-light">
                Our weaving process is slow, deliberate, and intentional. From the selection of long-staple cotton fibers to the precision of the loom settings, every step is calculated to achieve the perfect balance of softness and strength.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed font-light">
                The signature Kandhasamy Textile patterns are more than just designs; they are geometric representations of heritage motifs that have protected and comforted families for centuries.
              </p>
              <div className="flex gap-10">
                <div>
                  <p className="text-3xl font-serif text-accent-gold">40+</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Years of Heritage</p>
                </div>
                <div>
                  <p className="text-3xl font-serif text-accent-gold">100%</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Sustainable</p>
                </div>
                <div>
                  <p className="text-3xl font-serif text-accent-gold">25</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Master Weavers</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote / Call to action */}
      <section className="bg-text-dark py-24 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="mb-6 flex justify-center">
             <div className="w-10 h-px bg-accent-gold/40"></div>
             <Heart className="mx-4 text-accent-gold/40" size={20} />
             <div className="w-10 h-px bg-accent-gold/40"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-10 italic leading-snug">
            "We don't just sell textiles; we offer a connection to a slower, more beautiful way of living."
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="lux-button"
          >
            Explore Our Collection
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;

