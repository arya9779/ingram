

export function VideoSection() {
    return (
        <section className="w-full bg-slate-50 py-16 flex justify-center">
            <div className="w-[90%] max-w-[1600px] aspect-video rounded-[32px] overflow-hidden shadow-2xl relative border-4 border-white">
                <div className="absolute inset-0 bg-secondary/10 flex items-center justify-center z-10 pointer-events-none">
                    <div className="bg-secondary/90 px-6 py-3 rounded-full text-white font-bold font-heading tracking-widest text-sm uppercase drop-shadow-md">
                        Introduction Video
                    </div>
                </div>

                <div className="w-full h-full relative group/video cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop" alt="Introduction Video Thumbnail" className="w-full h-full object-cover group-hover/video:opacity-90 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-secondary/20 group-hover/video:bg-transparent transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-primary hover:bg-primary-hover text-secondary w-20 h-20 rounded-full transition-transform duration-300 group-hover/video:scale-110 shadow-xl flex items-center justify-center">
                            <span className="material-symbols-outlined text-[48px] leading-none translate-x-[2px]">play_arrow</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
