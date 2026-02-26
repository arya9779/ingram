import { Link } from 'react-router';

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-blue-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-wide">Our Expertise</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">Expertise that Drives Results</p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              We offer a comprehensive range of consulting services tailored to your specific business needs to ensure maximum ROI.
            </p>
          </div>
          <Link to="/services" className="flex h-12 w-fit whitespace-nowrap items-center justify-center rounded-full border border-blue-200 bg-white px-6 text-sm font-bold text-secondary shadow-sm hover:bg-blue-50 transition-colors">
            View All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group relative flex flex-col overflow-hidden rounded-lg bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:shadow-blue-900/10 border border-blue-100 hover:border-primary/50">
            <div className="mb-6 inline-flex size-14 items-center justify-center rounded-full bg-blue-50 text-secondary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[32px]">strategy</span>
            </div>
            <h3 className="text-xl font-bold text-secondary">Strategic Planning</h3>
            <p className="mt-4 flex-auto text-base leading-relaxed text-slate-500">
              Developing long-term strategies to achieve your business goals, maximize ROI, and stay ahead of market trends.
            </p>
            <div className="mt-6">
              <Link to="/services" className="text-sm font-bold text-primary hover:text-orange-700 flex items-center gap-1">
                Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>

          <div className="group relative flex flex-col overflow-hidden rounded-lg bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:shadow-blue-900/10 border border-blue-100 hover:border-primary/50">
            <div className="mb-6 inline-flex size-14 items-center justify-center rounded-full bg-blue-50 text-secondary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[32px]">account_balance</span>
            </div>
            <h3 className="text-xl font-bold text-secondary">Financial Advisory</h3>
            <p className="mt-4 flex-auto text-base leading-relaxed text-slate-500">
              Expert financial planning, risk management, audit preparation, and investment advice for long-term stability.
            </p>
            <div className="mt-6">
              <Link to="/services" className="text-sm font-bold text-primary hover:text-orange-700 flex items-center gap-1">
                Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>

          <div className="group relative flex flex-col overflow-hidden rounded-lg bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:shadow-blue-900/10 border border-blue-100 hover:border-primary/50">
            <div className="mb-6 inline-flex size-14 items-center justify-center rounded-full bg-blue-50 text-secondary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[32px]">manufacturing</span>
            </div>
            <h3 className="text-xl font-bold text-secondary">Operational Excellence</h3>
            <p className="mt-4 flex-auto text-base leading-relaxed text-slate-500">
              Streamlining operations to improve efficiency, reduce costs, optimize supply chains, and enhance overall productivity.
            </p>
            <div className="mt-6">
              <Link to="/services" className="text-sm font-bold text-primary hover:text-orange-700 flex items-center gap-1">
                Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
