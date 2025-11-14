import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Leasure Time Lawn Care</h3>
            <p className="text-gray-400">
              Your local lawn care experts in Kewanee, IL. Let&apos;s make your yard the envy of the neighborhood! 🌿
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-gray-400 hover:text-white transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="bg-primary-800/30 rounded-lg p-4 mb-4">
              <p className="text-white font-semibold mb-2">📞 Call or Text Today!</p>
              <a 
                href="tel:309-312-1408" 
                className="text-2xl font-bold text-white hover:text-primary-200 transition-colors block mb-2"
              >
                (309) 312-1408
              </a>
              <p className="text-primary-200 text-sm">Free Estimates Available</p>
            </div>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>129 Pasyson Street<br />Kewanee, IL 61443</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🕐</span>
                <span>Mon-Sat 7AM-7PM</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Leasure Time Lawn Care and Maintenance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

