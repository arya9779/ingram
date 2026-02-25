import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Building2, Heart, Shield, Globe } from 'lucide-react';

const clientCategories = [
  {
    icon: Building2,
    category: 'Federal Government',
    clients: [
      'U.S. Department of State',
      'USAID',
      'U.S. Department of Housing & Urban Development (HUD)',
      'Federal Emergency Management Agency (FEMA)',
      'U.S. Department of Health & Human Services (HHS)',
    ],
    color: 'sky',
  },
  {
    icon: Heart,
    category: 'Healthcare & Nonprofit',
    clients: [
      'Washington Hospital Center',
      'Arthritis Foundation',
      'Community health organizations',
      'Nonprofit service providers',
    ],
    color: 'emerald',
  },
  {
    icon: Shield,
    category: 'Government Agencies',
    clients: [
      'Federal training programs',
      'Agency leadership development',
      'Interagency collaboration initiatives',
      'Government-wide workforce programs',
    ],
    color: 'violet',
  },
  {
    icon: Globe,
    category: 'International',
    clients: [
      'Programs across the United States',
      'Africa-based initiatives',
      'Japan-based programs',
      'International development projects',
    ],
    color: 'amber',
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  sky: { bg: 'bg-sky-50', text: 'text-sky-700', border: 'border-sky-100' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-100' },
  violet: { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-100' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-100' },
};

export function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="clients" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-700 text-sm font-medium">
            Trusted Partners
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Our Clients
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Proud to serve federal agencies, healthcare organizations, and nonprofits across the nation and internationally
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {clientCategories.map((cat, index) => {
            const Icon = cat.icon;
            const colors = colorClasses[cat.color];

            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-lg hover:shadow-slate-900/5 transition-all duration-200"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center`}>
                    <Icon className={colors.text} size={24} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-slate-900">{cat.category}</h3>
                </div>
                <ul className="space-y-3">
                  {cat.clients.map((client) => (
                    <li key={client} className="flex items-start gap-3">
                      <div className={`w-1.5 h-1.5 ${colors.bg.replace('50', '500')} rounded-full mt-2 flex-shrink-0`} />
                      <span className="text-slate-600">{client}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
