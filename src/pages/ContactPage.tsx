import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Facebook } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="pt-32 pb-24 bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">
            Connect with us
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif text-text-dark mb-4 uppercase tracking-widest">
            Contact KANDHASAMY TEXTILE
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto italic font-light">
            Whether you have a question about our heritage collections or need assistance with your order, we are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white p-6 sm:p-10 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-serif text-text-dark mb-8 uppercase tracking-wider">Get in Touch</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-beige-light flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-accent-gold" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold tracking-widest text-gray-400 mb-1">Our Heritage Studio</p>
                    <p className="text-sm text-text-dark">Eswaran Kovil Street, Manikudu,<br /> Erode, Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-beige-light flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-accent-gold" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold tracking-widest text-gray-400 mb-1">Inquiries</p>
                    <p className="text-sm text-text-dark">srinivasanKandasamy540@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-beige-light flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-accent-gold" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold tracking-widest text-gray-400 mb-1">Call Us</p>
                    <p className="text-sm text-text-dark">+91 98428 07243 <br /> +91 94431 50160</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xs uppercase font-bold tracking-widest text-gray-400 mb-6">Follow Our Journey</h3>
              <div className="flex gap-4">
                {[
                  { Icon: Instagram, href: 'https://www.instagram.com', label: 'Instagram' },
                  { Icon: Twitter, href: 'https://www.twitter.com', label: 'Twitter' },
                  { Icon: Facebook, href: 'https://www.facebook.com', label: 'Facebook' },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 border border-gray-100 flex items-center justify-center hover:bg-text-dark hover:text-white hover:border-text-dark transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-gray-100 h-64 relative overflow-hidden grayscale">
               <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400">Interactive Map View</p>
               </div>
               <img src="/assets/towels/texture.png" alt="Map Texture" className="w-full h-full object-cover opacity-20" />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white p-6 sm:p-10 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-serif text-text-dark mb-8 uppercase tracking-wider">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-primary border border-gray-100 py-3 px-4 focus:outline-none focus:border-accent-gold transition-colors text-sm"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-primary border border-gray-100 py-3 px-4 focus:outline-none focus:border-accent-gold transition-colors text-sm"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2">Subject</label>
                  <select
                    id="subject"
                    className="w-full bg-primary border border-gray-100 py-3 px-4 focus:outline-none focus:border-accent-gold transition-colors text-sm appearance-none"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  >
                    <option value="">Select a subject</option>
                    <option value="Product Inquiry">Product Inquiry</option>
                    <option value="Order Support">Order Support</option>
                    <option value="Bespoke Request">Bespoke Request</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="w-full bg-primary border border-gray-100 py-3 px-4 focus:outline-none focus:border-accent-gold transition-colors text-sm resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full lux-button flex items-center justify-center gap-3 py-4"
                >
                  Send Message <Send size={16} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

