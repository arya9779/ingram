import { Link } from 'react-router';

export function Hero() {
  return (
    <main className="flex-grow bg-white">
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <div className="px-4 py-6 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div
            className="relative overflow-hidden rounded-xl bg-secondary shadow-2xl"
            style={{
              backgroundImage: 'linear-gradient(rgba(30, 58, 138, 0.85), rgba(30, 58, 138, 0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCgRArLNaWKAylNyID9qZqUgQSypd0QtwM7xX5YMwu62HF49dI-VHOCA6jsNQbcMspaBtcrBK4WRcKyqFa0bfTHOO-XyG-l_QpzhzM4NtnZJM1pHf26L8rydhp8OLjR2FlmOab7AEFIkQGr9Ew3i6V--mcOtho6vFHx_6W1Vq7ccsiPtrR3Z-LbfQTQLjst5BIo1OY--X00xWf9O6lKxQdhfWq2CH1qqp1XAizD8zsK1p4Nm8Egpju3Kj7m3L566KhbyqMS68E7PvU")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="relative px-6 py-24 sm:px-12 sm:py-32 lg:px-16">
              <div className="max-w-3xl">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
                  Transform Your Business with Strategic Consulting
                </h1>
                <p className="mt-6 text-lg text-blue-100 sm:text-xl max-w-2xl mb-8">
                  Expert guidance for sustainable growth, financial advisory, and operational excellence. We help you navigate complexity.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link to="/services" className="flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-bold text-white shadow-lg shadow-orange-900/20 hover:bg-orange-600 transition-all cursor-pointer">
                    Get Started
                  </Link>
                  <Link to="/about" className="flex h-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-8 text-base font-bold text-white hover:bg-white/20 transition-all cursor-pointer">
                    Learn More
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
