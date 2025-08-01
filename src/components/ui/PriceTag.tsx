import React from "react";

type PriceTagProps = {
  amount: number;
  size?: "sm" | "md" | "lg";
  color?: "text-gray-800" | "text-primary";
};

const sizeClassMap = {
  sm: "text-base",
  md: "text-xl",
  lg: "text-2xl",
};

export default function PriceTag({
  amount,
  size = "md",
  color = "text-gray-800",
}: PriceTagProps) {
  return (
    <h2 className={`${sizeClassMap[size]} font-semibold ${color} font-fredoka`}>
      ₦{amount.toLocaleString()}
    </h2>
  );
}
