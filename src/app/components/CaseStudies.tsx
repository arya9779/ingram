import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const caseStudies = [
  {
    title: 'Fortune 500 Digital Transformation',
    category: 'Technology',
    result: '300% ROI in 18 months',
    description:
      'Led comprehensive digital transformation initiative for a Fortune 500 company, resulting in improved efficiency and market positioning.',
    image: 'https://images.unsplash.com/photo-1766740606233-6573571caa6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBpbm5vdmF0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzE5NDkwOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'blue',
  },
  {
    title: 'Healthcare System Optimization',
    category: 'Healthcare',
    result: '45% cost reduction',
    description:
      'Streamlined operations and implemented cost-saving measures across a multi-facility healthcare system.',
    image: 'https://images.unsplash.com/photo-1765438869297-6fa4b627906a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzcxOTg4OTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'purple',
  },
  {
    title: 'Retail Growth Strategy',
    category: 'Retail',
    result: '2x revenue growth',
    description:
      'Developed and executed omnichannel strategy that doubled revenue for a national retail chain.',
    image: 'https://images.unsplash.com/photo-1730382624709-81e52dd294d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0JTIwc3VjY2Vzc3xlbnwxfHx8fDE3NzIwNDA5MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'green',
  },
];

export function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-green-50 rounded-full text-green-600 text-sm">
            Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Client{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore how we've helped businesses achieve remarkable results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm">
                    {study.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-3 group-hover:text-blue-600 transition-colors">
                  {study.title}
                </h3>
                <div className="mb-4 px-4 py-2 bg-green-50 rounded-lg inline-block">
                  <span className="text-green-700">{study.result}</span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {study.description}
                </p>
                <button className="text-blue-600 flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read case study
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all">
            View All Case Studies
          </button>
        </motion.div>
      </div>
    </section>
  );
}
