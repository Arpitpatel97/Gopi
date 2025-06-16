// Placeorder.jsx
import React, { useState, useContext } from "react";
import Title from "../Components/Title";
import CartTotal from "../Components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../Context/ShopContext";
import axios from "axios";

const Placeorder = () => {
  const [method, setMethod] = useState("cod");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
  });

  const { cartItems, products, currency, getCartAmount, navigate } =
    useContext(ShopContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async () => {
    const items = [];
    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        if (cartItems[productId][size] > 0) {
          const product = products.find((p) => p._id === productId);
          if (!product) continue;

          items.push({
            _id: productId,
            name: product.name,
            image: product.image[0],
            price: product.price,
            size,
            quantity: cartItems[productId][size],
          });
        }
      }
    }

    const orderData = {
      items,
      totalAmount: getCartAmount(),
      paymentMethod: method,
      deliveryInfo: formData,
    };
    console.log("Order Data:", orderData);

    try {
      await axios.post("http://localhost:3000/api/placeOrder", orderData);
      console.log("Order placed successfully");
      console.log("Order Data:", orderData);
      navigate("/orders");
    } catch (err) {
      console.error("Error placing order:", err);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between pt-5 sm:pt-14 min-h-[80vh] border-t gap-10">
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            name="firstName"
            onChange={handleChange}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First Name"
          />
          <input
            name="lastName"
            onChange={handleChange}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          name="email"
          onChange={handleChange}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Email"
        />
        <input
          name="street"
          onChange={handleChange}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            name="city"
            onChange={handleChange}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="City"
          />
          <input
            name="state"
            onChange={handleChange}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            name="zipcode"
            onChange={handleChange}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Zipcode"
          />
          <input
            name="country"
            onChange={handleChange}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Country"
          />
        </div>
      </div>

      <div className="flex flex-col gap-8 w-full sm:max-w-[400px]">
        <CartTotal />
        <div>
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex gap-3 flex-col lg:flex-row mt-4">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border p-3 cursor-pointer rounded"
            >
              <p
                className={`w-4 h-4 border rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img
                className="h-5 object-contain"
                src={assets.stripe_logo}
                alt="Stripe"
              />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p-3 cursor-pointer rounded"
            >
              <p
                className={`w-4 h-4 border rounded-full ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img
                className="h-5 object-contain"
                src={assets.razorpay_logo}
                alt="Razorpay"
              />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-3 cursor-pointer rounded"
            >
              <p
                className={`w-4 h-4 border rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium">
                Cash on Delivery
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button
              onClick={handlePlaceOrder}
              className="bg-black text-white px-16 py-3 text-sm"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placeorder;
