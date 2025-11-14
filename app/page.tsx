import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Leasure Time Lawn Care and Maintenance
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Professional lawn care services to keep your property looking its best
            </p>
            <Link
              href="/book"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors shadow-lg"
            >
              Book Your Service Now
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Lawn Mowing</h3>
              <p className="text-gray-600">
                Regular mowing to keep your lawn healthy and well-maintained throughout the season.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">✂️</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Trimming & Edging</h3>
              <p className="text-gray-600">
                Precise trimming and edging for clean, professional-looking borders and edges.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🍂</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Leaf Removal</h3>
              <p className="text-gray-600">
                Complete leaf removal and cleanup to keep your property neat and tidy.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Weed Control</h3>
              <p className="text-gray-600">
                Effective weed prevention and removal to maintain a pristine lawn.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💧</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Fertilization</h3>
              <p className="text-gray-600">
                Seasonal fertilization programs to promote healthy, lush green grass.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🌳</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Shrub & Tree Care</h3>
              <p className="text-gray-600">
                Pruning, trimming, and maintenance for trees and shrubs on your property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Experienced Professionals</h3>
                <p className="text-gray-600">
                  Years of experience in lawn care and maintenance with proven results.
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
                  Book appointments online at your convenience with our easy scheduling system.
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
                  Competitive rates with transparent pricing - no hidden fees.
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
                  We stand behind our work and ensure your complete satisfaction.
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
            Ready to Transform Your Lawn?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Book your service today and see the difference professional care makes
          </p>
          <Link
            href="/book"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors shadow-lg"
          >
            Schedule Your Appointment
          </Link>
        </div>
      </section>
    </div>
  )
}

