import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const clientCategories = [
  {
    title: "Federal & Local Government",
    icon: "account_balance",
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
      "U.S. Department of Health and Human Services (SAMHSA)",
      "U.S. Department of Labor",
      "U.S. Department of Transportation (FHWA)",
      "U.S. Environmental Protection Agency",
      "U.S. Department of State (Foreign Service Institute)",
      "U.S. Department of Treasury",
      "Frederick County [Maryland] Teachers' Association",
      "District of Columbia Superior Court"
    ]
  },
  {
    title: "Academic & Education",
    icon: "school",
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
    clients: [
      "American Bar Association",
      "ATTC-Southeast & Mountain West",
      "Partnership for Public Service",
      "Global Learning Systems",
      "The Council for Excellence in Government",
      "Florida Prevention Partners",
      "NC School for Alcohol and Drug Studies"
    ]
  },
  {
    title: "Hospitals & Healthcare",
    icon: "local_hospital",
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
    <section id="clients" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-orange-100 text-primary w-fit border border-orange-200">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-bold tracking-wide uppercase">Our Clients</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Trusted by <span className="text-secondary">Industry Leaders</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We are proud to have partnered with a diverse array of respected organizations across the public, private, academic, and healthcare sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl border border-slate-100 shadow-lg shadow-blue-900/5 overflow-hidden group hover:border-primary/40 hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300"
            >
              <div className="bg-secondary p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-slate-800 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <span className="material-symbols-outlined">{category.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white pr-2 group-hover:text-primary-100 transition-colors">{category.title}</h3>
                </div>
              </div>
              <ul className="p-6 space-y-4">
                {category.clients.map((client) => (
                  <li key={client} className="flex items-start text-slate-700 text-sm hover:text-primary transition-colors cursor-default">
                    <span className="material-symbols-outlined text-[18px] text-primary/70 mt-0.5 mr-3 group-hover:scale-110 transition-transform flex-shrink-0">trip_origin</span>
                    <span className="leading-snug font-medium text-slate-600">{client}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
