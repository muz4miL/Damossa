export default function AboutPreview() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Why Choose <span className="text-orange-500">Damossa?</span>
            </h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                🌟 <strong>Fresh Daily:</strong> Every samosa is handcrafted
                fresh each morning using traditional family recipes.
              </p>
              <p>
                🌿 <strong>Quality Ingredients:</strong> We source only the
                finest spices and freshest vegetables for authentic flavors.
              </p>
              <p>
                👨‍🍳 <strong>Traditional Methods:</strong> Our experienced chefs
                follow time-tested techniques passed down through generations.
              </p>
              <p>
                ⚡ <strong>Quick Service:</strong> Order via WhatsApp and enjoy
                hot, crispy samosas in minutes.
              </p>
            </div>
            <div className="mt-8">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Learn Our Story
              </button>
            </div>
          </div>

          {/* Image/Stats Side */}
          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Trusted by Thousands
              </h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-orange-500">500+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500">
                    1000+
                  </div>
                  <div className="text-gray-600">Samosas Daily</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500">5⭐</div>
                  <div className="text-gray-600">Average Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500">
                    3 Years
                  </div>
                  <div className="text-gray-600">Serving Quality</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
