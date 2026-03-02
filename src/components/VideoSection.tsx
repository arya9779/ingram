
export function VideoSection() {
    return (
        <section className="w-full bg-slate-50 py-16 flex justify-center">
            <div className="w-[90%] max-w-[1600px] aspect-video rounded-[32px] overflow-hidden shadow-2xl relative border-4 border-white bg-secondary flex items-center justify-center">
                <div className="flex flex-col items-center gap-4 text-white/30 select-none">
                    <span className="material-symbols-outlined text-[80px]">movie</span>
                    <span className="text-sm font-bold uppercase tracking-widest font-sans">Introduction Video</span>
                </div>
            </div>
        </section>
    )
}
