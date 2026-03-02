import { Services } from '../components/Services'
import { PageHero } from '../components/PageHero'

export function ServicesPage() {
    return (
        <div className="w-full flex flex-col bg-white">
            <PageHero
                title="Explore"
                highlight="Our Services"
                bgImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop"
                currentPath="Services"
            />
            <Services />
        </div>
    )
}
