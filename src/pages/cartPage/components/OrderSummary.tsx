import PaystackButton from "../../../components/ui/PaystackButton";

export default function OrderSummary({
  total,
  link,
}: {
  total: number;
  link: string;
}) {
  const shipping = 0;
  return (
    <div className=" lg:flex-2/6">
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
          <h2 className="text-xl font-bold font-fredoka text-gray-800 mb-4">
            Order Summary
          </h2>

          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-semibold text-gray-800">
                ₦{total.toFixed(2)}
              </span>
            </div>

            {/* {savings > 0 && (
                <div className="flex justify-between text-sm text-green-600 font-medium">
                  <span>You saved</span>
                  <span>-₦{savings.toFixed(2)}</span>
                </div>
              )} */}

            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Shipping</span>
              <span className="font-semibold text-gray-800">
                {shipping === 0 ? "FREE" : `₦${shipping}`}
              </span>
            </div>

            {shipping > 0 && (
              <p className="text-xs text-gray-400">
                Free shipping on orders over ₦50,000
              </p>
            )}

            <div className="divider my-2"></div>

            <div className="flex justify-between items-center">
              <span className="font-bold font-fredoka text-lg">Total</span>
              <span className="text-2xl font-bold text-primary">
                ₦{total.toFixed(2)}
              </span>
            </div>
          </div>

          <button className="btn btn-primary w-full mt-6 text-lg font-semibold shadow-md hover:shadow-lg transition-all">
            Checkout Securely
          </button>
          <PaystackButton
            amount={4000}
            metadata={{
              custom_fields: [
                {
                  display_name: "Customer Name",
                  variable_name: "customer_name",
                  value: "John Doe",
                },
              ],
            }}
          />
          <div className="text-center">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success w-full mt-6  text-lg font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Checkout on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
