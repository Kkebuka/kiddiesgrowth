import React from "react";

const PaystackButton = ({ amount, metadata }) => {
  const paystack = import.meta.env.PayStack_test_PublicKey;
  console.log(import.meta.env.PayStack_test_PublicKey, "working");
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

  return (
    <button
      onClick={payWithPaystack}
      className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow"
    >
      Pay Now
    </button>
  );
};

export default PaystackButton;
