export function About() {
  return (
    <div className="bg-white">
      <section id="about" className="py-16 px-4 md:px-10 lg:px-20 xl:px-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-secondary to-primary rounded-xl opacity-20 blur-lg group-hover:opacity-30 transition duration-500"></div>
              <div
                className="relative h-[400px] lg:h-[500px] w-full overflow-hidden rounded-xl shadow-2xl bg-slate-200"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCsZ0K_CBqo-VED_XWnQ7Usl3sqWBULIovlZfeEXXdXGLTgui0-nG6RHjnKFttG7ag0YjpUhQsE3pLQnJ2i80o5NZA61wAl7T9pao6rsrTpQfIfDt5TVpbrhX5dJokqfdzpb7LDDLfcdCHziDruRTPgpHuny5OcSdg3r72Byc40FF59DwwlwpaQqyCIT25PA6TZn0RLUhngv8-O3fD38H4PxMeygsW3NRwLydJs4ldWkVMrSioXkS39r5WZ3MeTfN2hiY85KIsQIGQ")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl border border-slate-100 max-w-[200px] hidden md:block">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Success Rate</span>
                </div>
                <p className="text-3xl font-black text-slate-900">98%</p>
                <p className="text-sm text-slate-600 mt-1">Client satisfaction over 10 years.</p>
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:pl-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 w-fit">
                <span className="size-2 rounded-full bg-secondary animate-pulse"></span>
                <span className="text-xs font-bold text-secondary uppercase tracking-wide">Who We Are</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15]">
                Strategic partners for your <span className="text-primary">next big leap.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                At Consultingram, we are a collective of strategists, analysts, and innovators dedicated to transforming businesses. Our diverse team brings decades of experience across industries to solve your most complex challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="flex items-center justify-center rounded-full h-12 px-8 bg-secondary text-white text-base font-bold hover:opacity-90 transition-all cursor-pointer">
                  Meet the Team
                </button>
                <button className="flex items-center justify-center rounded-full h-12 px-8 bg-transparent border border-slate-300 text-slate-900 text-base font-bold hover:bg-slate-50 transition-all cursor-pointer">
                  Our History
                </button>
              </div>
              <div className="pt-8 border-t border-slate-200 mt-4 flex gap-8">
                <div>
                  <h3 className="text-3xl font-bold text-secondary">500+</h3>
                  <p className="text-sm text-slate-500 font-medium">Projects Completed</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-secondary">50+</h3>
                  <p className="text-sm text-slate-500 font-medium">Expert Consultants</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-10 lg:px-20 xl:px-40 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Methodology</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Our Proven Process</h2>
            <p className="text-lg text-slate-600">
              We follow a streamlined four-step methodology designed to ensure sustainable growth and measurable results for every client we partner with.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-8 left-0 w-full h-0.5 bg-slate-200 -z-10 translate-y-4"></div>

            <div className="group relative bg-white p-6 rounded-lg border border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-primary flex items-center justify-center mb-6 shadow-sm mx-auto lg:mx-0 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">search</span>
              </div>
              <div className="absolute top-6 right-6 text-6xl font-black text-slate-200 -z-10 opacity-50 group-hover:opacity-100 transition-opacity select-none">01</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Discovery</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We begin by immersing ourselves in your business to understand your goals, culture, and pain points thoroughly.
              </p>
            </div>

            <div className="group relative bg-white p-6 rounded-lg border border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-primary flex items-center justify-center mb-6 shadow-sm mx-auto lg:mx-0 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">analytics</span>
              </div>
              <div className="absolute top-6 right-6 text-6xl font-black text-slate-200 -z-10 opacity-50 group-hover:opacity-100 transition-opacity select-none">02</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Analysis</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our experts conduct a deep dive into data and market trends to identify opportunities and craft a precise strategy.
              </p>
            </div>

            <div className="group relative bg-white p-6 rounded-lg border border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-primary flex items-center justify-center mb-6 shadow-sm mx-auto lg:mx-0 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">extension</span>
              </div>
              <div className="absolute top-6 right-6 text-6xl font-black text-slate-200 -z-10 opacity-50 group-hover:opacity-100 transition-opacity select-none">03</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Implementation</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We work alongside your team to execute the strategy, ensuring seamless integration and adoption across the board.
              </p>
            </div>

            <div className="group relative bg-white p-6 rounded-lg border border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-primary flex items-center justify-center mb-6 shadow-sm mx-auto lg:mx-0 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">trending_up</span>
              </div>
              <div className="absolute top-6 right-6 text-6xl font-black text-slate-200 -z-10 opacity-50 group-hover:opacity-100 transition-opacity select-none">04</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Growth</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We monitor performance and iterate on the solution to drive continuous improvement and ensure long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
