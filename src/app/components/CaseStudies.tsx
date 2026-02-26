import { Link } from 'react-router';

export function CaseStudies() {
  return (
    <>
      <section id="case-studies" className="py-20 px-6 bg-slate-50">
        <div className="max-w-[960px] mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-slate-900">
            Real results from <span className="text-primary">real partnerships</span>.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See how ICG has delivered measurable, lasting impact for leaders and organizations across government, healthcare, and the nonprofit sector.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6 bg-slate-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="relative h-64 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop")' }}
                ></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary/90 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">Leadership</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">Federal Leadership Transformation</h3>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2">Designed and delivered a multi-tier leadership development program for a major federal agency, coaching 200+ emerging leaders over 18 months.</p>
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">200+ Leaders Developed</span>
                  <Link className="inline-flex items-center text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform" to="/case-studies">
                    Read More <span className="material-symbols-outlined text-lg ml-1">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </article>

            <article className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="relative h-64 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop")' }}
                ></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary/90 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">Healthcare</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">Healthcare Workforce Alignment</h3>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2">Partnered with a regional hospital system to realign leadership, improve team communication, and reduce staff turnover through executive coaching.</p>
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Turnover ↓ 40%</span>
                  <Link className="inline-flex items-center text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform" to="/case-studies">
                    Read More <span className="material-symbols-outlined text-lg ml-1">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </article>

            <article className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="relative h-64 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop")' }}
                ></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary/90 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">Nonprofit</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">Nonprofit Culture & DEI Initiative</h3>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2">Facilitated a year-long diversity, equity, and inclusion transformation for a national nonprofit — rebuilding culture from leadership down.</p>
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Engagement ↑ 55%</span>
                  <Link className="inline-flex items-center text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform" to="/case-studies">
                    Read More <span className="material-symbols-outlined text-lg ml-1">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </article>
          </div>

          <div className="mt-16 text-center">
            <Link className="inline-flex items-center justify-center border-2 border-slate-200 hover:border-primary text-slate-900 hover:text-primary font-bold py-3 px-8 rounded-lg transition-colors duration-300" to="/case-studies">
              View All Success Stories <span className="material-symbols-outlined ml-2 text-xl">grid_view</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
