// utils/cloudinary.ts
export const getOptimizedImage = (
  originalUrl: string,
  options = "f_auto,q_auto,w_500,h_500,c_fill"
): string => {
  if (!originalUrl.includes("/upload/")) return originalUrl;

  return originalUrl.replace("/upload/", `/upload/${options}/`);
};
