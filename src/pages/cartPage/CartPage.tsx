import React from "react";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../../hooks/useCart";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const whatsappMessage = encodeURIComponent(
    `Hello KiddiesGrowth, I'd like to place an order:\n\n${cart
      .map(
        (item) =>
          `•[ID: ${item.id}] ${item.name} x${item.quantity} - ₦${
            item.price * item.quantity
          }`
      )
      .join("\n")}\n\nTotal: ₦${total}`
  );
  const link = `https://api.whatsapp.com/send?phone=2348106111383&text=${whatsappMessage}`;
  console.log(cart);

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>

        {cart.length === 0 ? (
          <div>
            <p className="text-center text-gray-500">
              Looks like you haven't added any amazing toys yet. Let's fix that!
            </p>
            <div className="flex justify-center">
              <Link
                to="/shop"
                className="bg-primary text-base-100 p-3 rounded-md"
              >
                Start Shopping
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-base-100 p-4 rounded-lg shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.src[0]}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-sm text-gray-500">
                        ₦{item.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="join">
                      <button
                        className="join-item btn btn-sm"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>
                      <button className="join-item btn btn-sm btn-ghost">
                        {item.quantity}
                      </button>
                      <button
                        className="join-item btn btn-sm"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="btn btn-sm btn-error text-white"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="divider"></div>

            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Total:</h3>
              <span className="text-xl font-bold text-primary">
                ₦{total.toLocaleString()}
              </span>
            </div>

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success w-full mt-6"
            >
              Checkout on WhatsApp
            </a>
          </>
        )}
      </div>
    </div>
  );
}
