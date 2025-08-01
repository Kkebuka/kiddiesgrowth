import { FaTrash } from "react-icons/fa";
import { useCart } from "../../../hooks/useCart";
import type { CartItemType } from "../../../types/types";

export default function CartDetails(cart: CartItemType[]) {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
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

      {/* <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-success w-full mt-6"
      >
        Checkout on WhatsApp
      </a> */}
    </>
  );
}
