import { Navigate } from "react-router-dom";
function ProtectedRoutes({ isAuthenticate = true, children }) {
  if (isAuthenticate) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}

export default ProtectedRoutes;
