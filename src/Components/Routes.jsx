import { useNavigate } from "react-router-dom"; 
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
export function PrivateRoute({ children }) { 
  let navigate = useNavigate(); 

  useEffect(() => {
    if (!localStorage.getItem("token")) { 
      navigate("/login");
    }
  }, [navigate]);

  return localStorage.getItem("token") ? children : null; 
}

// eslint-disable-next-line react/prop-types
export function PublicRoute({ children }) { 
  let navigate = useNavigate(); 

  useEffect(() => {
    if (localStorage.getItem("token")) { 
      navigate('/');
    }
  }, [navigate]); 


  return !localStorage.getItem("token") ? children : null; 
}
