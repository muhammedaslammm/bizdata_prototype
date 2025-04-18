import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Address from "../components/Address";
import PaymentMethod from "../components/PaymentMethod";

const OrderSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderSuccessful = true;
  const { address, paymentMethod, items = [], total } = location.state || {};

  return (
    <div className="w-[90%]  mx-auto my-4 space-y-6 text-neutral-800">
      {orderSuccessful ? (
        <div className="flex justify-between items-baseline text-green-800 bg-green-200 p-8 rounded-[.5rem]">
          <h2 className=" capitalize text-[3rem] font-semibold">
            order successfully placed
          </h2>
          <button
            onClick={() => navigate("/home")}
            className="capitalize text-green-800 text-[1.5rem] font-semibold rounded-[.2rem] underline cursor-pointer hover:text-green-700"
          >
            take me to home page, let's shop again
          </button>
        </div>
      ) : (
        <h2>order failed</h2>
      )}

      <div className="space-y-6">
        {/* Shipping Address */}
        <Address address={address} />

        {/* Payment Method */}
        <div className="flex gap-4 items-stretch">
          <div className="w-10/12">
            <PaymentMethod method={paymentMethod} />
          </div>

          <div className="bg-green-700 text-white p-6 rounded-[.5rem] w-2/12">
            <p className="text-[1.5rem] flex flex-col text-end">
              Payment Total:{" "}
              <span className="font-semibold text-[2rem]">
                Rs {total.toFixed(2)}
              </span>
            </p>
          </div>
        </div>

        {/* Items Ordered */}
        <div className="bg-white p-6 border border-neutral-300 rounded-[.5rem] space-y-4">
          <h2 className="text-[1.7rem] font-semibold">Items Ordered</h2>

          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="space-y-1 py-5 px-2 border-b border-neutral-300 last:border-0 flex justify-between items-center"
              >
                <div className="left">
                  <p className="font-medium text-[1.6rem]">
                    {item.title} - {item.quantity}x
                  </p>
                  <p className="text-[1.5rem]">
                    Subtotal: {(item.offer_price * item.quantity).toFixed(2)}{" "}
                    AED
                  </p>
                </div>
                <div className="right">
                  <div className="image w-[5.5rem]">
                    <img src={item.image} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
