import { Navigate } from "react-router-dom";

function ProtectedRouter({ children }) {
  // Remove the token check
  return children;
}

export default ProtectedRouter;
