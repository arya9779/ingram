import { Hero } from '../components/Hero'
import { VideoSection } from '../components/VideoSection'
import { Clients } from '../components/Clients'
import { Awards } from '../components/Awards'
import { Services } from '../components/Services'
import { Team } from '../components/Team'
import { Contact } from '../components/Contact'

export function Home() {
    return (
        <>
            <Hero />
            <Clients />
            <Awards />
            <VideoSection />
            <Services />
            <Team />
            <Contact />
        </>
    )
}

