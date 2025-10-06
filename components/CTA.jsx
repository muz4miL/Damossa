export default function ContactCTA() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Order? <span className="text-orange-500">We're Here!</span>
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Get fresh, hot samosas delivered to your door. Order via WhatsApp for
          the fastest service!
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="text-3xl mb-4">📞</div>
            <h3 className="font-semibold mb-2">Call or WhatsApp</h3>
            <p className="text-orange-400">+1 (555) 123-4567</p>
          </div>
          <div>
            <div className="text-3xl mb-4">📍</div>
            <h3 className="font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-300">
              123 Food Street
              <br />
              Your City, State
            </p>
          </div>
          <div>
            <div className="text-3xl mb-4">🕒</div>
            <h3 className="font-semibold mb-2">Hours</h3>
            <p className="text-gray-300">Daily: 9AM - 9PM</p>
          </div>
        </div>

        <div className="space-x-4">
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            📱 Order via WhatsApp
          </button>
          <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            📞 Call Now
          </button>
        </div>
      </div>
    </section>
  );
}
