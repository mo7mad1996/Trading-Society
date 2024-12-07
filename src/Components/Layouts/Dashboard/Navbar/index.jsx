import { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { TokenContext } from "@/context";

// components
import { Box, Typography, Avatar } from "@mui/material";

// assets
import logo from "@/assets/logo.png";
import brand from "@/assets/brand.png";

// components
function Navbar({ user }) {
  const ref = useRef(null);

  // config
  const { sidebarOpen, setSidebarOpen } = useContext(TokenContext);
  const [navBackground, setNavBackground] = useState("transparent");
  const navigate = useNavigate();

  // methods
  const handleScroll = () => {
    if (window.scrollY > 50) setNavBackground("rgba(0, 0, 0, 0.8)");
    else setNavBackground("rgba(0, 0, 0, 1)");
  };
  const sidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // on Component mounted
  useEffect(() => {
    ref.current?.parentElement.addEventListener("scroll", handleScroll);

    return () => {
      ref.current?.parentElement.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  // render
  return (
    <Box
      ref={ref}
      sx={{
        position: "sticky",
        top: 10,
        left: 0,
        backgroundColor: navBackground, // Dynamic background color
        backdropFilter: "blur(10px)", // Glass effect
        WebkitBackdropFilter: "blur(10px)", // Safari support
        height: "80px",
        display: "flex",
        width: "97%",
        margin: "auto",
        maxWidth: "100dvw",
        alignItems: "center",
        borderRadius: "15px",
        zIndex: 1000,
        justifyContent: "space-between",
        // width: sidebarOpen ? "84%" : "99%",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow
        transition: "background-color 0.3s ease", // Smooth transition for background
      }}
    >
      {/* Logo and Brand */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingLeft: "20px",
          cursor: "pointer",
          transition: "transform 0.3s ease",
          gap: { xs: "10px", md: "15px" },
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
        onClick={() => navigate("/")}
      >
        <Avatar
          src={user?.profile_image}
          alt={user?.user_first_name}
          sx={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "#fff",
          }}
        />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "20px",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            {user?.user_first_name} {user?.user_last_name}
          </Typography>
          <Typography sx={{ color: "gray", mt: "-10px", fontSize: "20px" }}>
            ID: {user?.user_id}
          </Typography>
        </Box>
      </Box>

      {/* Sidebar Toggle Icon */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          // position: "absolute",
          // right: "60px",
          gap: { xs: "10px", md: "15px" },
        }}
      >
        <Box
          onClick={sidebarToggle}
          sx={{
            color: "#fff",
            fontSize: { xs: "25px", md: "30px" },
            cursor: "pointer",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
            },
            px: 1,
          }}
        >
          <IoMenu />
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
