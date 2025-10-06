import Image from "next/image";

export default function FeaturedMenu() {
  const featuredItems = [
    {
      id: 1,
      name: "Classic Potato Samosa",
      price: "$2.99",
      description: "Traditional spiced potato filling with peas and herbs",
      image: "/1.png",
    },
    {
      id: 2,
      name: "Chicken Keema Samosa",
      price: "$3.49",
      description: "Seasoned ground chicken with aromatic spices",
      image: "/2.png",
    },
    {
      id: 3,
      name: "Paneer & Spinach",
      price: "$3.29",
      description: "Fresh cottage cheese with spinach and Indian spices",
      image: "/3.png",
    },
    {
      id: 4,
      name: "Lamb & Mint",
      price: "$3.99",
      description: "Tender lamb with fresh mint and traditional seasonings",
      image: "/4.png",
    },
    {
      id: 5,
      name: "Vegetable Medley",
      price: "$2.79",
      description: "Mixed vegetables with traditional Indian spices",
      image: "/5.png",
    },
    {
      id: 6,
      name: "Cheese & Chili",
      price: "$3.19",
      description: "Spicy cheese filling with green chilies",
      image: "/6.png",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Featured <span className="text-orange-500">Samosas</span>
          </h2>
          <p className="text-xl text-gray-600">
            Handcrafted daily with authentic recipes and fresh ingredients
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image Container - FIXED */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Price Overlay */}
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full font-bold text-lg shadow-lg">
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
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Menu CTA */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}
