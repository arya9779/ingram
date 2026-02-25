import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router';
import {
  Users,
  Target,
  UserCheck,
  MessageSquare,
  BarChart,
  Globe,
  RefreshCw,
  Shield,
  Puzzle,
  Brain,
  Heart,
  GraduationCap,
  Mic,
  BookOpen,
} from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Leadership Development',
    description:
      'Comprehensive programs to develop effective leaders at all organizational levels. We build leadership capacity through assessments, workshops, and sustained coaching engagements.',
    color: 'sky',
  },
  {
    icon: Target,
    title: 'Strategic Planning',
    description:
      'Facilitate strategic planning processes that align organizational vision, mission, and goals. We help teams create actionable roadmaps for sustainable success.',
    color: 'emerald',
  },
  {
    icon: UserCheck,
    title: 'Executive Coaching',
    description:
      'One-on-one coaching for senior leaders to enhance performance, navigate transitions, and develop critical competencies for organizational impact.',
    color: 'violet',
  },
  {
    icon: MessageSquare,
    title: 'Meeting Facilitation',
    description:
      'Expert facilitation for retreats, off-sites, and critical meetings. We design and lead productive sessions that drive consensus and actionable outcomes.',
    color: 'amber',
  },
  {
    icon: BarChart,
    title: 'Performance Management',
    description:
      'Design and implement performance management systems that align individual contributions with organizational objectives and drive accountability.',
    color: 'rose',
  },
  {
    icon: Globe,
    title: 'Diversity Awareness',
    description:
      'Training and consulting to build inclusive workplaces. We help organizations leverage diversity as a strategic advantage through awareness and cultural competence.',
    color: 'indigo',
  },
  {
    icon: RefreshCw,
    title: 'Change Management',
    description:
      'Guide organizations through transitions with proven change management frameworks. We minimize disruption while maximizing adoption and engagement.',
    color: 'sky',
  },
  {
    icon: Shield,
    title: 'Conflict Resolution',
    description:
      'Mediation and conflict resolution services to address workplace disputes constructively. We restore productive working relationships and build collaborative cultures.',
    color: 'emerald',
  },
  {
    icon: Puzzle,
    title: 'Team Building',
    description:
      'Experiential team building programs that strengthen collaboration, trust, and communication. We create high-performing teams aligned around shared goals.',
    color: 'violet',
  },
  {
    icon: Brain,
    title: 'Emotional Intelligence',
    description:
      'Develop emotional intelligence competencies across your organization. Our programs enhance self-awareness, empathy, and interpersonal effectiveness.',
    color: 'amber',
  },
  {
    icon: Heart,
    title: 'Resilience',
    description:
      'Build organizational and individual resilience to navigate challenges and change. We equip teams with tools to thrive under pressure and adapt effectively.',
    color: 'rose',
  },
  {
    icon: GraduationCap,
    title: 'Instructor Development',
    description:
      'Train-the-trainer programs that build internal capacity for sustained learning and development. We prepare your instructors to deliver impactful training.',
    color: 'indigo',
  },
  {
    icon: Mic,
    title: 'Keynote Speaking',
    description:
      'Dynamic keynote presentations on leadership, organizational development, and human capital topics. Engaging talks that inspire action and drive change.',
    color: 'sky',
  },
  {
    icon: BookOpen,
    title: 'Curriculum Design',
    description:
      'Custom curriculum development for training programs, workshops, and educational initiatives. We design learning experiences that deliver measurable outcomes.',
    color: 'emerald',
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  sky: { bg: 'bg-sky-50', text: 'text-sky-700', border: 'hover:border-sky-200' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'hover:border-emerald-200' },
  violet: { bg: 'bg-violet-50', text: 'text-violet-700', border: 'hover:border-violet-200' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'hover:border-amber-200' },
  rose: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'hover:border-rose-200' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'hover:border-indigo-200' },
};

export function ServicesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-sky-50 border border-sky-100 rounded-full text-sky-700 text-sm font-medium">
            Our Expertise
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
            Consulting{' '}
            <span className="text-sky-700">Services</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ingram Consulting Group provides subject matter expertise, advocacy, training, and
            organizational improvement services across a comprehensive range of disciplines.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = colorClasses[service.color];

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`bg-white p-8 rounded-2xl border border-slate-100 ${colors.border} transition-all duration-200 hover:shadow-lg hover:shadow-slate-900/5 group`}
              >
                <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className={colors.text} size={24} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16 p-12 bg-slate-50 rounded-2xl"
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4">
            Ready to Invest in Your People?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Let us help you develop your most valuable asset — your human capital.
          </p>
          <Link
            to="/contact"
            className="inline-flex bg-slate-900 text-white px-8 py-4 rounded-lg hover:bg-slate-800 transition-colors duration-200 font-medium shadow-lg shadow-slate-900/20"
          >
            Schedule a Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
