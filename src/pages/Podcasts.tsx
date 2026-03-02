import { VideoSection } from '../components/VideoSection'

export function Podcasts() {
    return (
        <div className="pt-8">
            <div className="text-center py-16 bg-slate-50 border-b border-slate-200">
                <h1 className="text-4xl font-bold text-secondary font-heading mb-4">Our Podcasts & Media</h1>
                <p className="text-slate-600 font-sans text-lg">Watch and listen to our latest insights on organizational improvement.</p>
            </div>
            <VideoSection />
        </div>
    )
}
