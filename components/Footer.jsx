export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">🥟 Damossa</h3>
            <p className="text-gray-300">
              Authentic samosas made fresh daily with love and traditional
              recipes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-orange-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/menu" className="text-gray-300 hover:text-orange-400">
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-orange-400"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-orange-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-gray-300">
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 123 Food Street, City</p>
              <p>🕒 Daily: 9AM - 9PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Damossa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
