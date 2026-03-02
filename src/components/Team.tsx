
const founder = {
    name: "Le'Angela Ingram, Ed.D.",
    role: 'Founder & Principal Consultant',
    bio: 'Dr. Le\'Angela Ingram founded ICG in 1995 with a vision to help organizations develop their most valuable asset — their people. With an Ed.D. in Organizational Leadership, she has coached over 5,000 leaders globally.',
    initials: 'LI',
    aboutText: "About Le'Angela"
}

const teamMembers = [
    {
        name: 'Barbara Upston',
        role: 'Sr. Consultant',
        bio: 'Extensive experience in organizational development and leadership training.',
        initials: 'BU',
        aboutText: "About Barbara"
    },
    {
        name: 'John Riordan',
        role: 'Sr. Consultant',
        bio: 'Deep expertise in strategic planning and change management across sectors.',
        initials: 'JR',
        aboutText: "About John"
    },
    {
        name: 'Nancy Rosenshine',
        role: 'Sr. Consultant',
        bio: 'Specializes in executive coaching, conflict resolution, and resilience training.',
        initials: 'NR',
        aboutText: "About Nancy"
    },
    {
        name: 'Tony Bennae',
        role: 'Sr. Consultant',
        bio: 'Wealth of experience in curriculum design and instructor development.',
        initials: 'TB',
        aboutText: "About Tony"
    }
]

export function Team() {
    return (
        <section id="about" className="py-24 bg-slate-50 w-full font-sans">
            <div className="mx-auto max-w-[1400px] px-8">

                {/* Who We Are Header */}
                <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">

                    <div className="flex-1 w-full max-w-2xl">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary text-primary text-sm font-semibold mb-6">
                            Who We Are
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-secondary font-heading mb-6 leading-tight">
                            Building Stronger Leadership. Transforming Organizational Performance.
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            We collaborate with government agencies, healthcare systems, educational institutions, and private organizations to design leadership solutions that create sustainable growth, alignment, and performance.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex rounded-full bg-primary px-8 py-3.5 text-[15px] font-bold text-white shadow-md hover:bg-primary-hover hover:-translate-y-0.5 transition-all text-secondary"
                        >
                            More About Us
                        </a>
                    </div>

                    <div className="flex-1 flex gap-6 mt-12 lg:mt-0 w-full h-[500px]">
                        {/* Team Photo Container */}
                        <div className="flex-1 h-full rounded-[32px] overflow-hidden shadow-lg border-4 border-white bg-slate-200">
                            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=2000" alt="Team" className="w-full h-full object-cover" />
                        </div>

                        {/* Stats Grid */}
                        <div className="flex-1 h-full grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/50 rounded-[32px] p-2 border border-slate-200">
                            <div className="bg-white rounded-3xl p-6 flex flex-col justify-center text-center shadow-sm border border-slate-100">
                                <div className="text-4xl font-bold text-secondary mb-2 font-heading">20<span className="text-primary">+</span></div>
                                <div className="text-sm font-medium text-slate-500">Years of Experience</div>
                            </div>
                            <div className="bg-white rounded-3xl p-6 flex flex-col justify-center text-center shadow-sm border border-slate-100">
                                <div className="text-4xl font-bold text-secondary mb-2 font-heading">100<span className="text-primary">+</span></div>
                                <div className="text-sm font-medium text-slate-500">Organizations Served</div>
                            </div>
                            <div className="bg-white rounded-3xl p-6 flex flex-col justify-center text-center shadow-sm border border-slate-100">
                                <div className="text-4xl font-bold text-secondary mb-2 font-heading">10K<span className="text-primary">+</span></div>
                                <div className="text-sm font-medium text-slate-500">Leaders Trained & Coached</div>
                            </div>
                            <div className="bg-white rounded-3xl p-6 flex flex-col justify-center text-center shadow-sm border border-slate-100">
                                <div className="text-4xl font-bold text-secondary mb-2 font-heading">95<span className="text-primary">%</span></div>
                                <div className="text-sm font-medium text-slate-500">Client Retention Rate</div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Our Experts Header */}
                <div id="team" className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl font-heading mb-4">
                        Meet Our <span className="text-primary">Experts</span>
                    </h2>
                    <p className="text-lg text-slate-500 font-sans">
                        Our team brings decades of combined expertise in leadership development and human capital management.
                    </p>
                </div>

                {/* Founder */}
                <div className="max-w-[1000px] mx-auto mb-16 bg-white rounded-[32px] p-4 md:p-8 border border-slate-100 shadow-sm flex flex-col md:flex-row gap-8 items-center md:items-start group transition-all">
                    <div className="w-48 h-48 shrink-0 bg-slate-50 rounded-[28px] border border-slate-200 flex items-center justify-center m-2 group-hover:border-primary/50 transition-colors">
                        <span className="text-[80px] font-bold text-secondary font-heading">{founder.initials}</span>
                    </div>
                    <div className="flex-1 text-center md:text-left py-4 pr-6">
                        <h3 className="text-3xl font-bold text-secondary mb-2 font-heading">{founder.name}</h3>
                        <p className="text-primary font-bold text-sm uppercase tracking-widest mb-6 font-sans border-b border-primary/20 pb-4 inline-block w-full">{founder.role}</p>
                        <p className="text-slate-600 leading-relaxed font-sans mb-6 text-lg">{founder.bio}</p>
                        <button className="text-secondary hover:text-primary font-bold transition-colors inline-flex items-center gap-2">
                            {founder.aboutText} <span className="text-xl leading-none">&rarr;</span>
                        </button>
                    </div>
                </div>

                {/* Senior Consultants Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-[32px] border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1 text-center cursor-default group">
                            <div className="w-20 h-20 mx-auto bg-slate-50 border border-slate-200 rounded-[20px] flex items-center justify-center mb-6 group-hover:border-primary/50 transition-colors">
                                <span className="text-3xl font-bold text-secondary font-heading">{member.initials}</span>
                            </div>
                            <h4 className="text-xl font-bold text-secondary mb-2 font-heading">{member.name}</h4>
                            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-4 font-sans">{member.role}</p>
                            <p className="text-slate-500 text-[15px] leading-relaxed font-sans mb-6">{member.bio}</p>
                            <button className="text-secondary hover:text-primary font-bold text-sm transition-colors inline-flex items-center gap-1.5">
                                {member.aboutText} <span className="text-lg leading-none">&rarr;</span>
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
