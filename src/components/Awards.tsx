
const awards = [
    {
        org: "NASA",
        orgLogo: "/nasa.png",
        title: "ICG Receives Acknowledgment",
        description: "ICG has been recognized for supporting Organization Alignment and Executive Coaching.",
    },
    {
        org: "Morehouse School of Medicine",
        orgLogo: "/morehouse.jpg",
        title: "ICG Receives Awards For Outstanding Training & Coaching Services",
        description: "Coach Ingram has received recognition for outstanding services in the area of Women's Health Services.",
    },
    {
        org: "U.S. Dept. of State — Diplomatic Security",
        orgLogo: "/dos_security.png",
        title: "ICG Received Outstanding Trainer Awards",
        description: "ICG has received Outstanding Trainer Awards across the Federal Sector for excellence in training delivery.",
    },
]

export function Awards() {
    return (
        <section id="awards" className="py-24 bg-secondary w-full font-sans">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="flex justify-center items-center gap-4 text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-6">
                        <span className="w-10 h-[2px] bg-primary"></span>
                        Recognition
                        <span className="w-10 h-[2px] bg-primary"></span>
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight text-white font-heading mb-4">
                        Awards & <span className="text-primary">Recognitions</span>
                    </h2>
                    <p className="text-slate-300 text-lg font-sans">
                        Honored by federal agencies and organizations for excellence in training, coaching, and organizational development.
                    </p>
                </div>

                {/* Award Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {awards.map((award, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/10 rounded-[32px] p-8 flex flex-col gap-6 hover:bg-white/10 hover:border-primary/40 transition-all duration-500 group">

                            {/* Logo + Org name */}
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                                    <img src={award.orgLogo} alt={award.org} className="w-12 h-12 object-contain rounded-xl" />
                                </div>
                                <span className="text-primary font-bold text-sm uppercase tracking-widest leading-tight">{award.org}</span>
                            </div>

                            {/* Divider */}
                            <div className="w-12 h-[2px] bg-primary"></div>

                            {/* Text */}
                            <div>
                                <h3 className="text-xl font-bold text-white font-heading mb-3 leading-tight">{award.title}</h3>
                                <p className="text-slate-300 text-[15px] leading-relaxed">{award.description}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
