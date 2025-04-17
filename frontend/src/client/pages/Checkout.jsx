import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [addressSaved, setAddressSaved] = useState(true);
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [payment, setPayment] = useState("bank");

  const navigate = useNavigate();
  const subtotal = getCartTotal();

  const validateForm = () => {
    let newErrors = {};
    if (!address.firstName.trim())
      newErrors.firstName = "First name is required.";
    if (!address.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!address.address.trim()) newErrors.address = "Address is required.";
    if (!address.city.trim()) newErrors.city = "City is required.";
    if (!address.state.trim()) newErrors.state = "State is required.";
    if (!address.phone.trim()) {
      newErrors.phone = "Phone is required.";
    } else if (!/^\d{10}$/.test(address.phone.trim())) {
      newErrors.phone = "Phone must be a 10-digit number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = () => {
    if (!addressSaved && showNewAddressForm) {
      if (!validateForm()) return;
    }

    const orderData = {
      address,
      paymentMethod: payment,
      items: cartItems,
      total: subtotal,
    };

    if (payment === "cod") {
      alert("Order placed successfully!");
      clearCart();
      navigate("/order-summary", { state: orderData });
    } else {
      navigate("/payment-details", { state: orderData }); // ✅ Pass items here too
    }
  };

  return (
    <div className="w-[90%] max-w-[1300px] mx-auto py-12 grid grid-cols-1 lg:grid-cols-3 gap-10 text-slate-800">
      <div className="lg:col-span-2 space-y-10">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 text-blue-600 underline text-sm hover:text-blue-800"
        >
          ← Back
        </button>
        <h1 className="text-3xl font-bold border-b pb-4">Checkout</h1>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Billing address</h2>
          {addressSaved && !showNewAddressForm ? (
            <div className="border p-4 rounded bg-white">
              <p className="mb-2">
                <strong>John Doe</strong>
                <br />
                Dubai, United Arab Emirates
                <br />
                Phone: +971 50 123 4567
              </p>
              <button
                className="text-blue-600 underline text-sm"
                onClick={() => {
                  setShowNewAddressForm(true);
                  setAddressSaved(false);
                }}
              >
                Use a different address
              </button>
            </div>
          ) : (
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-4 rounded border">
              <div>
                <input
                  type="text"
                  placeholder="First name"
                  value={address.firstName}
                  onChange={(e) =>
                    setAddress({ ...address, firstName: e.target.value })
                  }
                  className="border p-2 rounded w-full"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Last name"
                  value={address.lastName}
                  onChange={(e) =>
                    setAddress({ ...address, lastName: e.target.value })
                  }
                  className="border p-2 rounded w-full"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>

              <div className="col-span-2">
                <input
                  type="text"
                  placeholder="Address"
                  value={address.address}
                  onChange={(e) =>
                    setAddress({ ...address, address: e.target.value })
                  }
                  className="border p-2 rounded w-full"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm">{errors.address}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="City"
                  value={address.city}
                  onChange={(e) =>
                    setAddress({ ...address, city: e.target.value })
                  }
                  className="border p-2 rounded w-full"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="State"
                  value={address.state}
                  onChange={(e) =>
                    setAddress({ ...address, state: e.target.value })
                  }
                  className="border p-2 rounded w-full"
                />
                {errors.state && (
                  <p className="text-red-500 text-sm">{errors.state}</p>
                )}
              </div>

              <div className="col-span-2">
                <input
                  type="text"
                  placeholder="Phone (10 digits)"
                  value={address.phone}
                  onChange={(e) =>
                    setAddress({ ...address, phone: e.target.value })
                  }
                  className="border p-2 rounded w-full"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
            </form>
          )}
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Payment options</h2>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={payment === "bank"}
                onChange={() => setPayment("bank")}
              />
              Direct bank transfer
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={payment === "online"}
                onChange={() => setPayment("online")}
              />
              Online payment
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={payment === "cod"}
                onChange={() => setPayment("cod")}
              />
              Cash on delivery
            </label>
          </div>
        </div>

        <button
          onClick={handlePlaceOrder}
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 text-lg"
        >
          {payment === "cod" ? "Place Order" : "Proceed to Payment"}
        </button>
      </div>

      <div className="border p-6 rounded bg-white shadow-md space-y-4">
        <h2 className="text-xl font-semibold border-b pb-2">Order Summary</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="text-sm border-b pb-3">
            <p className="font-medium">
              {item.title} ({item.quantity}x)
            </p>
            <p className="text-slate-600">{item.name}</p>
            <p className="text-blue-600">{item.offer_price} AED</p>
          </div>
        ))}
        <div className="flex justify-between font-semibold pt-4 border-t">
          <span>Total</span>
          <span>{subtotal.toFixed(2)} AED</span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
