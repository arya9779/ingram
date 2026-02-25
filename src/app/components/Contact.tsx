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
    // Handle form submission
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Let's Start a{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Conversation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business? Reach out to discuss your goals
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl mb-6">Contact Information</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We're here to help you achieve your business objectives. Contact us 
              through any of the following channels, and our team will respond promptly.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Email</p>
                  <a href="mailto:contact@consultingram.com" className="text-lg hover:text-blue-600 transition-colors">
                    contact@consultingram.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-purple-600" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Phone</p>
                  <a href="tel:+1234567890" className="text-lg hover:text-blue-600 transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-green-600" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Address</p>
                  <p className="text-lg">
                    123 Business Avenue<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
              <h4 className="text-lg mb-3">Office Hours</h4>
              <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-700">Saturday: 10:00 AM - 2:00 PM</p>
              <p className="text-gray-700">Sunday: Closed</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="company" className="block text-sm mb-2 text-gray-700">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none transition-colors"
                  placeholder="Your Company"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
