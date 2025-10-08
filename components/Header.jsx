import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Image
              src="/damosa-logo.png"
              alt="Damosa Logo"
              width={60}
              height={60}
              className="rounded-lg"
            />
            {/* Text styled to match the logo */}
            <div className="relative">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-800 via-red-800 to-amber-700 bg-clip-text text-transparent tracking-wider">
                DAMOSA
              </h1>
              {/* Orange underline to match logo */}
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"></div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="/"
              className="text-gray-600 hover:text-orange-500 transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="/menu"
              className="text-gray-600 hover:text-orange-500 transition-colors font-medium"
            >
              Menu
            </a>
            <a
              href="/about"
              className="text-gray-600 hover:text-orange-500 transition-colors font-medium"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-gray-600 hover:text-orange-500 transition-colors font-medium"
            >
              Contact
            </a>
          </nav>

          {/* Order Button */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg">
            Order Now
          </button>
        </div>
      </div>
    </header>
  );
}
