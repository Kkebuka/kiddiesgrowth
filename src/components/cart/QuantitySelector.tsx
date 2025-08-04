type QuantitySelectorProps = {
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  quantity: number;
};

export default function QuantitySelector({
  setQuantity,
  quantity,
}: QuantitySelectorProps) {
  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="flex gap-4 items-center">
      <div>
        <h4 className="card-title  sm:text-xl  text-gray-500 lg:text-base ">
          Quantity:{" "}
        </h4>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={decrease} className="btn btn-sm btn-outline btn-error">
          -
        </button>
        <input
          name="quantity"
          type="number"
          value={quantity}
          readOnly
          className="input input-sm w-16 text-center"
        />
        <button
          onClick={increase}
          className="btn btn-sm btn-outline btn-success"
        >
          +
        </button>
      </div>
    </div>
  );
}
