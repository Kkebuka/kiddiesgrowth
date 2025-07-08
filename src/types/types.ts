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
  price: number;
  option?: string;
};
