import { Link } from 'react-router-dom'

interface PageHeroProps {
    title: string;
    highlight: string;
    bgImage: string;
    currentPath: string;
}

export function PageHero({ title, highlight, bgImage, currentPath }: PageHeroProps) {
    return (
        <div className="w-full h-[35vh] md:h-[45vh] bg-secondary relative flex flex-col items-center justify-center overflow-hidden border-b-[6px] border-primary">
            {/* Background Image with overlay */}
            <div
                className="absolute inset-0 opacity-[0.15] bg-cover bg-center mix-blend-overlay"
                style={{ backgroundImage: `url('${bgImage}')` }}
            ></div>

            {/* Dark gradient mapping bottom */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-secondary to-transparent pointer-events-none"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 mt-8">
                <h1 className="text-5xl md:text-7xl font-bold text-white font-heading mb-6 tracking-tight drop-shadow-md">
                    {title} <span className="text-primary">{highlight}</span>
                </h1>

                {/* Breadcrumb style tracker */}
                <div className="flex items-center justify-center gap-4 text-sm font-bold uppercase tracking-[0.2em] text-primary bg-secondary/80 px-6 py-2.5 rounded-full inline-flex border border-white/10 backdrop-blur-md shadow-xl">
                    <Link to="/" className="hover:text-white transition-colors">Home</Link>
                    <span className="text-white/30">/</span>
                    <span className="text-white">{currentPath}</span>
                </div>
            </div>
        </div>
    )
}
