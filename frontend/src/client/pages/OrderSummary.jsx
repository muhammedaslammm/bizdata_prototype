import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { address, paymentMethod, items = [], total } = location.state || {};

  const getPaymentMethodName = (method) => {
    if (method === "cod") return "Cash on Delivery";
    if (method === "bank") return "Bank Transfer";
    if (method === "online") return "Online Payment";
    return method;
  };

  return (
    <div className="w-[90%] max-w-[1300px] mx-auto py-12 space-y-6 text-slate-800">
      <h1 className="text-3xl font-bold border-b pb-4">Order Summary</h1>

      <div className="space-y-6">
        {/* Shipping Address */}
        <div>
          <h2 className="text-xl font-semibold">Shipping Address</h2>
          {address ? (
            <div className="mt-2 space-y-1">
              <p>
                {address.firstName} {address.lastName}
              </p>
              <p>{address.address}</p>
              <p>
                {address.city}, {address.state}
              </p>
              <p>Phone: {address.phone}</p>
            </div>
          ) : (
            <p className="text-red-500">No address provided</p>
          )}
        </div>

        {/* Payment Method */}
        <div>
          <h2 className="text-xl font-semibold">Payment Method</h2>
          <p className="mt-1">{getPaymentMethodName(paymentMethod)}</p>
        </div>

        {/* Items Ordered */}
        <div>
          <h2 className="text-xl font-semibold">Items Ordered</h2>
          {items.length === 0 ? (
            <p className="text-red-500">No items in the order.</p>
          ) : (
            <div className="space-y-4 mt-2">
              {items.map((item) => (
                <div key={item.id} className="border-b pb-2">
                  <p className="font-medium">
                    {item.title} - {item.quantity}x
                  </p>
                  <p className="text-sm text-slate-500">
                    {item.offer_price} AED each
                  </p>
                  <p className="text-sm">
                    Subtotal: {(item.offer_price * item.quantity).toFixed(2)}{" "}
                    AED
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Total Amount */}
        <div className="mt-4 text-xl font-bold">
          <p>Total: {total} AED</p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={() => navigate("/home")}
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
