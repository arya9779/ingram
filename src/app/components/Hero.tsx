import { Link } from 'react-router';

export function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCgRArLNaWKAylNyID9qZqUgQSypd0QtwM7xX5YMwu62HF49dI-VHOCA6jsNQbcMspaBtcrBK4WRcKyqFa0bfTHOO-XyG-l_QpzhzM4NtnZJM1pHf26L8rydhp8OLjR2FlmOab7AEFIkQGr9Ew3i6V--mcOtho6vFHx_6W1Vq7ccsiPtrR3Z-LbfQTQLjst5BIo1OY--X00xWf9O6lKxQdhfWq2CH1qqp1XAizD8zsK1p4Nm8Egpju3Kj7m3L566KhbyqMS68E7PvU")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/75 to-secondary/40" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pt-32 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-px bg-primary" />
            <span className="text-primary text-sm font-bold tracking-widest uppercase">
              Est. 1995 · Bethesda, MD
            </span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] leading-[1.1] mb-6">
            Your People Are Your Strategy.{' '}
            <br className="hidden sm:block" />
            We Make Them <span className="text-primary">Unstoppable.</span>
          </h1>

          <p className="text-lg text-blue-100/80 max-w-xl mb-10 leading-relaxed">
            For over 30 years, ICG has helped federal agencies, healthcare
            systems, and organizations across the globe build exceptional
            leaders, align teams, and transform workplace culture.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="group flex h-13 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white shadow-lg shadow-orange-900/30 hover:bg-orange-600 hover:scale-[1.03] transition-all cursor-pointer"
            >
              Schedule a Consultation
              <span className="material-symbols-outlined ml-2 text-[20px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
            <Link
              to="/services"
              className="flex h-13 items-center justify-center rounded-lg bg-white/10 backdrop-blur-md border border-white/20 px-8 text-base font-bold text-white hover:bg-white/20 transition-all cursor-pointer"
            >
              Explore Our Services
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-14 flex items-center gap-8 text-blue-100/50">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">verified</span>
              <span className="text-sm font-medium">30+ Years</span>
            </div>
            <div className="w-px h-4 bg-blue-100/20" />
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">groups</span>
              <span className="text-sm font-medium">5,000+ Leaders</span>
            </div>
            <div className="w-px h-4 bg-blue-100/20 hidden sm:block" />
            <div className="hidden sm:flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">public</span>
              <span className="text-sm font-medium">4 Continents</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
