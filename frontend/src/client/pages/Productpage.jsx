import projectors from "../../data/projectors";

const Productpage = () => {
  const projector = projectors[0];

  return (
    <div className="w-[90%] mx-auto py-10 space-y-16">
      {/* Main Product Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="bg-white shadow-md p-4 rounded-xl">
          <img
            src={projector.image}
            alt={projector.name}
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-2xl font-bold text-gray-900">
            {projector.title}
          </h1>
          <p className="text-xl font-medium text-gray-700">{projector.name}</p>
          <p className="text-gray-600 text-base leading-relaxed">
            {projector.description}
          </p>

          <div className="flex gap-4 items-center">
            <p className="text-2xl text-blue-600 font-semibold">
              ₹{projector.offer_price}
            </p>
            <p className="text-lg line-through text-gray-500">
              ₹{projector.price}
            </p>
          </div>

          <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-lg transition">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="space-y-10">
        {Object.values(projector.specifications).map((section, idx) => (
          <div key={idx}>
            <h2 className="text-xl font-semibold border-b pb-2 mb-4 text-gray-800 capitalize">
              {section.head}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {section.details.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-gray-600 font-medium capitalize">
                    {item.label}
                  </span>
                  <span className="text-gray-800">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productpage;
