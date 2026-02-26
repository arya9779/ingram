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
  },
  {
    icon: Target,
    title: 'Strategic Planning',
    description:
      'Facilitate strategic planning processes that align organizational vision, mission, and goals. We help teams create actionable roadmaps for sustainable success.',
  },
  {
    icon: UserCheck,
    title: 'Executive Coaching',
    description:
      'One-on-one coaching for senior leaders to enhance performance, navigate transitions, and develop critical competencies for organizational impact.',
  },
  {
    icon: MessageSquare,
    title: 'Meeting Facilitation',
    description:
      'Expert facilitation for retreats, off-sites, and critical meetings. We design and lead productive sessions that drive consensus and actionable outcomes.',
  },
  {
    icon: BarChart,
    title: 'Performance Management',
    description:
      'Design and implement performance management systems that align individual contributions with organizational objectives and drive accountability.',
  },
  {
    icon: Globe,
    title: 'Diversity Awareness',
    description:
      'Training and consulting to build inclusive workplaces. We help organizations leverage diversity as a strategic advantage through awareness and cultural competence.',
  },
  {
    icon: RefreshCw,
    title: 'Change Management',
    description:
      'Guide organizations through transitions with proven change management frameworks. We minimize disruption while maximizing adoption and engagement.',
  },
  {
    icon: Shield,
    title: 'Conflict Resolution',
    description:
      'Mediation and conflict resolution services to address workplace disputes constructively. We restore productive working relationships and build collaborative cultures.',
  },
  {
    icon: Puzzle,
    title: 'Team Building',
    description:
      'Experiential team building programs that strengthen collaboration, trust, and communication. We create high-performing teams aligned around shared goals.',
  },
  {
    icon: Brain,
    title: 'Emotional Intelligence',
    description:
      'Develop emotional intelligence competencies across your organization. Our programs enhance self-awareness, empathy, and interpersonal effectiveness.',
  },
  {
    icon: Heart,
    title: 'Resilience',
    description:
      'Build organizational and individual resilience to navigate challenges and change. We equip teams with tools to thrive under pressure and adapt effectively.',
  },
  {
    icon: GraduationCap,
    title: 'Instructor Development',
    description:
      'Train-the-trainer programs that build internal capacity for sustained learning and development. We prepare your instructors to deliver impactful training.',
  },
  {
    icon: Mic,
    title: 'Keynote Speaking',
    description:
      'Dynamic keynote presentations on leadership, organizational development, and human capital topics. Engaging talks that inspire action and drive change.',
  },
  {
    icon: BookOpen,
    title: 'Curriculum Design',
    description:
      'Custom curriculum development for training programs, workshops, and educational initiatives. We design learning experiences that deliver measurable outcomes.',
  },
];

export function ServicesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto" ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              What We <span className="text-primary">Do Best</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              ICG provides subject matter expertise, training, and organizational improvement services across a comprehensive range of human capital disciplines.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/10 border border-slate-100 hover:border-primary/50 cursor-pointer"
                >
                  <div className="mb-6 inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-blue-50/50 text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-sm border border-blue-100 group-hover:border-transparent">
                    <Icon size={26} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-secondary transition-colors">{service.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm flex-auto">{service.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-24 p-12 bg-white border border-slate-100 shadow-xl shadow-blue-900/5 rounded-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-lg blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-primary/10 transition-colors duration-500"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-lg blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none group-hover:bg-secondary/10 transition-colors duration-500"></div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 relative z-10">
              Ready to Invest in Your <span className="text-primary">People?</span>
            </h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto relative z-10">
              Let us help you develop your most valuable asset — your human capital.
            </p>
            <Link
              to="/contact"
              className="inline-flex relative z-10 items-center justify-center bg-secondary hover:bg-slate-900 text-white font-bold h-14 px-10 rounded-lg transition-all duration-300 shadow-xl shadow-blue-900/10 hover:shadow-2xl hover:-translate-y-1 text-lg mb-4"
            >
              Schedule a Consultation <span className="material-symbols-outlined ml-3 text-[20px]">calendar_month</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
