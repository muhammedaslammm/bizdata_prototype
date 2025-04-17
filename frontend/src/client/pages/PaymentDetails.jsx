import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const PaymentDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const { address, paymentMethod, items, total } = location.state;

  const getPaymentMethodName = (method) => {
    if (method === "cod") return "Cash on Delivery";
    if (method === "bank") return "Bank Transfer";
    if (method === "online") return "Online Payment";
    return method;
  };

  const handlePayment = () => {
    alert("Payment successful!");
    clearCart();

    navigate("/order-summary", {
      state: {
        address,
        paymentMethod,
        items,
        total,
      },
    });
  };

  return (
    <div className="w-[90%] max-w-[1300px] mx-auto py-12 text-slate-800">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-600 underline mb-4"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-6">Payment Details</h1>

      <div className="space-y-6">
        <div className="text-lg">
          <p className="font-semibold">Total:</p>
          <p>{total} AED</p>
        </div>

        <div className="text-lg">
          <p className="font-semibold">Payment Method:</p>
          <p>{getPaymentMethodName(paymentMethod)}</p>
        </div>

        {paymentMethod === "bank" && (
          <div className="mt-4 border p-4 rounded bg-gray-50">
            <h3 className="font-semibold mb-2">Bank Account Details:</h3>
            <p>Bank Name: National Bank</p>
            <p>Account Holder: John Doe</p>
            <p>Account Number: 9876543210</p>
            <p>IFSC Code: NBIN0001234</p>
            <p>Branch: Dubai Main Branch</p>
          </div>
        )}

        <button
          onClick={handlePayment}
          className="mt-6 w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 text-lg"
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentDetails;
