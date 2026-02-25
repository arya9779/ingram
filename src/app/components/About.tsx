import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, Shield, Heart, Users } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to delivering exceptional results',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Building trust through transparent practices',
  },
  {
    icon: Heart,
    title: 'People-Centered',
    description: 'Human capital at the heart of everything',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Partnering to co-create lasting solutions',
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1770777843445-2a1621b1201d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtd29yayUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzcxOTgzMTIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team collaboration at Ingram Consulting Group"
                className="w-full h-auto"
              />
            </div>
            {/* Background Decoration */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sky-100 rounded-full blur-3xl opacity-40 -z-10" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-sky-50 border border-sky-100 rounded-full text-sky-700 text-sm font-medium">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6 leading-tight">
              Your Trusted{' '}
              <span className="text-sky-700">
                Human Capital Partner
              </span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Founded in 1995, Ingram Consulting Group has been at the forefront of
              organizational development for over 30 years. Based in the Washington, D.C.
              metropolitan area, we provide subject matter expertise, advocacy, training, and
              organizational improvement services.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Our team of senior consultants brings diverse perspectives and proven
              track records across government, healthcare, and nonprofit sectors —
              helping organizations solve their most challenging "People" problems.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex gap-3"
                  >
                    <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-slate-700" size={20} />
                    </div>
                    <div>
                      <h4 className="text-base font-heading font-semibold text-slate-900 mb-0.5">{value.title}</h4>
                      <p className="text-sm text-slate-500">{value.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sky-700 font-medium hover:gap-3 transition-all duration-200"
            >
              Learn more about us
              <span>&rarr;</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
