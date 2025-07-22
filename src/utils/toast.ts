// utils/toast.ts
import { toast } from "react-toastify";

export const showSuccess = (msg: string) => {
  toast.dismiss();
  toast.success(msg);
};
export const showError = (msg: string) => {
  toast.dismiss();
  toast.error(msg);
};
export const showInfo = (msg: string) => toast.info(msg);
export const showWarning = (msg: string) => toast.warn(msg);
