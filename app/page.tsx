import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Leasure Time Lawn Care and Maintenance
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-primary-100">
              Your Yard, Our Passion! 🌱
            </p>
            <p className="text-lg md:text-xl mb-8 text-primary-200">
              Professional lawn care services in Kewanee, IL that make your neighbors jealous!
            </p>
            <Link
              href="/book"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 hover:scale-105 transition-all shadow-lg transform"
            >
              🚀 Book Your Service Now
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            What We Do Best 🎯
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            From mowing to mulching, we&apos;ve got your lawn covered!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-primary-200">
              <div className="text-5xl mb-4 transform hover:scale-110 transition-transform">🌱</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Lawn Mowing</h3>
              <p className="text-gray-600">
                Crisp, clean cuts that make your grass look like a golf course! Regular mowing keeps your lawn healthy and gorgeous all season long.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-primary-200">
              <div className="text-5xl mb-4 transform hover:scale-110 transition-transform">✂️</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Trimming & Edging</h3>
              <p className="text-gray-600">
                Sharp edges and perfect lines! We&apos;ll make your property look so clean, you&apos;ll want to take pictures of it.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-primary-200">
              <div className="text-5xl mb-4 transform hover:scale-110 transition-transform">🍂</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Leaf Removal</h3>
              <p className="text-gray-600">
                Fall cleanup that&apos;s actually fun to watch! We&apos;ll make those leaves disappear faster than you can say &quot;autumn.&quot;
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-primary-200">
              <div className="text-5xl mb-4 transform hover:scale-110 transition-transform">🌿</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Weed Control</h3>
              <p className="text-gray-600">
                Say goodbye to those pesky weeds! We&apos;ll keep your lawn looking pristine and weed-free all season.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-primary-200">
              <div className="text-5xl mb-4 transform hover:scale-110 transition-transform">💧</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Fertilization</h3>
              <p className="text-gray-600">
                Feed your lawn the good stuff! Our seasonal programs turn your grass into a lush, green carpet of perfection.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-primary-200">
              <div className="text-5xl mb-4 transform hover:scale-110 transition-transform">🌳</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Shrub & Tree Care</h3>
              <p className="text-gray-600">
                We shape, we trim, we make everything look amazing! Your trees and shrubs will thank you (and so will your neighbors).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Why Choose Leasure Time? ⭐
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Because your lawn deserves the best, and that&apos;s exactly what we deliver!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Experienced Professionals</h3>
                <p className="text-gray-600">
                  Brian brings years of hands-on experience to every job. We know lawns, and we know how to make them shine!
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Flexible Scheduling</h3>
                <p className="text-gray-600">
                  Book online anytime, day or night! Our easy scheduling system works around YOUR schedule, not ours.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Affordable Pricing</h3>
                <p className="text-gray-600">
                  Great service doesn&apos;t have to break the bank! Fair, transparent pricing with zero surprises.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Satisfaction Guaranteed</h3>
                <p className="text-gray-600">
                  Not happy? We&apos;ll make it right! Your satisfaction is our top priority, period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make Your Neighbors Jealous? 😎
          </h2>
          <p className="text-xl mb-4 text-primary-100">
            Let&apos;s turn your yard into the talk of the town!
          </p>
          <p className="text-lg mb-8 text-primary-200">
            Serving Kewanee, IL with pride. Call Brian at (309) 312-1408 or book online!
          </p>
          <Link
            href="/book"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 hover:scale-105 transition-all shadow-lg transform"
          >
            🎯 Schedule Your Appointment Now
          </Link>
        </div>
      </section>
    </div>
  )
}

