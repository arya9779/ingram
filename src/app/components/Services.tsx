import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router';
import {
  Users,
  Target,
  UserCheck,
  MessageSquare,
  RefreshCw,
  Puzzle,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Leadership Development',
    description:
      'Comprehensive programs to develop effective leaders at all organizational levels.',
    color: 'sky',
  },
  {
    icon: Target,
    title: 'Strategic Planning',
    description:
      'Facilitate strategic planning processes that align vision, mission, and goals.',
    color: 'emerald',
  },
  {
    icon: UserCheck,
    title: 'Executive Coaching',
    description:
      'One-on-one coaching for senior leaders to enhance performance and navigate transitions.',
    color: 'violet',
  },
  {
    icon: MessageSquare,
    title: 'Meeting Facilitation',
    description:
      'Expert facilitation for retreats, off-sites, and critical meetings that drive results.',
    color: 'amber',
  },
  {
    icon: RefreshCw,
    title: 'Change Management',
    description:
      'Guide organizations through transitions with proven change management frameworks.',
    color: 'rose',
  },
  {
    icon: Puzzle,
    title: 'Team Building',
    description:
      'Experiential programs that strengthen collaboration, trust, and communication.',
    color: 'indigo',
  },
];

const colorClasses = {
  sky: {
    bg: 'bg-sky-50',
    text: 'text-sky-700',
    border: 'hover:border-sky-200',
    iconBg: 'group-hover:bg-sky-100',
  },
  emerald: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-700',
    border: 'hover:border-emerald-200',
    iconBg: 'group-hover:bg-emerald-100',
  },
  violet: {
    bg: 'bg-violet-50',
    text: 'text-violet-700',
    border: 'hover:border-violet-200',
    iconBg: 'group-hover:bg-violet-100',
  },
  amber: {
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    border: 'hover:border-amber-200',
    iconBg: 'group-hover:bg-amber-100',
  },
  rose: {
    bg: 'bg-rose-50',
    text: 'text-rose-700',
    border: 'hover:border-rose-200',
    iconBg: 'group-hover:bg-rose-100',
  },
  indigo: {
    bg: 'bg-indigo-50',
    text: 'text-indigo-700',
    border: 'hover:border-indigo-200',
    iconBg: 'group-hover:bg-indigo-100',
  },
};

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-sky-50 border border-sky-100 rounded-full text-sky-700 text-sm font-medium">
            What We Offer
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Expert consulting solutions for your organization's human capital and development needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = colorClasses[service.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white p-8 rounded-2xl border border-slate-100 ${colors.border} transition-all duration-200 hover:shadow-lg hover:shadow-slate-900/5 group cursor-pointer`}
              >
                <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-6 transition-colors duration-200`}>
                  <Icon className={colors.text} size={24} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                <Link to="/services" className={`${colors.text} flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-200`}>
                  Learn more
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 px-8 py-3.5 rounded-lg hover:border-slate-900 hover:text-slate-900 transition-all duration-200 font-medium cursor-pointer"
          >
            View All 14 Services
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
