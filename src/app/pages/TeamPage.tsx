import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router';
import { Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: "Le'Angela Ingram, Ed.D.",
    role: 'Founder & Principal Consultant',
    bio: 'Dr. Le\'Angela Ingram founded Ingram Consulting Group in 1995 with a vision to help organizations develop their most valuable asset — their people. She holds a BBA from Howard University, an MS from Johns Hopkins University, and an Ed.D. in Organizational Leadership. With certifications in executive coaching, facilitation, and organizational development, Dr. Ingram has coached over 5,000 leaders and designed more than 50 curricula for government agencies and private organizations. Her expertise spans leadership development, strategic planning, emotional intelligence, and change management.',
    featured: true,
  },
  {
    name: 'Barbara',
    role: 'Senior Consultant',
    bio: 'Barbara brings extensive experience in organizational development and leadership training. She specializes in team building, performance management, and diversity awareness programs for federal agencies and nonprofit organizations.',
    featured: false,
  },
  {
    name: 'John',
    role: 'Senior Consultant',
    bio: 'John is a seasoned consultant with deep expertise in strategic planning and change management. He has facilitated numerous executive retreats and organizational transformation initiatives across government and healthcare sectors.',
    featured: false,
  },
  {
    name: 'Nancy',
    role: 'Senior Consultant',
    bio: 'Nancy specializes in executive coaching, conflict resolution, and resilience training. Her approach integrates emotional intelligence frameworks to help leaders navigate complex interpersonal and organizational challenges.',
    featured: false,
  },
  {
    name: 'Tony',
    role: 'Senior Consultant',
    bio: 'Tony brings a wealth of experience in curriculum design and instructor development. He has developed training programs for multiple federal agencies, focusing on leadership competencies and professional development.',
    featured: false,
  },
];

export function TeamPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const founder = teamMembers[0];
  const consultants = teamMembers.slice(1);

  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-sky-50 border border-sky-100 rounded-full text-sky-700 text-sm font-medium">
            Our Team
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
            Meet the{' '}
            <span className="text-sky-700">Team</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our team of experienced consultants brings decades of combined expertise in leadership
            development, organizational improvement, and human capital management.
          </p>
        </motion.div>

        {/* Founder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-100">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <div className="w-48 h-48 mx-auto md:mx-0 bg-sky-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-6xl font-heading font-bold text-sky-700">LI</span>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-1">{founder.name}</h3>
                  <p className="text-sky-700 font-medium mb-4">{founder.role}</p>
                  <div className="flex gap-3 justify-center md:justify-start">
                    <a
                      href="https://www.linkedin.com/company/ingram-consulting-group"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-sky-50 transition-colors border border-slate-200"
                    >
                      <Linkedin className="text-slate-600" size={18} />
                    </a>
                    <a
                      href="mailto:leangela@consultingram.com"
                      className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-sky-50 transition-colors border border-slate-200"
                    >
                      <Mail className="text-slate-600" size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <h4 className="text-lg font-heading font-semibold text-slate-900 mb-4">About</h4>
                <p className="text-slate-600 leading-relaxed text-lg">{founder.bio}</p>
                <div className="mt-8 grid sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-slate-100 text-center">
                    <div className="text-2xl font-heading font-bold text-slate-900 mb-1">5,000+</div>
                    <div className="text-sm text-slate-500">Leaders Coached</div>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-100 text-center">
                    <div className="text-2xl font-heading font-bold text-slate-900 mb-1">50+</div>
                    <div className="text-sm text-slate-500">Curricula Designed</div>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-100 text-center">
                    <div className="text-2xl font-heading font-bold text-slate-900 mb-1">30+</div>
                    <div className="text-sm text-slate-500">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Senior Consultants */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-heading font-bold text-slate-900 mb-8 text-center">Senior Consultants</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultants.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-lg hover:shadow-slate-900/5 transition-all duration-200"
              >
                <div className="w-20 h-20 mx-auto bg-slate-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl font-heading font-bold text-slate-500">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-lg font-heading font-semibold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-sky-700 text-sm font-medium">{member.role}</p>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16 p-12 bg-slate-50 rounded-2xl"
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4">
            Work With Our Team
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Ready to partner with experienced consultants who understand your challenges?
          </p>
          <Link
            to="/contact"
            className="inline-flex bg-slate-900 text-white px-8 py-4 rounded-lg hover:bg-slate-800 transition-colors duration-200 font-medium shadow-lg shadow-slate-900/20"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
