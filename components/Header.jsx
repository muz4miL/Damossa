export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-orange-500">
              🥟 Damossa
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-orange-500 font-medium"
            >
              Home
            </a>
            <a
              href="/menu"
              className="text-gray-700 hover:text-orange-500 font-medium"
            >
              Menu
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-orange-500 font-medium"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-orange-500 font-medium"
            >
              Contact
            </a>
          </nav>

          {/* Order Button */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold">
            Order Now
          </button>
        </div>
      </div>
    </header>
  );
}
