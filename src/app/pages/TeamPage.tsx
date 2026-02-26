import { Link } from 'react-router';
import { Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: "Le'Angela Ingram, Ed.D.",
    role: 'Founder & Principal Consultant',
    bio: 'Dr. Le\'Angela Ingram founded ICG in 1995 with a vision to help organizations develop their most valuable asset — their people. She holds a BBA from Howard University, an MS from Johns Hopkins University, and an Ed.D. in Organizational Leadership. With certifications in executive coaching, facilitation, and organizational development, Dr. Ingram has coached over 5,000 leaders and designed more than 50 curricula for government agencies and private organizations. Her expertise spans leadership development, strategic planning, emotional intelligence, and change management.',
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
  const founder = teamMembers[0];
  const consultants = teamMembers.slice(1);

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Meet the <span className="text-primary">Team</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our team of experienced consultants brings decades of combined expertise in leadership
              development, organizational improvement, and human capital management.
            </p>
          </div>

          {/* Founder Profile */}
          <div className="mb-24">
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-slate-100 shadow-xl shadow-blue-900/5">
              <div className="grid md:grid-cols-3 gap-12 items-start">
                <div className="md:col-span-1 flex flex-col items-center md:items-start">
                  <div className="w-48 h-48 bg-blue-50/50 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-blue-100">
                    <span className="text-6xl font-extrabold text-secondary">LI</span>
                  </div>
                  <div className="text-center md:text-left w-full">
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-1">{founder.name}</h3>
                    <p className="text-primary font-bold tracking-wide text-sm uppercase mb-6">{founder.role}</p>
                    <div className="flex gap-3 justify-center md:justify-start">
                      <a
                        href="https://www.linkedin.com/company/ingram-consulting-group"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center hover:bg-orange-50 hover:text-primary transition-all duration-300 border border-slate-200 hover:border-orange-200"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a
                        href="mailto:leangela@consultingram.com"
                        className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center hover:bg-orange-50 hover:text-primary transition-all duration-300 border border-slate-200 hover:border-orange-200"
                      >
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">About the Founder</h4>
                  <p className="text-slate-600 leading-relaxed text-lg">{founder.bio}</p>

                  <div className="mt-10 grid sm:grid-cols-3 gap-6">
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 text-center">
                      <div className="text-3xl font-extrabold text-slate-900 mb-1">5K<span className="text-primary">+</span></div>
                      <div className="text-sm font-medium text-slate-500 uppercase tracking-widest mt-2">Leaders Coached</div>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 text-center">
                      <div className="text-3xl font-extrabold text-slate-900 mb-1">50<span className="text-primary">+</span></div>
                      <div className="text-sm font-medium text-slate-500 uppercase tracking-widest mt-2">Curricula Designed</div>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 text-center">
                      <div className="text-3xl font-extrabold text-slate-900 mb-1">30<span className="text-primary">+</span></div>
                      <div className="text-sm font-medium text-slate-500 uppercase tracking-widest mt-2">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Senior Consultants Grid */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-slate-900">Senior Consultants</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {consultants.map((member) => (
                <div
                  key={member.name}
                  className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 hover:border-primary/30 flex flex-col cursor-default"
                >
                  <div className="w-16 h-16 mx-auto bg-blue-50/50 border border-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-2xl font-extrabold text-secondary">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                    <p className="text-primary font-bold text-xs tracking-wider uppercase">{member.role}</p>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed flex-auto text-center">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-24 p-12 bg-white border border-slate-100 shadow-xl shadow-blue-900/5 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-lg blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none group-hover:bg-primary/10 transition-colors duration-500"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-lg blur-3xl translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-secondary/10 transition-colors duration-500"></div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 relative z-10">
              Work With Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto relative z-10">
              Ready to partner with experienced consultants who understand your challenges?
            </p>
            <Link
              to="/contact"
              className="inline-flex relative z-10 items-center justify-center bg-secondary hover:bg-slate-900 text-white font-bold h-14 px-10 rounded-lg transition-all duration-300 shadow-xl shadow-blue-900/10 hover:shadow-2xl hover:-translate-y-1 text-lg mb-4"
            >
              Get in Touch <span className="material-symbols-outlined ml-3 text-[20px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
