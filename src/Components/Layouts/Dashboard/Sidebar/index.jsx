/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DarkModeContext, TokenContext } from "@/context";

// components
import { Box, Button, Typography } from "@mui/material";
import { AiOutlineHome } from "react-icons/ai";
import { GoMortarBoard } from "react-icons/go";
import { IoIosRadio } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { LuNewspaper } from "react-icons/lu";
import MiniSidebar from "./MiniSidebar.jsx";
import SideBarLinks from "./SideBarLinks";

// assets
import imgBg from "@/home_profile_assets/profileb-bg.png";
import profile_img from "@/assets/logo.png";
import trade_alert_img from "@/home_profile_assets/BuyAndSell..svg";
import Scanners_img2 from "@/home_profile_assets/scannersPic.svg";
import RecordedSession from "@/assets/video-recording-icon 1.svg";
import Calcicon from "@/assets/calc.svg";

// component
function Sidebar() {
  // config
  // const api = useAPI

  // data
  // methods
  let iconsSidebarRef = useRef(null);
  let {
    sidebarOpen,
    setSidebarOpen,
    userId,
    setUserId,
    setUserImg,
    userFirstName,
    setUserFirstName,
    lastName,
    setLastName,
    setUserEmail,
    setPhone,
  } = useContext(TokenContext);
  let { baseUrl } = useContext(DarkModeContext);

  let navigate = useNavigate();

  let sidebarRef = useRef(null);

  // Adjust sidebar visibility on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close sidebar if clicked outside in mobile view
  useEffect(() => {
    let handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        window.innerWidth <= 700
      ) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setSidebarOpen]);

  let [scannersOpen, setScannersOpen] = useState(false);

  let [links] = useState([
    { name: "Dashboard", path: "/home", icon: <AiOutlineHome /> },
    { name: "Academy", path: "/academy", icon: <GoMortarBoard /> },
    // { name: "Live Session", path: "/sessions", icon: <IoIosRadio /> },
    {
      name: "Recorded  Session",
      path: "/RecordedSessons",
      icon: (
        <img
          src={RecordedSession}
          alt="Custom Logo"
          style={{ width: "20px", height: "20px" }}
        />
      ),
    },
    {
      name: "Calculators",
      path: "/Tools",
      icon: (
        <img
          src={Calcicon}
          alt="Custom Logo"
          style={{ width: "20px", height: "20px" }}
        />
      ),
    },
    {
      name: "Trade Alerts",
      path: "/tradealerts",
      icon: (
        <img
          src={trade_alert_img}
          alt="Custom Logo"
          style={{ width: "20px", height: "20px" }}
        />
      ),
    },
    {
      name: "Scanners",
      icon: (
        <img
          src={Scanners_img2}
          alt="Custom Logo"
          style={{ width: "25px", height: "25px" }}
        />
      ),
    },
    { name: "Calenders", path: "/calender", icon: <SlCalender /> },
    { name: "News", path: "/news", icon: <LuNewspaper /> },
  ]);

  const scannersItems = [
    { name: "Chart", path: "/chart" },
    { name: "Gang", path: "/scanners/1" },
    { name: "Gang pro", path: "/scanners/4" },
    { name: "Rubber band", path: "/scanners/2" },
    { name: "hunter", path: "/scanners/3" },
  ];

  return (
    <>
      <Box
        ref={sidebarRef}
        sx={{
          position: "sticky", // Make sidebar fixed to the viewport
          top: 8, // Position at the top of the screen
          left: 8, // Position at the left of the screen
          zIndex: 99999, // Ensure it's above other content
          width: sidebarOpen ? "260px" : "0", // Control width based on whether sidebar is open
          height: "calc(100dvh - 16px)", // Full height of the viewport
          backgroundColor: "black", // Set background color
          // transform: sidebarOpen ? "translateX(0)" : "translateX(-280px)", // Sliding effect for opening and closing
          transition: "all 0.5s ease-in-out", // Smooth transition effect
          borderRadius: "15px", // Optional rounded corners
          overflow: "hidden", // Hide overflow content
          overflowY: "scroll",
        }}
      >
        {/* Profile Section */}
        <Box
          className="flex items-center justify-center"
          sx={{
            width: "100%",
            height: "100px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            mt: "20px",
          }}
        >
          {/* Sidebar Profile Card */}
          <Box
            className="flex items-center justify-center"
            sx={{
              borderRadius: "15px",
              opacity: "0.9",
              width: "90%",
              height: "100%",
            }}
          >
            <Box
              className="flex items-center"
              sx={{ justifyContent: "space-around", width: "100%" }}
            >
              {/* Profile Image */}
              <Box
                component="img"
                sx={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                src={profile_img}
              />
            </Box>
          </Box>
        </Box>
        {/* Sidebar Links */}
        <SideBarLinks
          links={links}
          scannersItems={scannersItems}
          navigate={navigate}
        />
      </Box>
      {/* Mini Sidebar when closed */}

      <MiniSidebar
        links={links}
        scannersItems={scannersItems}
        sidebarOpen={sidebarOpen}
        setScannersOpen={setScannersOpen}
        scannersOpen={scannersOpen}
      />
    </>
  );
}

export default Sidebar;
