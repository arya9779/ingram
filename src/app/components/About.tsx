import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, Globe, Shield, Zap } from 'lucide-react';
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
    icon: Zap,
    title: 'Innovation',
    description: 'Pioneering cutting-edge solutions',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Serving clients across 40+ countries',
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1770777843445-2a1621b1201d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtd29yayUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzcxOTgzMTIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern office teamwork"
                className="w-full h-auto"
              />
            </div>
            {/* Background Decoration */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-purple-50 rounded-full text-purple-600 text-sm">
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl mb-6">
              Your Trusted{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Strategic Partner
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 15 years of experience, ConsultingRam has been at the forefront 
              of business transformation. We combine deep industry expertise with 
              innovative methodologies to help organizations navigate complex challenges 
              and achieve sustainable growth.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of seasoned consultants brings diverse perspectives and proven 
              track records across multiple industries, ensuring that every engagement 
              delivers measurable value and lasting impact.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-6">
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
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg mb-1">{value.title}</h4>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
