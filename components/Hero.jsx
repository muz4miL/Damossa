export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-yellow-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Authentic <span className="text-orange-500">Samosas</span>
              <br />
              Made Fresh Daily
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Experience the perfect blend of crispy pastry and flavorful
              fillings. Damossa brings you traditional samosas with a modern
              twist.
            </p>
            <div className="space-x-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Order Now via WhatsApp
              </button>
              <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                View Menu
              </button>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="bg-orange-200 rounded-full w-96 h-96 mx-auto flex items-center justify-center">
              {/* Placeholder for samosa image */}
              <span className="text-6xl">🥟</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
