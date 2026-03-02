import { Clients } from '../components/Clients'
import { PageHero } from '../components/PageHero'

export function ClientsPage() {
    return (
        <div className="w-full flex flex-col bg-white">
            <PageHero
                title="Trusted"
                highlight="Partners"
                bgImage="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=2000"
                currentPath="Our Clients"
            />
            <Clients />
        </div>
    )
}
