import { VideoSection } from '../components/VideoSection'
import { PageHero } from '../components/PageHero'

export function Podcasts() {
    return (
        <div className="w-full flex flex-col bg-white">
            <PageHero
                title="Media &"
                highlight="Podcasts"
                bgImage="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2940&auto=format&fit=crop"
                currentPath="Podcasts"
            />
            <VideoSection />
        </div>
    )
}
