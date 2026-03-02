import { GraduationCap, TrendingUp, Target, Mic, Briefcase, Handshake } from 'lucide-react'

const services = [
    {
        icon: GraduationCap,
        title: 'Training Nationally \n& Internationally',
        description: 'ICG offers consulting and training across all areas of human capital and organizational development.'
    },
    {
        icon: TrendingUp,
        title: 'Leadership\nDevelopment',
        description: 'Customized leadership courses and assessments that build the critical skills your emerging and senior leaders need.'
    },
    {
        icon: Target,
        title: 'Organizational\nEffectiveness',
        description: 'Strategic planning, organizational alignment, and performance improvement frameworks.'
    },
    {
        icon: Handshake,
        title: 'Facilitation &\nMeeting Design',
        description: 'Expert facilitation for retreats, off-sites, and critical meetings that drive consensus.'
    },
    {
        icon: Briefcase,
        title: 'Executive\nCoach',
        description: 'One-on-one coaching for senior leaders to enhance performance and navigate transitions.'
    },
    {
        icon: Mic,
        title: 'Fractional\nCODC / CDO',
        description: 'Fractional Chief Organization Development Consultant (CODC) or Chief Develop Officer (CDO) services.'
    }
]

export function Services() {
    return (
        <section id="services" className="py-24 bg-secondary w-full">
            <div className="mx-auto max-w-[1400px] px-4 md:px-8">
                <div className="text-center max-w-4xl mx-auto mb-16 px-4">
                    <h2 className="text-4xl font-bold tracking-tight text-white mb-6 font-heading">
                        Our Services
                    </h2>
                    <p className="text-lg text-slate-300 font-sans">
                        We deliver actionable strategies and training tailored to help your leaders,
                        teams, and organization thrive at every level.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <div key={index} className="bg-white rounded-3xl p-10 flex flex-col items-start gap-4 shadow-sm hover:-translate-y-2 transition-transform duration-300 border-b-4 border-transparent hover:border-primary">

                                <div className="w-16 h-16 bg-slate-50 flex items-center justify-center rounded-2xl mb-2 text-secondary">
                                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                                </div>

                                <h3 className="text-[22px] leading-tight font-bold text-secondary font-heading whitespace-pre-line">
                                    {service.title}
                                </h3>

                                <p className="flex-auto text-[15px] leading-relaxed text-slate-500 font-sans mt-2 mb-6">
                                    {service.description}
                                </p>

                                <div className="mt-auto flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group cursor-pointer hover:text-primary-hover transition-colors">
                                    Learn More
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
