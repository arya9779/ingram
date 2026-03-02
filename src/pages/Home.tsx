import { Hero } from '../components/Hero'
import { VideoSection } from '../components/VideoSection'
import { Awards } from '../components/Awards'
import { Clients } from '../components/Clients'
import { Services } from '../components/Services'
import { Contact } from '../components/Contact'

export function Home() {
    return (
        <>
            <Hero />
            <VideoSection />
            <Awards />
            <Clients />
            <Services />
            <Contact />
        </>
    )
}

