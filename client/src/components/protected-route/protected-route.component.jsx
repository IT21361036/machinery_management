import { useContext } from "react";
import { TokenContext } from "../../context/TokenContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(TokenContext);
  // if (!token) {
  //   return <Navigate to="/login" replace />;
  // }

  return children;
};

export default ProtectedRoute;
