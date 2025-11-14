export default function ServicesPage() {
  const services = [
    {
      title: 'Lawn Mowing',
      description: 'Regular mowing to keep your lawn healthy and well-maintained throughout the season. We use professional-grade equipment to ensure a clean, even cut every time.',
      features: ['Weekly or bi-weekly service', 'Professional equipment', 'Clean-up included', 'Seasonal maintenance'],
    },
    {
      title: 'Trimming & Edging',
      description: 'Precise trimming and edging for clean, professional-looking borders and edges. We will make sure your lawn has crisp, defined edges that enhance your property\'s curb appeal.',
      features: ['Precision trimming', 'Clean edges', 'Around obstacles', 'Professional finish'],
    },
    {
      title: 'Leaf Removal',
      description: 'Complete leaf removal and cleanup to keep your property neat and tidy. We handle everything from raking to bagging and disposal.',
      features: ['Complete removal', 'Bagging included', 'Disposal service', 'Seasonal cleanup'],
    },
    {
      title: 'Weed Control',
      description: 'Effective weed prevention and removal to maintain a pristine lawn. We use safe, effective treatments to keep weeds at bay.',
      features: ['Pre-emergent treatment', 'Post-emergent control', 'Safe products', 'Ongoing maintenance'],
    },
    {
      title: 'Fertilization',
      description: 'Seasonal fertilization programs to promote healthy, lush green grass. Our customized programs ensure your lawn gets the nutrients it needs.',
      features: ['Seasonal programs', 'Customized treatment', 'Organic options', 'Expert application'],
    },
    {
      title: 'Shrub & Tree Care',
      description: 'Pruning, trimming, and maintenance for trees and shrubs on your property. Keep your landscape looking its best year-round.',
      features: ['Professional pruning', 'Shape maintenance', 'Health assessment', 'Seasonal care'],
    },
    {
      title: 'Full Service Package',
      description: 'Complete lawn care and maintenance solution. Everything you need in one convenient package at a discounted rate.',
      features: ['All services included', 'Regular scheduling', 'Priority support', 'Best value'],
    },
  ]

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive lawn care and maintenance services to keep your property looking its best
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold mb-3 text-gray-900">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/book"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors shadow-lg"
          >
            Book Your Service Now
          </a>
        </div>
      </div>
    </div>
  )
}

