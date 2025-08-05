const customers = [
  "L'artisant du regard",
  "Forum éclairage",
  "Stone kid's",
  "Scm Oximed Pantin",
  "Okam santé rosny sous bois",
  "Boutique onze",
  "Silver store",
  "L2N pharma",
];

export default function CustomerSection() {
  return (
    <section className="py-16 relative">
      <div
        className="absolute inset-0 z-0 object-contain"
        style={{
          backgroundImage: "url('/imgGnb/client.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          // opacity: 0.15
        }}
      />

      <div className="container mx-auto px-2 relative z-10">
        <h2 className="customer-title text-center mb-12 text-3xl font-bold text-white drop-shadow-lg">
          Ils nous font confiance
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {customers.map((customer, index) => (
            <div
              key={index}
              className="testimonial bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 opacity-90"
            >
              <h3 className="text-lg font-semibold text-center">{customer}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
