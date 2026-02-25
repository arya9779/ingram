import { motion } from 'motion/react';
import { ArrowRight, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-sky-50 border border-sky-100 rounded-full text-sky-700 text-sm font-medium"
            >
              <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
              Developing People. Strengthening Organizations.
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-6 leading-tight tracking-tight"
            >
              Human Capital{' '}
              <span className="text-sky-700">
                Solutions
              </span>{' '}
              That Work
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg"
            >
              Ingram Consulting Group provides subject matter expertise, advocacy, training, and
              organizational improvement to help you solve your most challenging "People" problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                to="/contact"
                className="group bg-slate-900 text-white px-8 py-4 rounded-lg hover:bg-slate-800 transition-all duration-200 flex items-center justify-center gap-2 font-medium cursor-pointer shadow-lg shadow-slate-900/20"
              >
                Schedule Consultation
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={20} />
              </Link>
              <Link
                to="/services"
                className="border border-slate-300 text-slate-700 px-8 py-4 rounded-lg hover:border-slate-900 hover:text-slate-900 transition-all duration-200 text-center font-medium cursor-pointer"
              >
                View Our Services
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-6"
            >
              {[
                { value: '5,000+', label: 'Leaders Coached' },
                { value: '50+', label: 'Curricula Designed' },
                { value: '30+', label: 'Years Experience' },
              ].map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-3xl font-heading font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1080&q=80"
                alt="Confident professional woman leading a consulting session"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute top-8 -left-4 bg-white p-4 rounded-xl shadow-lg shadow-slate-900/10 border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
                    <Users className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Leaders Coached</div>
                    <div className="text-lg font-bold text-emerald-600">5,000+</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute bottom-8 -right-4 bg-white p-4 rounded-xl shadow-lg shadow-slate-900/10 border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center">
                    <BookOpen className="text-sky-700" size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Curricula Designed</div>
                    <div className="text-lg font-bold text-slate-900">50+</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-100 rounded-full blur-3xl opacity-40 -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-slate-100 rounded-full blur-3xl opacity-50 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
