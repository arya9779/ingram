import { Team } from '../components/Team'
import { PageHero } from '../components/PageHero'

export function AboutUs() {
    return (
        <div className="w-full flex flex-col bg-white">
            <PageHero
                title="About"
                highlight="Our Firm"
                bgImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
                currentPath="About Us"
            />
            <Team />
        </div>
    )
}
