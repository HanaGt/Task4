import { ToastOptions, toast } from "react-toastify";

export const toastConfig: ToastOptions = {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

export const SuccessToast = (message: string): void => {
  toast.success(message, toastConfig);
};