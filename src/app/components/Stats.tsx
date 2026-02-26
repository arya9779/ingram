import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Users, BookOpen, Building2, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: '5,000+',
    label: 'Leaders Coached',
    containerColor: 'bg-orange-100/80',
    iconColor: 'bg-orange-100 text-orange-700',
  },
  {
    icon: BookOpen,
    number: '50+',
    label: 'Curricula Designed',
    containerColor: 'bg-emerald-50/80',
    iconColor: 'bg-emerald-50 text-emerald-700',
  },
  {
    icon: Building2,
    number: '25+',
    label: 'Agencies Served',
    containerColor: 'bg-violet-50/80',
    iconColor: 'bg-violet-50 text-violet-700',
  },
  {
    icon: Award,
    number: '30+',
    label: 'Years of Excellence',
    containerColor: 'bg-amber-100/80',
    iconColor: 'bg-amber-100 text-amber-800',
  },
];

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="text-center p-8 rounded-2xl bg-muted border border-border transition-shadow hover:shadow-xl hover:shadow-foreground/5"
              >
                <div className={`w-16 h-16 mx-auto mb-5 rounded-2xl flex items-center justify-center ${stat.iconColor} shadow-sm`}>
                  <Icon size={28} strokeWidth={2.5} />
                </div>
                <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                  {stat.number}
                </h3>
                <p className="text-muted-foreground font-medium text-sm tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
