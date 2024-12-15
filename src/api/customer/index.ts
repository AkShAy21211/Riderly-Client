import { LoginFormType, RegisterFormType } from "../../types";
import createAxiosInstance from "../index";
import { customerEndPoint } from "./endpoint";
import { toast } from "sonner";

const axiosInstance = createAxiosInstance();

export const register = async (data: RegisterFormType) => {
  try {
    const response = await axiosInstance.post<{
      success: boolean;
      message: string;
    }>(customerEndPoint.register, data);

    if (response?.data.success) {
      toast.success(response.data.message, {
        duration: 3000,
        position: "top-center",
      });
      return response.data;
    }
  } catch (error: any) {
    if (error.response?.status === 500) {
      toast.error("Internal Server Error", {
        duration: 3000,
        position: "top-center",
      });
    } else {
      toast.error(error.response?.data?.message || "Something went wrong", {
        duration: 3000,
        position: "top-center",
      });
    }
    console.error("Registration Failed", error);
  }
};

export const login = async (data: LoginFormType) => {
  try {
    const response = await axiosInstance.post<{
      success: boolean;
      message: string;
      token: string;
    }>(customerEndPoint.login, data);

    if (response?.data.success) {
      toast.success(response.data.message, {
        duration: 3000,
        position: "top-center",
      });
      return response.data;
    }
  } catch (error: any) {
    if (error.response?.status === 500) {
      toast.error("Internal Server Error", {
        duration: 3000,
        position: "top-center",
      });
    } else {
      toast.error(error.response?.data?.message || "Something went wrong", {
        duration: 3000,
        position: "top-center",
      });
    }
    console.error("Login Failed", error);
  }
};
