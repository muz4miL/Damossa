import Image from "next/image";

export default function FeaturedMenu() {
  const featuredItems = [
    {
      id: 1,
      name: "Aloo'd Up",
      price: "Rs. 60/-",
      description:
        "Chicken & Potato Damosa - A perfect blend of spiced chicken and potato",
      image: "/samosa-alood-up.jpg",
    },
    {
      id: 2,
      name: "Emotional Cheese",
      price: "Rs. 120/-",
      description:
        "Chicken & Cheese Damosa - Melted cheese with seasoned chicken",
      image: "/samosa-emotional-cheese.jpg",
    },
    {
      id: 3,
      name: "Moocheeze",
      price: "Rs. 50/-",
      description:
        "Mood + Cheese Damosa - Colorful cheese blend that matches your mood",
      image: "/samosa-moocheeze.jpg",
    },
    {
      id: 4,
      name: "Pookie Damosa",
      price: "Rs. 50/-",
      description:
        "Nutella Inside - Sweet dessert samosa with rich chocolate filling",
      image: "/samosa-pookie-damosa.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Featured <span className="text-orange-500">Damosas</span>
          </h2>
          <p className="text-xl text-gray-600">
            Handcrafted daily with authentic recipes and creative personalities
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300 p-2"
                />
                {/* Price Overlay */}
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full font-bold text-sm shadow-lg">
                  {item.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  View in Menu
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Menu CTA */}
        <div className="text-center mt-12">
          <a
            href="/menu"
            className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
