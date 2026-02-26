import { Link } from 'react-router';
import { Award, Shield, Heart, Users, Target, BookOpen } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Clients } from '../components/Clients';

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
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              About <span className="text-primary">ICG</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Since 1995, we have partnered with government agencies, nonprofits, and private organizations
              to solve their most challenging human capital and organizational development needs.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative">
              <div className="absolute -inset-4 bg-slate-50 rounded-xl blur-2xl z-0 pointer-events-none"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 z-10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1770777843445-2a1621b1201d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtd29yayUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzcxOTgzMTIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Team collaboration"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Our <span className="text-primary">Story</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Founded in 1995 by Le'Angela Ingram, Ed.D., ICG was established
                  with a clear mission: to help organizations unlock the full potential of their people.
                  Based in the Washington, D.C. metropolitan area, we have grown into a trusted partner for
                  federal agencies, nonprofits, and healthcare organizations.
                </p>
                <p>
                  For over 30 years, we have provided subject matter expertise, advocacy, training, and
                  organizational improvement services. Our approach addresses the "People" challenges that
                  organizations face — from leadership development and strategic planning to change
                  management and diversity awareness.
                </p>
                <p>
                  Our team of senior consultants brings decades of combined experience across government,
                  healthcare, and nonprofit sectors, ensuring that every engagement delivers measurable
                  value and lasting impact.
                </p>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="text-center mb-20 p-12 bg-white border border-slate-100 shadow-xl shadow-blue-900/5 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-lg blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-primary/10 transition-colors duration-500"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-lg blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none group-hover:bg-secondary/10 transition-colors duration-500"></div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 relative z-10">Our Mission</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed relative z-10 font-medium">
              To provide organizations with the tools, strategies, and expertise they need to develop
              their human capital and overcome their most pressing "People" challenges — building stronger
              leaders, more effective teams, and more resilient organizations.
            </p>
          </div>

          {/* Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Core Principles</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Our Values</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="group bg-white p-6 rounded-2xl border border-slate-100 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5 relative cursor-pointer"
                  >
                    <div className="w-14 h-14 bg-blue-50/50 border border-blue-100 group-hover:bg-primary group-hover:border-transparent rounded-2xl flex items-center justify-center mb-6 shadow-sm mx-auto sm:mx-0 group-hover:scale-110 transition-all duration-300 text-secondary group-hover:text-white">
                      <Icon size={26} strokeWidth={2} />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3 text-center sm:text-left group-hover:text-secondary transition-colors">{value.title}</h4>
                    <p className="text-slate-500 text-center sm:text-left leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Clients */}
          <div className="mb-20">
            <Clients />
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              to="/team"
              className="inline-flex items-center justify-center bg-secondary hover:bg-slate-900 text-white font-bold h-14 px-10 rounded-lg transition-all duration-300 shadow-xl shadow-blue-900/10 hover:shadow-2xl hover:-translate-y-1 text-lg mb-8"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
