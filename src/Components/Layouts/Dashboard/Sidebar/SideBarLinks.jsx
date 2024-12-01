import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import DownArrow from "@/home_profile_assets/DownArrow.svg";

import useApi from "@/api";

const SideBarLinks = ({ links, scannersItems, navigate }) => {
  const api = useApi();

  const [scannersOpen, setScannersOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const logout = async () => {
    try {
      const res = await api.post("/logout");

      localStorage.setItem("user", null);
      localStorage.setItem("token", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box
      component="ul"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "15px",
        color: "#fff",
        m: 0,
        py: 10,
      }}
    >
      {links.map((link) =>
        link.name === "Scanners" ? (
          // Dropdown link
          <Box key={link.name}>
            <Box
              component="li"
              sx={{
                listStyleType: "none",
                display: "flex",
                alignItems: "center",
                gap: "9px",
                p: "8px",
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.02)",
                  backgroundColor: "#ecbc56",
                },
              }}
              onClick={() => setScannersOpen(!scannersOpen)}
            >
              <Box sx={{ color: "#fff" }}>{link.icon}</Box>
              <Typography
                sx={{
                  fontFamily: "Motken noqta ii",
                  fontSize: "12px",
                  letterSpacing: "-4%",
                  color: "#fff",
                }}
              >
                {link.name}
              </Typography>
              <Box
                sx={{
                  fontSize: "14px",
                  transform: scannersOpen ? "rotate(0deg)" : "rotate(-90deg)",
                }}
              >
                <img
                  src={DownArrow}
                  alt="Dropdown Arrow"
                  style={{ width: "10px", height: "10px" }}
                />
              </Box>
            </Box>

            {scannersOpen &&
              scannersItems.map((item) => (
                <Box
                  key={item.name}
                  sx={{
                    pl: "10px",
                    py: "2px",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "scale(1.02)",
                      color: "#ecbc56",
                    },
                  }}
                  onClick={() => {
                    navigate(item.path);
                    window.scrollTo(0, 0);
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "TanseekModernProArabic-ExBold",
                      fontWeight: "400",
                      fontSize: "25px",
                      color: "#fff",
                    }}
                  >
                    {item.name}
                  </Typography>
                </Box>
              ))}
          </Box>
        ) : (
          // Standard link
          <Link
            to={link.path}
            key={link.name}
            style={{
              listStyleType: "none",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              padding: "8px",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.05)",
                backgroundColor: "#ecbc56",
              },
            }}
            onClick={(e) => {
              if (activeLink) {
                activeLink.classList.remove("active");
              }
              const currentLink = e.currentTarget;
              currentLink.classList.add("active");
              setActiveLink(currentLink);
              navigate(link.path);
              window.scrollTo(0, 0);
            }}
          >
            <Box sx={{ fontSize: "22px", color: "text.primary" }}>
              {link.icon}
            </Box>
            <Typography
              sx={{
                fontFamily: "Motken noqta ii",
                fontSize: "12px",
                letterSpacing: "-4%",
                color: "#fff",
              }}
            >
              {link.name}
            </Typography>
          </Link>
        )
      )}

      {/* Logout Button */}
      <Button
        onClick={logout}
        sx={{
          color: "#c1954a",
          width: "120px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          mt: "15px",
          backgroundColor: "#201b14",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Motken noqta ii",
            fontSize: "18px",
            letterSpacing: "-4%",
          }}
        >
          Logout
        </Typography>
      </Button>
    </Box>
  );
};

export default SideBarLinks;
