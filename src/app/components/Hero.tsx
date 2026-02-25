import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Target, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm"
            >
              ✨ Transform Your Business Today
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl mb-6"
            >
              Strategic{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Consulting
              </span>{' '}
              for Growth
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8"
            >
              Partner with industry experts to unlock your organization's full potential. 
              We deliver data-driven solutions that drive measurable results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all flex items-center justify-center gap-2">
                Schedule Consultation
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all">
                View Case Studies
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-6"
            >
              <div className="text-center sm:text-left">
                <div className="text-3xl mb-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">500+</div>
                <div className="text-sm text-gray-600">Clients Served</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl mb-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl mb-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1763739527737-e3626d731072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBwcm9mZXNzaW9uYWwlMjBtZWV0aW5nfGVufDF8fHx8MTc3MjA1MjM1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional business consulting"
                className="w-full h-auto"
              />
              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute top-8 -left-4 bg-white p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Revenue Growth</div>
                    <div className="text-lg text-green-600">+45%</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute bottom-8 -right-4 bg-white p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Target className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Goals Achieved</div>
                    <div className="text-lg">127/130</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-50 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
