import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-sky-50 border border-sky-100 rounded-full text-sky-700 text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Let's Start a{' '}
            <span className="text-sky-700">
              Conversation
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to invest in your people? Reach out to discuss your organization's goals
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-heading font-semibold text-slate-900 mb-4">Contact Information</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We're here to help you develop your human capital and strengthen your organization.
              Contact us through any of the following channels, and our team will respond promptly.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-sky-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-sky-700" size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:leangela@consultingram.com" className="text-slate-900 hover:text-sky-700 transition-colors duration-200 font-medium">
                    leangela@consultingram.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-sky-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-sky-700" size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Phone</p>
                  <a href="tel:+12026436011" className="text-slate-900 hover:text-sky-700 transition-colors duration-200 font-medium">
                    (202) 643-6011
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-sky-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-sky-700" size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Address</p>
                  <p className="text-slate-900 font-medium">
                    4938 Hampden Lane #302<br />
                    Bethesda, MD 20814
                  </p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="text-sm font-heading font-semibold text-slate-900 mb-3 uppercase tracking-wider">Office Hours</h4>
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-slate-600">
                  <span>Monday - Friday</span>
                  <span className="font-medium text-slate-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Saturday</span>
                  <span className="font-medium text-slate-500">By appointment</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Sunday</span>
                  <span className="font-medium text-slate-500">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm mb-2 text-slate-700 font-medium">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none transition-all duration-200 text-slate-900 placeholder:text-slate-400"
                  placeholder="Your full name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm mb-2 text-slate-700 font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none transition-all duration-200 text-slate-900 placeholder:text-slate-400"
                  placeholder="you@organization.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="company" className="block text-sm mb-2 text-slate-700 font-medium">
                  Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none transition-all duration-200 text-slate-900 placeholder:text-slate-400"
                  placeholder="Your organization"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm mb-2 text-slate-700 font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none transition-all duration-200 resize-none text-slate-900 placeholder:text-slate-400"
                  placeholder="Tell us about your organization's needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 text-white px-8 py-4 rounded-lg hover:bg-slate-800 transition-all duration-200 flex items-center justify-center gap-2 group font-medium cursor-pointer shadow-lg shadow-slate-900/20"
              >
                Send Message
                <Send className="group-hover:translate-x-1 transition-transform duration-200" size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
