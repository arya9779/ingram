import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Users, BookOpen, Building2, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: '5,000+',
    label: 'Leaders Coached',
    color: 'bg-sky-50 text-sky-700',
  },
  {
    icon: BookOpen,
    number: '50+',
    label: 'Curricula Designed',
    color: 'bg-emerald-50 text-emerald-700',
  },
  {
    icon: Building2,
    number: '25+',
    label: 'Agencies Served',
    color: 'bg-violet-50 text-violet-700',
  },
  {
    icon: Award,
    number: '30+',
    label: 'Years of Excellence',
    color: 'bg-amber-50 text-amber-700',
  },
];

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-slate-50/50"
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center ${stat.color.split(' ')[0]}`}>
                  <Icon className={stat.color.split(' ')[1]} size={24} />
                </div>
                <div className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-500 font-medium text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
