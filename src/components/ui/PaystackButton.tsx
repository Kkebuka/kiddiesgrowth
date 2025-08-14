import { showInfo, showSuccess } from "../../utils/toast";

const PaystackButton = ({ amount, metadata }) => {
  const paystack = import.meta.env.VITE_PAYSTACK_TESTKEY;
  // Remember you are going to install paystack via npm and remove script from index file
  const email = "ronkecyn@gmail.com";
  const payWithPaystack = () => {
    const handler = window.PaystackPop.setup({
      key: paystack, // Replace with your Paystack PUBLIC key
      email,
      amount: amount * 100, // Paystack uses kobo, so multiply by 100
      currency: "NGN",
      ref: "" + Math.floor(Math.random() * 1000000000 + 1), // unique reference
      metadata: metadata || {},
      callback: function (response) {
        alert("Payment complete! Reference: " + response.reference);
        // TODO: call backend to verify payment here
      },
      onClose: function () {
        alert("Transaction was not completed, window closed.");
      },
    });
    handler.openIframe();
  };

  const handleClick = () => {
    showInfo("Login in to use Paystack");
  };

  return (
    <button
      //   onClick={payWithPaystack}
      onClick={handleClick}
      className="btn btn-primary w-full mt-6 text-lg font-semibold shadow-md hover:shadow-lg transition-all"
    >
      Checkout with Paystack
    </button>
  );
};

export default PaystackButton;
