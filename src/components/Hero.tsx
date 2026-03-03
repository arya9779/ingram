import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const heroImages = [
    {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop",
        alt: "Leadership Workshop"
    },
    {
        src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop",
        alt: "Strategy Meeting"
    },
    {
        src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2940&auto=format&fit=crop",
        alt: "Professional Training"
    },
    {
        src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop",
        alt: "Executive Coaching"
    }
]

export function Hero() {
    const [activeIdx, setActiveIdx] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIdx(i => (i + 1) % heroImages.length)
        }, 4000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="w-full flex justify-center py-6 px-4 md:px-8 bg-white">
            <div className="w-[90%] max-w-[1600px] flex flex-col lg:flex-row gap-6">

                {/* Left Card */}
                <div className="flex-1 bg-slate-50 rounded-[32px] p-10 md:p-16 flex flex-col justify-center relative shadow-sm border border-slate-100 min-h-[500px]">
                    <h1 className="text-secondary font-bold text-5xl xl:text-[64px] leading-[1.1] font-heading mb-6 tracking-tight">
                        Empowering Individuals. Building Organizational <span className="text-primary">Infrastructure.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 font-sans mb-12 max-w-xl leading-relaxed">
                        Our clients know us for providing deep expertise in organizational improvement with a focus on human capital and helping to solve "People" challenges.
                    </p>

                    <div className="mt-auto flex items-center gap-6">
                        <Link
                            to="/contact"
                            className="rounded-full bg-primary px-8 py-4 text-lg font-bold text-secondary shadow-md hover:bg-primary-hover hover:-translate-y-0.5 transition-all inline-block"
                        >
                            Contact Us
                        </Link>
                        <Link
                            to="/about"
                            className="text-[15px] font-bold text-secondary hover:text-primary transition-colors inline-flex items-center gap-2"
                        >
                            Meet Our Team <span className="text-xl">&rarr;</span>
                        </Link>
                    </div>
                </div>

                {/* Right Card: Slideshow with thumbnail strip */}
                <div className="flex-1 lg:max-w-[50%] flex flex-col gap-3 min-h-[500px]">

                    {/* Main Image */}
                    <div className="flex-1 rounded-[32px] overflow-hidden relative shadow-lg border-4 border-slate-50">
                        {heroImages.map((img, idx) => (
                            <img
                                key={idx}
                                src={img.src}
                                alt={img.alt}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${idx === activeIdx ? 'opacity-100' : 'opacity-0'}`}
                            />
                        ))}
                        <div className="absolute inset-0 bg-secondary/10 pointer-events-none" />
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-secondary/60 to-transparent pointer-events-none" />
                        {/* Caption */}
                        <div className="absolute bottom-5 left-6 right-6 z-10">
                            <p className="text-white text-sm font-bold uppercase tracking-widest opacity-80">{heroImages[activeIdx].alt}</p>
                        </div>
                    </div>

                    {/* Thumbnail strip (hidden per request) */}
                    <div className="hidden gap-3 h-[110px]">
                        {heroImages.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIdx(idx)}
                                className={`flex-1 rounded-[20px] overflow-hidden border-4 transition-all duration-300 ${idx === activeIdx ? 'border-primary scale-[1.03] shadow-md' : 'border-white opacity-60 hover:opacity-90 hover:scale-105'}`}
                            >
                                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
