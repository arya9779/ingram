import { Link } from 'react-router';

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-wide">Client Impact</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">Leaders Trust ICG to Deliver Results</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col justify-between rounded-xl bg-blue-50 p-8 shadow-sm border border-blue-100 hover:border-blue-200 transition-colors">
            <div>
              <div className="flex gap-1 text-primary mb-4">
                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
              </div>
              <p className="text-lg text-slate-700 font-medium italic">"ICG transformed our leadership development program. Their deep understanding of government organizational dynamics and hands-on coaching approach delivered results beyond our expectations."</p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-2xl">account_balance</span>
              </div>
              <div>
                <h4 className="text-base font-bold text-secondary">Senior Executive</h4>
                <p className="text-sm text-slate-500">Federal Government Agency</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-xl bg-blue-50 p-8 shadow-sm border border-blue-100 hover:border-blue-200 transition-colors">
            <div>
              <div className="flex gap-1 text-primary mb-4">
                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
              </div>
              <p className="text-lg text-slate-700 font-medium italic">"The strategic planning facilitation was exceptional. Dr. Ingram brought our entire leadership team together and helped us create a roadmap that everyone believed in and committed to."</p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-2xl">local_hospital</span>
              </div>
              <div>
                <h4 className="text-base font-bold text-secondary">Program Director</h4>
                <p className="text-sm text-slate-500">Healthcare Organization</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-xl bg-blue-50 p-8 shadow-sm border border-blue-100 hover:border-blue-200 transition-colors">
            <div>
              <div className="flex gap-1 text-primary mb-4">
                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
              </div>
              <p className="text-lg text-slate-700 font-medium italic">"Outstanding training experience. They understood our diversity and inclusion challenges and provided coaching that made a real, lasting impact on our organizational culture."</p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-2xl">volunteer_activism</span>
              </div>
              <div>
                <h4 className="text-base font-bold text-secondary">HR Director</h4>
                <p className="text-sm text-slate-500">Nonprofit Organization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
