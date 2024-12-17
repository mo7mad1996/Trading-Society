import { useSearchParams, useNavigate } from "react-router-dom";
import useApi from "@/api";
import { useContext, useEffect } from "react";
import { TokenContext } from "@/context";
import {} from "react-router-dom";

export default function Redirect() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  let navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("token", token);
    if (token) navigate("/home");
    else navigate("/login");
  }, []);

  return <div>Redirect...</div>;
}
