import React, { useState } from "react";
import { useCart } from "../api/ContextApi";
import { Navigate, useNavigate } from "react-router-dom";

const CartPage = () => {

  const { products, getCartItem, setProducts } = useCart();
  const navigate = useNavigate();

  // console.log(products);

  const total = Number(products.reduce((acc, curItem) => acc + (curItem.price * curItem.quantity), 0).toFixed(2));

  const taxcal = Number((total * 0.02).toFixed(2));
  const grandTotal = Number((total + taxcal).toFixed(2));

  const removeFunc = (id) => {
    let filterItem = products.filter((item) => item.id != id)
    setProducts(filterItem)
  }

const handleQuantityChange = (id, quantity) => {
  setProducts(prev =>
    prev.map(item =>
      item.id === id
        ? { ...item, quantity }
        : item
    )
  );
};


  return (
    <>
      <div className="flex flex-col md:flex-row py-16 max-w-6xl w-full px-6 mx-auto">

        <div className="flex-1 max-w-4xl">
          <h1 className="text-3xl font-medium mb-6">
            Shopping Cart
            <span className="text-sm text-indigo-500">
              {products.length} Items
            </span>
          </h1>

          <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
            <p className="text-left">Product Details</p>
            <p className="text-center">Subtotal</p>
            <p className="text-center">Action</p>
          </div>

          {products.map((product, index) => (
            <div
              key={product.id}
              className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium pt-3"
            >
              <div className="flex items-center md:gap-6 gap-3">
                <div className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-300 rounded overflow-hidden">
                  <img
                    className="max-w-full h-full object-cover"
                    src={product.thumbnail}
                    alt={product.title}
                  />
                </div>

                <div>
                  <p className="hidden md:block font-semibold">
                    {product.title}
                  </p>

                  <div className="font-normal text-gray-500/70">
                    <p>
                      Price: <span>{product.price}</span>
                    </p>

                    {/* quantity */}
                    <div className="flex items-center">
                      <p>Qty:</p>
                      <select className='outline-none'
                      value={product.quantity}
                      onChange={(e)=>handleQuantityChange(product.id,Number(e.target.value))}
                      >
                        {Array(5).fill('').map((_, index) => (
                          <option key={index} value={index + 1}>{index + 1}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* subtotal of one item */}
              <p className="text-center">
                {product.price * product.quantity}
              </p>

              <button className="cursor-pointer mx-auto" onClick={() => removeFunc(product.id)}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"

                >
                  <path
                    d="m12.5 7.5-5 5m0-5 5 5m5.833-2.5a8.333 8.333 0 1 1-16.667 0 8.333 8.333 0 0 1 16.667 0"
                    stroke="#FF532E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          ))}

          <button className="group cursor-pointer flex items-center mt-8 gap-2 text-indigo-500 font-medium" 
          onClick={()=>navigate(-1)}>
            <svg
              width="15"
              height="11"
              viewBox="0 0 15 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.09 5.5H1M6.143 10 1 5.5 6.143 1"
                stroke="#615fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            Continue Shopping
          </button>
        </div>

        <div className="max-w-90 w-full bg-gray-100/40 p-5 max-md:mt-16 border border-gray-300/70">
          <h2 className="text-xl md:text-xl font-medium">
            Order Summary
          </h2>

          <hr className="border-gray-300 my-5" />

          <div className="mb-6">
            <p className="text-sm font-medium uppercase mt-6">
              Payment Method
            </p>

            <select className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none">
              <option value="COD">Cash On Delivery</option>
              <option value="Online">Online Payment</option>
            </select>
          </div>

          <hr className="border-gray-300" />

          <div className="text-gray-500 mt-4 space-y-2">
            <p className="flex justify-between">
              <span>Price</span>
              <span>
                {total}
              </span>
            </p>

            <p className="flex justify-between">
              <span>Shipping Fee</span>
              <span className="text-green-600">Free</span>
            </p>

            <p className="flex justify-between">
              <span>Tax (2%)</span>
              <span> {taxcal} </span>
            </p>

            <p className="flex justify-between text-lg font-medium mt-3">
              <span>Total Amount:</span>
              <span>{grandTotal}</span>
            </p>
          </div>

          <button className="w-full py-3 mt-6 cursor-pointer bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition">
            Place Order
          </button>
        </div>

      </div>
    </>
  );
};

export default CartPage;