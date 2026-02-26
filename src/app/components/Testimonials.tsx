import { Link } from 'react-router';

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-wide">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">Trusted by Industry Leaders</p>
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
              <p className="text-lg text-slate-700 font-medium italic">"Consultingram transformed our operational workflow. Their strategic insights helped us reduce overhead by 25% within just six months."</p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <img alt="Sarah Johnson" className="h-12 w-12 rounded-full object-cover ring-2 ring-primary ring-offset-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8CRj1XxChwzGQBONnBRIi2TXFs-0ph1bXgRx_drnXlvPtLxWTLCjHbgjc2u5WBbH9RHilUYIOAYp36DfQ6UB25DAtEskwSDOh-rYWj-SS9ePlvyQ7gb055fSnvpHcO90uwtCvxPPESqsdp3W6LsYkQbZM_sQlU_KNEWlpDrZguwvs-w5IZ7Gm-Re5eAbo7rkbozLFKYd7OGWtt-Nk-mPmvuV4-5rzwTSaOnEjx7YtxslEqrlMdc3rdCAWAM-L4Sa75-j_a4IyVW8" />
              <div>
                <h4 className="text-base font-bold text-secondary">Sarah Johnson</h4>
                <p className="text-sm text-slate-500">CEO, TechFlow Inc.</p>
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
              <p className="text-lg text-slate-700 font-medium italic">"The financial advisory team provided clarity during our merger. We couldn't have navigated the complexities without their expert guidance."</p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <img alt="Michael Chen" className="h-12 w-12 rounded-full object-cover ring-2 ring-primary ring-offset-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTqwtUp_FbSnoJzztwmGnQYO6ehSxroA6ASQw7b4v5Ea3n0UXweqjWiSNPCu66K64u_vms0Dly7Ey0IDRDO0s24_FKrQNQ8KiPEXkJ1cmaHuHhD7zkpqq4xtW5lkI4SAiJBBMJxfC5EWdUKOJ7R9d0A5cWtBVc6blEslmodyX6USyy6iHIR_lxeN7_WUKZm1tjOc5mHoOpXK51r4ffwsunfzJB93xf5t-EHmhi1ZUMOsAYZzb_C2EAzTALatW1aH3f7YbKTLBf2qc" />
              <div>
                <h4 className="text-base font-bold text-secondary">Michael Chen</h4>
                <p className="text-sm text-slate-500">CFO, Global Logistics</p>
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
              <p className="text-lg text-slate-700 font-medium italic">"Professional, insightful, and results-driven. The strategic planning workshop aligned our entire executive team."</p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <img alt="Elena Rodriguez" className="h-12 w-12 rounded-full object-cover ring-2 ring-primary ring-offset-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNsdv5Tfn64oPVtKqDJsk0EPJ8Hjk_atQmZkrZum19-f-0hwZztQRdIPKuFCagl03FQKsbzD84jg_wIJ-i9lNHchkflfSDlSN7xP61l1-rPh69zy0qI-l4orllx-iO_xhMB6c9PE3VujMqYRmVraVa0thYg9L-n4mSjrtKT9GDdNZszOA4GtoXw7Kr4lJjJFLwr8Aih88pJQRENmzy0fpzID-BIi-D0am_JHvzD006b9ODx1FmcIbVX_4TRDQjRBeWiXDrihMI62k" />
              <div>
                <h4 className="text-base font-bold text-secondary">Elena Rodriguez</h4>
                <p className="text-sm text-slate-500">Director of Ops, RetailGroup</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
