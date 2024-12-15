import { Link } from "react-router-dom";
import authBg from "../../assets/background/auth.png";
import RegisterForm from "../../components/form/RegisterForm";
import { RegisterFormType } from "../../types";
import { register } from "../../api/customer";
import {  Toaster } from "sonner";

const Register = () => {
  // handler for registration form
  const onSubmit = async (data: RegisterFormType) => {
    try {
      await register(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen ">
      {/* Left Section */}
      <div className="hidden md:flex md:w-1/2 items-center bg-primary justify-center ">
        <img
          src={authBg}
          className="h-full w-full object-contain"
          alt="car Background"
        />
      </div>

      {/* Right Section */}
      <div className="flex flex-1 items-center justify-center bg-primary  p-8 md:p-16">
        <div className="w-full flex flex-col max-w-md  shadow-lg rounded-lg p-6 md:p-8 bg-white">
          <RegisterForm onSubmit={onSubmit} />
          <div className="text-gray-400 mt-4 flex justify-between ">
            <Link to={"/login"} className=" text-sm text-blue-500">
              Forgot password
            </Link>
            <Link to={"/login"} className=" text-sm text-blue-500">
              Already have an account?
            </Link>
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default Register;
