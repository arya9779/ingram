import { Link } from 'react-router';

export function Hero() {
  return (
    <main className="flex-grow bg-white">
      <div className="bg-slate-50">
        <div className="px-4 py-6 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div
            className="relative overflow-hidden rounded-xl bg-secondary shadow-2xl"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCgRArLNaWKAylNyID9qZqUgQSypd0QtwM7xX5YMwu62HF49dI-VHOCA6jsNQbcMspaBtcrBK4WRcKyqFa0bfTHOO-XyG-l_QpzhzM4NtnZJM1pHf26L8rydhp8OLjR2FlmOab7AEFIkQGr9Ew3i6V--mcOtho6vFHx_6W1Vq7ccsiPtrR3Z-LbfQTQLjst5BIo1OY--X00xWf9O6lKxQdhfWq2CH1qqp1XAizD8zsK1p4Nm8Egpju3Kj7m3L566KhbyqMS68E7PvU")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-secondary/75"></div>
            <div className="relative px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
              <div className="max-w-3xl">

                <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl mb-5 leading-[1.1]">
                  Your People Are Your Strategy. <br className="hidden sm:block" />We Make Them <span className="text-primary">Unstoppable.</span>
                </h1>
                <p className="mt-4 text-base text-blue-100/90 sm:text-lg max-w-2xl mb-6 leading-relaxed">
                  For over 30 years, ICG has helped federal agencies, healthcare systems, and organizations across the globe build exceptional leaders, align teams, and transform workplace culture.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link to="/contact" className="flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white shadow-lg shadow-orange-900/30 hover:bg-orange-600 hover:scale-105 transition-all cursor-pointer">
                    Schedule a Consultation
                  </Link>
                  <Link to="/services" className="flex h-12 items-center justify-center rounded-lg bg-white/10 backdrop-blur-md border border-white/20 px-8 text-base font-bold text-white hover:bg-white/20 transition-all cursor-pointer">
                    Explore Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
