import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router';
import { Award, Shield, Heart, Users, Target, BookOpen } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to delivering exceptional results in every engagement',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Building trust through transparent and ethical practices',
  },
  {
    icon: Heart,
    title: 'People-Centered',
    description: 'Putting human capital at the heart of organizational success',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Partnering with clients to co-create lasting solutions',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Focused on measurable outcomes and sustainable impact',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: 'Advancing knowledge through research and professional development',
  },
];

export function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-sky-50 border border-sky-100 rounded-full text-sky-700 text-sm font-medium">
            About Us
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
            About{' '}
            <span className="text-sky-700">Ingram Consulting Group</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Since 1995, we have partnered with government agencies, nonprofits, and private organizations
            to solve their most challenging human capital and organizational development needs.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1770777843445-2a1621b1201d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtd29yayUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzcxOTgzMTIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team collaboration"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sky-100 rounded-full blur-3xl opacity-40 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6 leading-tight">
              Our{' '}
              <span className="text-sky-700">Story</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Founded in 1995 by Le'Angela Ingram, Ed.D., Ingram Consulting Group (ICG) was established
              with a clear mission: to help organizations unlock the full potential of their people.
              Based in the Washington, D.C. metropolitan area, ICG has grown into a trusted partner for
              federal agencies, nonprofits, and healthcare organizations.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              For over 30 years, we have provided subject matter expertise, advocacy, training, and
              organizational improvement services. Our approach addresses the "People" challenges that
              organizations face — from leadership development and strategic planning to change
              management and diversity awareness.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our team of senior consultants brings decades of combined experience across government,
              healthcare, and nonprofit sectors, ensuring that every engagement delivers measurable
              value and lasting impact.
            </p>
          </motion.div>
        </div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-20 p-12 bg-slate-50 rounded-2xl"
        >
          <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">Our Mission</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            To provide organizations with the tools, strategies, and expertise they need to develop
            their human capital and overcome their most pressing "People" challenges — building stronger
            leaders, more effective teams, and more resilient organizations.
          </p>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-heading font-bold text-slate-900 mb-12 text-center">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="text-sky-700" size={22} />
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-semibold text-slate-900 mb-1">{value.title}</h4>
                    <p className="text-slate-600">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Link
            to="/team"
            className="inline-flex bg-slate-900 text-white px-8 py-4 rounded-lg hover:bg-slate-800 transition-colors duration-200 font-medium shadow-lg shadow-slate-900/20"
          >
            Meet Our Team
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
