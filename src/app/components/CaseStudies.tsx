import { Link } from 'react-router';

export function CaseStudies() {
  return (
    <>
      <section id="case-studies" className="py-20 px-6 bg-slate-50">
        <div className="max-w-[960px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            proven track record
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-slate-900">
            Transforming businesses through <span className="text-primary">strategic innovation</span>.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore how we've helped global enterprises navigate complex challenges and achieve sustainable growth.
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
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBGVhFyq-zwPY00XgFzTvwt1voKZNooJtn8hoBoqjMqzfYaPndmThG0tMmez9JAc03zV96-0GTa45t58FBAxFPFFPtYm284Xa2AnhtJ5tfgYcz33KJBG20GIprmVKv8FPLpLzQBOqtJf0TbK3o2B8csQUCGfaU4vwlB4yojPjS-GKKHxYvpGuVyDj4gplw5CugGRrN8Xrx8g_FCZJcQ9BMjkAz-YJYL2PJxPEiFHKrhGd5zpKl41ckWaYRdoef20DHHcFyvC_CyPnc")' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary/90 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">Strategy</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">Global Tech Expansion</h3>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2">Developing a comprehensive market entry strategy for a leading SaaS provider in the Asian market.</p>
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">ROI: +240%</span>
                  <Link className="inline-flex items-center text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform" to="/case-studies">
                    Read Case Study <span className="material-symbols-outlined text-lg ml-1">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </article>

            <article className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="relative h-64 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCOk312mQkrtkL15yFfWc64S2D-8hK7Fv-hngj_W23EwDInzSClA4KCH-eYtL8YkrtL27D16W7v1P_dF0oK64j1-pI1qI9FzT3cO8l_uWkX74jE8nK7-cQhH468S6G92B8c1K4_rKxN5gXN5M1h41-C6cM3X8W52v5r7z5Dq-y3o-_rP8D3wJzY0Yq6V-F81w")' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary/90 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">Finance</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">Healthcare Restructuring</h3>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2">Streamlining operations and optimizing cost structures for a regional hospital network, resulting in improved patient care.</p>
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">SAVINGS: $12M</span>
                  <Link className="inline-flex items-center text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform" to="/case-studies">
                    Read Case Study <span className="material-symbols-outlined text-lg ml-1">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </article>

            <article className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="relative h-64 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAvI5H_q5t3BKh3N-yL1z0YQzXWQ1h_FqM19N74C6P1T08x6yO8n2E6N_N6hD38L32Y1U9sM3C5P0_qZ2L7q-S7u77D8Y1gX6aM50zP9R451f2A7nB3rF71w1v0Yx1n2r35L_V9L6K6J1I45c92H6tZ9G5t_N20P1-h0s82jP5k0mX29T0QxP8Z0WfCq1zZ7R6s")' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary/90 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">Operations</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">Supply Chain Optimization</h3>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2">Redesigning global logistics for an automotive manufacturer to mitigate disruptions and improve delivery times.</p>
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">EFFICIENCY: +35%</span>
                  <Link className="inline-flex items-center text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform" to="/case-studies">
                    Read Case Study <span className="material-symbols-outlined text-lg ml-1">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </article>
          </div>

          <div className="mt-16 text-center">
            <Link className="inline-flex items-center justify-center border-2 border-slate-200 hover:border-primary text-slate-900 hover:text-primary font-bold py-3 px-8 rounded-full transition-colors duration-300" to="/case-studies">
              View All Work <span className="material-symbols-outlined ml-2 text-xl">grid_view</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
