import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import {
  Briefcase,
  TrendingUp,
  Users,
  BarChart,
  Target,
  Lightbulb,
} from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Business Strategy',
    description:
      'Develop comprehensive strategies that align with your business goals and market dynamics.',
    color: 'blue',
  },
  {
    icon: TrendingUp,
    title: 'Growth Consulting',
    description:
      'Scale your business with proven methodologies and data-driven growth frameworks.',
    color: 'purple',
  },
  {
    icon: Users,
    title: 'Organizational Development',
    description:
      'Build high-performing teams and optimize organizational structures for success.',
    color: 'green',
  },
  {
    icon: BarChart,
    title: 'Financial Advisory',
    description:
      'Strategic financial planning and analysis to maximize profitability and efficiency.',
    color: 'orange',
  },
  {
    icon: Target,
    title: 'Digital Transformation',
    description:
      'Navigate the digital landscape with cutting-edge solutions and technology integration.',
    color: 'pink',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Consulting',
    description:
      'Foster innovation culture and implement creative solutions for competitive advantage.',
    color: 'indigo',
  },
];

const colorClasses = {
  blue: {
    bg: 'bg-blue-100',
    text: 'text-blue-600',
    hover: 'hover:border-blue-600',
  },
  purple: {
    bg: 'bg-purple-100',
    text: 'text-purple-600',
    hover: 'hover:border-purple-600',
  },
  green: {
    bg: 'bg-green-100',
    text: 'text-green-600',
    hover: 'hover:border-green-600',
  },
  orange: {
    bg: 'bg-orange-100',
    text: 'text-orange-600',
    hover: 'hover:border-orange-600',
  },
  pink: {
    bg: 'bg-pink-100',
    text: 'text-pink-600',
    hover: 'hover:border-pink-600',
  },
  indigo: {
    bg: 'bg-indigo-100',
    text: 'text-indigo-600',
    hover: 'hover:border-indigo-600',
  },
};

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm">
            What We Offer
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive consulting solutions tailored to your unique business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = colorClasses[service.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white p-8 rounded-2xl border-2 border-transparent ${colors.hover} transition-all hover:shadow-xl group`}
              >
                <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={colors.text} size={28} />
                </div>
                <h3 className="text-2xl mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <button className={`mt-6 ${colors.text} hover:underline flex items-center gap-2`}>
                  Learn more →
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
