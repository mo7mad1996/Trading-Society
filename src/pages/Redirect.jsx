import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Redirect() {
  const [searchParams] = useSearchParams();
  const token = decodeURI(searchParams.get("token"));

  let navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("token", token);
    if (token) navigate("/home");
    else navigate("/login");
    // getUserInfo();
  }, []);

  return <div>Loading...</div>;
}
