import { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useApi from "@/api";

// components
import TradingLoader from "@/Components/Loaders/TradingLoader/index.jsx";
import { Box } from "@mui/material";
import Sidebar from "@/Components/Layouts/Dashboard/Sidebar/index.jsx";
import Navbar from "@/Components/Layouts/Dashboard/Navbar/index.jsx";
// import FooterProfile from "./FooterProfile.jsx";
import BottomNavbar from "./BottomNavbar.jsx";
import { LoadingContext, TokenContext } from "@/context";

// component
function Dashboard() {
  // config
  let { isLoading } = useContext(LoadingContext);
  let { sidebarOpen } = useContext(TokenContext);
  const api = useApi();
  let navigate = useNavigate();

  // data
  const [user, setUser] = useState(null);

  // methods
  const getUserData = async () => {
    try {
      const res = await api.get("/user");
      const data = res.data.user;

      setUser(data);
    } catch (err) {
      console.error(err);
      navigate("/login");
    }
  };

  // on Layout render
  useEffect(() => {
    getUserData();
  }, []);

  // render
  if (isLoading) return <TradingLoader />;
  return (
    <Box
      className=""
      sx={{
        display: "flex",
        overflow: "hidden",
        gap: "5px",
        height: "100dvh",
        width: "auto",
      }}
    >
      {/* Sidebar */}
      <Sidebar />

      <Box sx={{ flex: 1, maxWidth: "100dvw", overflow: "auto" }}>
        <Navbar user={user} />

        {/* page contenxt */}
        <Box sx={{ p: "30px", m: 0, minHeight: "100dvh" }}>
          <Outlet />
        </Box>
        {/* <FooterProfile /> */}
      </Box>

      {/* for mobile view */}
      {!sidebarOpen && <BottomNavbar />}
    </Box>
  );
}

export default Dashboard;
