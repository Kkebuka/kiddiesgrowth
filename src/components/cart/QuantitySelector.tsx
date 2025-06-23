import { useState } from "react";
export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="flex items-center gap-2">
      <button onClick={decrease} className="btn btn-sm btn-outline btn-error">
        -
      </button>
      <input
        type="number"
        value={quantity}
        readOnly
        className="input input-sm w-16 text-center"
      />
      <button onClick={increase} className="btn btn-sm btn-outline btn-success">
        +
      </button>
    </div>
  );
}
