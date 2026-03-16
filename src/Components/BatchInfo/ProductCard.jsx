import React, { useState } from "react";
import { toast } from "react-toastify";

// Sample product data
const productData = Array.from({ length: 26 }, (_, i) => ({
  id: i + 1,
  name: `Student ${i + 1}`,
  description: "Crossing hardwood comfort with off-court flair. '80s-inspired construction, bold details, and nothin'-but-net style.",
  price: (69.99 + i * 5).toFixed(2), // Price increases by $5 for each product
  imageUrl: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=600&q=80",
}));

const ProductCard = () => {
  const [sentRequests, setSentRequests] = useState([]); // To keep track of the sent requests

  const handleRequestClick = (productId) => {
    // If the request has already been sent for the product
    if (sentRequests.includes(productId)) {
      toast.info("Request already sent 🔄");
      return;
    }

    // Show toast when the request is sent
    toast.success("Request Sent ✅");

    // Update the button text and mark the request as sent
    setSentRequests([...sentRequests, productId]);
  };

  return (
    <div className="p-10 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productData.map((product) => (
          <div
            key={product.id}
            className="max-w-xs mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
          >
            {/* Image */}
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-56 object-cover"
            />

            {/* Card Content */}
            <div className="p-4">
              {/* Product Name */}
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mt-2">{product.description}</p>

              {/* Price and Request Sent Button */}
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold text-gray-800">${product.price}</span>
                <button
                  onClick={() => handleRequestClick(product.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    sentRequests.includes(product.id)
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-purple-600 text-white hover:bg-purple-700"
                  }`}
                >
                  {sentRequests.includes(product.id) ? "✔ Request Sent" : "Send Request"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;