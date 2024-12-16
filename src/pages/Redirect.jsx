import { useSearchParams } from "react-router-dom";
import useApi from "@/api";
import { useContext, useEffect } from "react";
import { TokenContext } from "@/context";
import { useNavigate } from "react-router-dom";

export default function Redirect() {
  const [token] = useSearchParams();
  // const api = useApi();

  const { setUser } = useContext(TokenContext);
  let navigate = useNavigate();

  // const getUserInfo = async () => {
  //   try {
  //     const res = await api.get("/user");
  //     const data = res.data.user;

  //     setUser(data);
  //   } catch (err) {
  //     navigate("/login");
  //   }
  // };

  useEffect(() => {
    localStorage.setItem("token", token);

    if (token) navigate("/home");
    else navigate("/login");
    // getUserInfo();
  }, []);

  return <div>Loading...</div>;
}
