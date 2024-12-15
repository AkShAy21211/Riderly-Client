import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

interface GuestRouteProps {
  children: JSX.Element;
}

const GuestRoute: React.FC<GuestRouteProps> = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  // Redirect logged-in users to the home page
  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }
  

  
  return children;
};

export default GuestRoute;
