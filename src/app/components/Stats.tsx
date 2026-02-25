import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Users, CheckCircle2, TrendingUp, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: '500+',
    label: 'Clients Worldwide',
    color: 'blue',
  },
  {
    icon: CheckCircle2,
    number: '1200+',
    label: 'Projects Completed',
    color: 'green',
  },
  {
    icon: TrendingUp,
    number: '98%',
    label: 'Client Satisfaction',
    color: 'purple',
  },
  {
    icon: Award,
    number: '25+',
    label: 'Industry Awards',
    color: 'orange',
  },
];

const colorClasses = {
  blue: 'from-blue-500 to-blue-600',
  green: 'from-green-500 to-green-600',
  purple: 'from-purple-500 to-purple-600',
  orange: 'from-orange-500 to-orange-600',
};

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const gradient = colorClasses[stat.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <Icon className="text-white" size={28} />
                </div>
                <div className={`text-4xl md:text-5xl mb-2 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
