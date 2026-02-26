import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const clientCategories = [
  {
    title: "Federal & Local Government",
    icon: "account_balance",
    accent: "bg-secondary",
    clients: [
      "U.S. Department of Army",
      "U.S. Agency for International Development",
      "U.S. Department of Agriculture (APHIS/AMS)",
      "United States Navy: Naval District Washington",
      "U.S. Attorney's Office",
      "U.S. Department of Commerce",
      "U.S. Census Bureau",
      "U.S. Department of Education",
      "U.S. Department of Energy",
      "U.S. Dept. of Health & Human Services (SAMHSA)",
      "U.S. Department of Labor",
      "U.S. Dept. of Transportation (FHWA)",
      "U.S. Environmental Protection Agency",
      "U.S. Dept. of State (Foreign Service Institute)",
      "U.S. Department of Treasury",
      "Frederick County Teachers' Association",
      "District of Columbia Superior Court"
    ]
  },
  {
    title: "Academic & Education",
    icon: "school",
    accent: "bg-blue-600",
    clients: [
      "Anne Arundel Community College",
      "Bowie University",
      "Howard University",
      "Johns Hopkins University",
      "Montgomery Community College",
      "Morehouse School of Medicine"
    ]
  },
  {
    title: "Private Sector",
    icon: "business",
    accent: "bg-slate-700",
    clients: [
      "Chesapeake Utilities",
      "Colleague Training",
      "Cygnus Corporation",
      "ORC/MACRO International",
      "Graduate School, USA",
      "Jenkins and Jones Law Firm",
      "Management Consulting & Associates",
      "Benchmark Training"
    ]
  },
  {
    title: "Non-Profit Sector",
    icon: "volunteer_activism",
    accent: "bg-primary",
    clients: [
      "American Bar Association",
      "ATTC-Southeast & Mountain West",
      "Partnership for Public Service",
      "Global Learning Systems",
      "Council for Excellence in Government",
      "Florida Prevention Partners",
      "NC School for Alcohol and Drug Studies"
    ]
  },
  {
    title: "Hospitals & Healthcare",
    icon: "local_hospital",
    accent: "bg-emerald-700",
    clients: [
      "Washington Hospital",
      "Whitman Walker Clinic",
      "Wellmont Healthcare Systems"
    ]
  }
];

export function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="clients" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-primary"></div>
            <span className="inline-flex items-center px-3 py-1 rounded-md border border-primary/30 text-primary text-xs font-bold uppercase tracking-wide">
              Industries We Serve
            </span>
          </div>
          <h2 className="text-3xl md:text-[40px] font-extrabold text-slate-900 leading-tight max-w-2xl">
            Trusted Across Government, Healthcare & Beyond
          </h2>
        </motion.div>

        {/* Bento Grid — asymmetric, tight, modern */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto">

          {/* Row 1: Government (large, spans 7 cols) + Academic (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="md:col-span-7 bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all duration-300"
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100">
              <div className="w-9 h-9 bg-secondary rounded-lg flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-[20px]">account_balance</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">Federal & Local Government</h3>
              <span className="ml-auto text-xs font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">17</span>
            </div>
            <div className="p-5 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {clientCategories[0].clients.map((c) => (
                <div key={c} className="flex items-center gap-2 text-sm text-slate-600 py-1 hover:text-secondary transition-colors">
                  <span className="w-1.5 h-1.5 rounded-sm bg-secondary/50 flex-shrink-0"></span>
                  {c}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-5 bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all duration-300"
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-[20px]">school</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">Academic & Education</h3>
              <span className="ml-auto text-xs font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">6</span>
            </div>
            <div className="p-5 space-y-2.5">
              {clientCategories[1].clients.map((c) => (
                <div key={c} className="flex items-center gap-2 text-sm text-slate-600 py-1 hover:text-blue-700 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-sm bg-blue-500/50 flex-shrink-0"></span>
                  {c}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Row 2: Private (5 cols) + Non-Profit (4 cols) + Healthcare (3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:col-span-5 bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all duration-300"
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100">
              <div className="w-9 h-9 bg-slate-700 rounded-lg flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-[20px]">business</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">Private Sector</h3>
              <span className="ml-auto text-xs font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">8</span>
            </div>
            <div className="p-5 space-y-2.5">
              {clientCategories[2].clients.map((c) => (
                <div key={c} className="flex items-center gap-2 text-sm text-slate-600 py-1 hover:text-slate-900 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-sm bg-slate-400/50 flex-shrink-0"></span>
                  {c}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-4 bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all duration-300"
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-[20px]">volunteer_activism</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">Non-Profit</h3>
              <span className="ml-auto text-xs font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">7</span>
            </div>
            <div className="p-5 space-y-2.5">
              {clientCategories[3].clients.map((c) => (
                <div key={c} className="flex items-center gap-2 text-sm text-slate-600 py-1 hover:text-primary transition-colors">
                  <span className="w-1.5 h-1.5 rounded-sm bg-primary/50 flex-shrink-0"></span>
                  {c}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="md:col-span-3 bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all duration-300"
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100">
              <div className="w-9 h-9 bg-emerald-700 rounded-lg flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-[20px]">local_hospital</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">Healthcare</h3>
              <span className="ml-auto text-xs font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">3</span>
            </div>
            <div className="p-5 space-y-2.5">
              {clientCategories[4].clients.map((c) => (
                <div key={c} className="flex items-center gap-2 text-sm text-slate-600 py-1 hover:text-emerald-700 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-sm bg-emerald-500/50 flex-shrink-0"></span>
                  {c}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
