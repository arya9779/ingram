import { Link } from 'react-router';

export function About() {
  return (
    <div className="bg-white">
      {/* Who We Are */}
      <section id="about" className="py-20 px-4 md:px-10 lg:px-20 xl:px-40">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-primary"></div>
            <div className="inline-flex items-center px-3 py-1 rounded-md border border-primary/30 text-primary text-xs font-bold uppercase tracking-wide">
              Who We Are
            </div>
          </div>
          <h2 className="text-3xl md:text-[40px] font-extrabold text-slate-900 leading-tight mb-4 max-w-3xl">
            We Don't Just Consult. <span className="text-primary">We Build Leaders Who Last.</span>
          </h2>
          <p className="text-base text-slate-500 max-w-3xl mb-4 leading-relaxed">
            Since 1995, ICG has partnered with federal agencies, healthcare organizations, nonprofits, and private enterprises to design and deliver human capital solutions that build resilient leaders, strengthen teams, and elevate organizational performance.
          </p>
          <Link to="/about" className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-bold text-white shadow-sm hover:bg-orange-600 transition-all cursor-pointer mb-12">
            More About Us
          </Link>

          {/* Bento Grid: Testimonial + Team Photo + Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 flex flex-col justify-center">
              <p className="text-slate-700 text-base leading-relaxed mb-6 italic">
                "ICG transformed how our leadership team communicates, collaborates, and drives change. The impact wasn't just immediate — it's been sustained for years."
              </p>
              <p className="text-sm font-bold text-slate-900">— Senior Executive,</p>
              <p className="text-sm text-slate-500">Federal Government Agency</p>
            </div>

            {/* Team Photo + Small Photo Below */}
            <div className="flex flex-col gap-6">
              <div className="rounded-xl overflow-hidden flex-1 min-h-[280px]">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-[180px]">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=400&fit=crop"
                  alt="Meeting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Team Group + Stats */}
            <div className="flex flex-col gap-6">
              <div className="rounded-xl overflow-hidden h-[280px]">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=500&fit=crop"
                  alt="Professional team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-center">
                  <p className="text-3xl font-extrabold text-slate-900">30<span className="text-primary">+</span></p>
                  <p className="text-xs text-slate-500 mt-1 font-medium">Years of Excellence</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-center">
                  <p className="text-3xl font-extrabold text-slate-900">25<span className="text-primary">+</span></p>
                  <p className="text-xs text-slate-500 mt-1 font-medium">Agencies Served</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-center">
                  <p className="text-3xl font-extrabold text-slate-900">5K<span className="text-primary">+</span></p>
                  <p className="text-xs text-slate-500 mt-1 font-medium">Leaders Coached</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-center">
                  <p className="text-3xl font-extrabold text-slate-900">50<span className="text-primary">+</span></p>
                  <p className="text-xs text-slate-500 mt-1 font-medium">Curricula Designed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 px-4 md:px-10 lg:px-20 xl:px-40 bg-secondary">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-primary"></div>
            <div className="inline-flex items-center px-3 py-1 rounded-md border border-primary/30 text-primary text-xs font-bold uppercase tracking-wide">
              Our Services
            </div>
          </div>
          <h2 className="text-3xl md:text-[40px] font-extrabold text-white leading-tight mb-12 max-w-3xl">
            Six Proven Services. One Mission: Develop Your People. Strengthen Your Organization.
          </h2>

          {/* 2 rows of 3 service cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm group hover:shadow-lg transition-all duration-300">
              <div className="h-56 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop" alt="Training" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Training Nationally & Internationally</h3>
                <p className="text-sm text-slate-500 leading-relaxed">ICG offers consulting and training in all areas of human capital and organizational development for our clients, and ICG is well versed in all of them.</p>
                <Link to="/services" className="mt-4 inline-flex items-center text-primary font-bold text-sm hover:underline">
                  Learn More <span className="material-symbols-outlined ml-1 text-lg">arrow_forward</span>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm group hover:shadow-lg transition-all duration-300">
              <div className="h-56 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop" alt="Leadership Development" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Leadership Development</h3>
                <p className="text-sm text-slate-500 leading-relaxed">ICG provides customized leadership courses and leadership assessments to support and enhance leadership skills at every level.</p>
                <Link to="/services" className="mt-4 inline-flex items-center text-primary font-bold text-sm hover:underline">
                  Learn More <span className="material-symbols-outlined ml-1 text-lg">arrow_forward</span>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm group hover:shadow-lg transition-all duration-300">
              <div className="h-56 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop" alt="Organizational Effectiveness" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Organizational Effectiveness</h3>
                <p className="text-sm text-slate-500 leading-relaxed">ICG helps organizations develop strategy through Strategic Planning and organization alignment.</p>
                <Link to="/services" className="mt-4 inline-flex items-center text-primary font-bold text-sm hover:underline">
                  Learn More <span className="material-symbols-outlined ml-1 text-lg">arrow_forward</span>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm group hover:shadow-lg transition-all duration-300">
              <div className="h-56 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop" alt="Facilitation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Facilitation & Meeting Design</h3>
                <p className="text-sm text-slate-500 leading-relaxed">ICG has worked with hundreds of clients to improve the quality of results derived from small & large scale meetings.</p>
                <Link to="/services" className="mt-4 inline-flex items-center text-primary font-bold text-sm hover:underline">
                  Learn More <span className="material-symbols-outlined ml-1 text-lg">arrow_forward</span>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm group hover:shadow-lg transition-all duration-300">
              <div className="h-56 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop" alt="Executive Coaching" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Executive Coach</h3>
                <p className="text-sm text-slate-500 leading-relaxed">ICG works with clients one on one to develop career strategies. We support and guide employees through transition, performance issues, and new leadership.</p>
                <Link to="/services" className="mt-4 inline-flex items-center text-primary font-bold text-sm hover:underline">
                  Learn More <span className="material-symbols-outlined ml-1 text-lg">arrow_forward</span>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm group hover:shadow-lg transition-all duration-300">
              <div className="h-56 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop" alt="Keynote Speaker" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Keynote Speaker</h3>
                <p className="text-sm text-slate-500 leading-relaxed">ICG delivers presentations in unique and engaging ways. We deliver content in both, traditional and non-traditional ways. No death by slides!</p>
                <Link to="/services" className="mt-4 inline-flex items-center text-primary font-bold text-sm hover:underline">
                  Learn More <span className="material-symbols-outlined ml-1 text-lg">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
