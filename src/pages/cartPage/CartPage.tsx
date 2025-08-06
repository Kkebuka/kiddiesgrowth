import { useCart } from "../../hooks/useCart";
import { Link } from "react-router-dom";
import OrderSummary from "./components/OrderSummary";
import CartDetails from "./components/CartDetails";

export default function CartPage() {
  const { cart } = useCart();

  console.log(cart);

  const total =
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0) || 0;

  const whatsappMessage = encodeURIComponent(
    `Hello KiddiesGrowth, I'd like to place an order:\n\n${cart
      .map(
        (item) =>
          `•[ID: ${item?.id}] ${item?.name} x${item?.quantity} - ₦${
            item?.price * item?.quantity
          }`
      )
      .join("\n")}\n\nTotal: ₦${total}`
  );
  const link = `https://api.whatsapp.com/send?phone=2348106111383&text=${whatsappMessage}`;
  console.log(cart);

  return (
    <div className="flex flex-col lg:flex-row p-6 lg:justify-between gap-6">
      <div className=" bg-base-200 lg:min-h-96 lg:flex-4/6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
          {cart.length === 0 ? (
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-center font-fredoka">
                Your cart is empty
              </h2>
              <p className="text-center text-gray-500">
                Looks like you haven't added any amazing toys yet. Let's fix
                that!
              </p>
              <div className="flex justify-center">
                <Link
                  to="/shop"
                  className="bg-primary text-base-100 p-3 rounded-md hover:bg-neutral font-fredoka font-semibold"
                >
                  Start Shopping
                </Link>
              </div>
            </div>
          ) : (
            <CartDetails cart={cart} />
          )}
        </div>
      </div>
      <OrderSummary total={total} link={link} />
    </div>
  );
}
