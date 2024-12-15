import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { registerSchema } from "../../validation";
import Button from "../button/Button";

type RegisterFormValues = z.infer<typeof registerSchema>;
type RegistrationFormType = {
  onSubmit: (data: RegisterFormValues) => void;
};
const RegisterForm = ({ onSubmit }: RegistrationFormType) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-3xl font-bold text-gray-700 text-center mb-6 text-font">
        RIDERLY
      </h2>

      {/* Name Field */}
      <div className="mb-2">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-600"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Enter your name"
        />
        {errors.name && (
          <p className="text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

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

      {/* Phone Field */}
      <div className="mb-2">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-600"
        >
          Phone
        </label>
        <input
          type="tel"
          {...register("phone")}
          id="phone"
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Enter your phone number"
        />
        {errors.phone && (
          <p className="text-xs text-red-500">{errors.phone.message}</p>
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

      {/* Confirm Password Field */}
      <div className="mb-2">
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-600"
        >
          Confirm Password
        </label>
        <input
          autoComplete="true"
          type="password"
          id="confirmPassword"
          {...register("confirmPassword")}
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Confirm your password"
        />

        {errors.confirmPassword && (
          <p className="text-xs text-red-500">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300" label="Register" onClick={() => {}} type={"submit"} />
    </form>
  );
};

export default RegisterForm;
