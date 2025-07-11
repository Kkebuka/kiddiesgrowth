// export type CategoryType = {
//   id: number;
//   name: string;
//   productCount: number;
//   image: string;
// };

export type CategoryProps = {
  id?: number;
  name: string;
  image: string;
  productCount?: number; // optional
};

export type ProductType = {
  id: number;
  src: string;
  category: string;
  name: string;
  description?: string;
  offer?: number;
  price: number;
  option?: string;
};

export type CartItemType = ProductType & {
  quantity: number;
};

export type OrderType = {
  id: string;
  customer: string;
  date: string;
  total: number;
  status: "pending" | "shipped" | "delivered" | "cancelled";
};
