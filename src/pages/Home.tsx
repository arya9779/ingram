import { Hero } from '../components/Hero'
import { VideoSection } from '../components/VideoSection'
import { Services } from '../components/Services'
import { Team } from '../components/Team'
import { Contact } from '../components/Contact'

export function Home() {
    return (
        <>
            <Hero />
            <VideoSection />
            <Services />
            <Team />
            <Contact />
        </>
    )
}
