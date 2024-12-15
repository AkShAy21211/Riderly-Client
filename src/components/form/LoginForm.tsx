import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { loginSchema } from "../../validation";
import Button from "../button/Button";

type LoginFormValues = z.infer<typeof loginSchema>;
type LoginFormType = {
  onSubmit: (data: LoginFormValues) => void;
};
const LoginForm = ({ onSubmit }: LoginFormType) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-3xl font-bold text-gray-700 text-center mb-6 text-font">
        RIDERLY
      </h2>

      {/* Email Field */}
      <div className="mb-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-600"
        >
          Email
        </label>
        <input
          {...register("email")}
          type="email"
          id="email"
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className="text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Password Field */}
      <div className="mb-2">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-600"
        >
          Password
        </label>
        <input
          type="password"
          autoComplete="true"
          id="password"
          {...register("password")}
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Enter your password"
        />
        {errors.password && (
          <p className="text-xs text-red-500">{errors.password.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300" label="Login" type={"Submit"} />
    </form>
  );
};

export default LoginForm;
