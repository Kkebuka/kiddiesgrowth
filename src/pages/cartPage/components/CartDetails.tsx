import { FaTrash } from "react-icons/fa";
import { useCart } from "../../../hooks/useCart";
import type { CartItemType } from "../../../types/types";
import PriceTag from "../../../components/ui/PriceTag";

type CartDetailsProps = {
  cart: CartItemType[];
};

export default function CartDetails({ cart }: CartDetailsProps) {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const cartNumber = cart.length;
  return (
    <>
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold text-center font-fredoka">
          Cart Details({cartNumber})
        </h2>
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
                <h3 className="font-semibold text-lg font-fredoka">
                  {item.name}
                </h3>
                <PriceTag amount={item.price} color="text-primary" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="join">
                <button
                  className="join-item btn btn-sm shadow-md"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>
                <button className="join-item btn btn-sm btn-ghost">
                  {item.quantity}
                </button>
                <button
                  className="join-item btn btn-sm shadow-md"
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
    </>
  );
}
