import { Link, useNavigate } from "react-router-dom";
import authBg from "../../assets/background/auth.png";
import LoginForm from "../../components/form/LoginForm";
import { LoginFormType } from "../../types";
import { login } from "../../api/customer";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);

  // handler for login form
  const onSubmit = async (data: LoginFormType) => {
    try {
      const response = await login(data);
      if (response?.success) {
        loginUser(response?.token);
        navigate("/home", {
          replace: true,
        });
      }
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
          <LoginForm onSubmit={onSubmit} />
          <div className="text-gray-400 mt-4 flex justify-between ">
            <Link to={"/login"} className=" text-sm text-blue-500">
              Forgot password
            </Link>
            <Link to={"/register"} className=" text-sm text-blue-500">
              Don't have an account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
