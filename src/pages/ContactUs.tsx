import { Contact } from '../components/Contact'
import { PageHero } from '../components/PageHero'

export function ContactUs() {
    return (
        <div className="w-full flex flex-col bg-white">
            <PageHero
                title="Let's"
                highlight="Connect"
                bgImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop"
                currentPath="Contact Us"
            />
            <Contact />
        </div>
    )
}
