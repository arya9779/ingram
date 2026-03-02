import { Link } from 'react-router-dom'

export function Hero() {
    return (
        <section className="w-full flex justify-center py-6 px-4 md:px-8 bg-white">
            {/* The split screen wrapper */}
            <div className="w-[90%] max-w-[1600px] flex flex-col lg:flex-row gap-6">

                {/* Left Card: Light beige/blue tint to fit requested colors */}
                <div className="flex-1 bg-slate-50 rounded-[32px] p-10 md:p-16 flex flex-col justify-center relative shadow-sm border border-slate-100 min-h-[500px]">
                    <h1 className="text-secondary font-bold text-5xl xl:text-[64px] leading-[1.1] font-heading mb-6 tracking-tight">
                        Empowering Individuals.<br />
                        Building Organizational <span className="text-primary">Infrastructure.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 font-sans mb-12 max-w-xl leading-relaxed">
                        Our clients know us for providing deep expertise in organizational improvement with a focus on human capital and helping to solve "People" challenges.
                    </p>

                    <div className="mt-auto flex items-center justify-between">
                        <Link
                            to="/contact"
                            className="rounded-full bg-primary px-8 py-4 text-lg font-bold text-secondary shadow-md hover:bg-primary-hover hover:-translate-y-0.5 transition-all inline-block"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* Right Card: High-quality photo border-4 border-slate-50 relative */}
                <div className="flex-1 lg:max-w-[50%] rounded-[32px] overflow-hidden relative shadow-lg min-h-[400px] flex items-center justify-center group border-4 border-slate-50 relative">
                    {/* Static image placeholder */}
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop" alt="Team Office" className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105" />
                    <div className="absolute inset-0 bg-secondary/10 hover:bg-transparent transition-colors duration-500" />

                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-secondary/50 to-transparent pointer-events-none" />
                </div>
            </div>
        </section>
    )
}
