export type CategoryType = {
  id: number;
  name: string;
  productCount: number;
  image: string;
};

export type Props = {
  name: string;
  image: string;
  productCount?: number; // optional
};
