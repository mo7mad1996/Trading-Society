import React, { useState } from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { AiOutlineHome } from "react-icons/ai";
import { GoMortarBoard } from "react-icons/go";
import { IoIosRadio } from "react-icons/io";
import Scanners_img2 from "@/home_profile_assets/scannersPic.svg";
import { Link, useNavigate } from "react-router-dom";

import TA from "@/home_profile_assets/BuyAndSell..svg";

const BottomNavbar = () => {
  const scannersItems = [
    { name: "Gang", path: "/scanners/1" },
    { name: "Gang Pro", path: "/scanners/2" },
    { name: "Rubber Band", path: "/scanners/3" },
    { name: "Hunter", path: "/scanners/4" },
  ];

  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const [scannersOpen, setScannerOpen] = useState(false);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#000",
        padding: "10px 0",
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.3)",
        display: { xs: "flex", md: "none" },
        justifyContent: "center",
        zIndex: 10,
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "inherit",
          color: "#fff",
        }}
      >
        <BottomNavigationAction
          icon={<AiOutlineHome size={24} />}
          sx={{
            position: "relative",
            color: "#fff",
            "&:hover": { color: "#ecbc56" },
            "&::before": {
              content: '""',
              position: "absolute",
              top: "50%",
              left: "50%",
              width: value === 0 ? "40px" : "0",
              height: value === 0 ? "40px" : "0",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              transition: "all 0.3s ease-in-out",
              zIndex: -1,
            },
          }}
          onClick={() => navigate("/home")}
        />

        <BottomNavigationAction
          icon={<GoMortarBoard size={24} />}
          sx={{
            position: "relative",
            color: "#fff",
            "&:hover": { color: "#ff0000" },
            "&::before": {
              content: '""',
              position: "absolute",
              top: "50%",
              left: "50%",
              width: value === 1 ? "40px" : "0",
              height: value === 1 ? "40px" : "0",
              backgroundColor: "#66FCF1",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              transition: "all 0.3s ease-in-out",
              zIndex: -1,
            },
          }}
          onClick={() => navigate("/academy")}
        />
        <BottomNavigationAction
          icon={
            <img
              src={TA}
              alt="Trade Alerts"
              style={{ width: "25px", height: "25px" }}
            />
          }
          sx={{
            position: "relative",
            color: "#fff",
            "&:hover": { color: "#ff0000" },
            "&::before": {
              content: '""',
              position: "absolute",
              top: "50%",
              left: "50%",
              width: value === 1 ? "40px" : "0",
              height: value === 1 ? "40px" : "0",
              backgroundColor: "#66FCF1",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              transition: "all 0.3s ease-in-out",
              zIndex: -1,
            },
          }}
          onClick={() => navigate("/tradealerts")}
        />
        {/* 
        <BottomNavigationAction
          icon={<IoIosRadio size={24} />}
          sx={{
            position: "relative",
            color: "#fff",
            "&:hover": { color: "#ecbc56" },
            "&::before": {
              content: '""',
              position: "absolute",
              top: "50%",
              left: "50%",
              width: value === 2 ? "40px" : "0",
              height: value === 2 ? "40px" : "0",
              backgroundColor: "#66FCF1",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              transition: "all 0.3s ease-in-out",
              zIndex: -1,
            },
          }}
          onClick={() => navigate("/sessions")}
        /> 
        */}

        <BottomNavigationAction
          icon={
            <img
              src={Scanners_img2}
              alt="Scanners"
              style={{ width: "25px", height: "25px" }}
            />
          }
          sx={{
            position: "relative",
            color: "#fff",
            "&:hover": { color: "#ecbc56" },
            "&::before": {
              content: '""',
              position: "absolute",
              top: "50%",
              left: "50%",
              width: value === 3 ? "40px" : "0",
              height: value === 3 ? "40px" : "0",
              backgroundColor: "#66FCF1",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              transition: "all 0.3s ease-in-out",
              zIndex: -1,
            },
          }}
          onClick={() => setScannerOpen(!scannersOpen)}
        />
      </BottomNavigation>

      {/* Dropdown for Scanners */}
      {scannersOpen && (
        <Box
          sx={{
            backgroundColor: "#222",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            position: "absolute",
            bottom: "60px",
            right: "10px",
            width: "80%",
            maxWidth: "300px",
            borderRadius: "10px",
            padding: "15px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            zIndex: 20,
          }}
        >
          {scannersItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "16px",
                textAlign: "center",
                padding: "10px 0",
                borderRadius: "5px",
                backgroundColor: "#333",
                transition: "background-color 0.3s",
              }}
              onClick={() => {
                setScannerOpen(false);
                window.scrollTo(0, 0);
              }}
            >
              {item.name}
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default BottomNavbar;
