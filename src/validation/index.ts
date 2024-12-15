import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(50, "Name should not exceed 50 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits long"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(20, "Password must not exceed 20 characters"),
  confirmPassword: z
    .string()
    .min(6, "Password confirmation is required")
    .max(20, "Password confirmation must not exceed 20 characters"),
})
.refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});



export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});
