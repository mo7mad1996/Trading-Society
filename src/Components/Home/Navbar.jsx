import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
} from "@mui/material";
// import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import Widget from "./Widget.jsx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#aboutus" },
    { name: "Trade Alerts", href: "#tradealerts" },
    { name: "Academy", href: "#academy" },
    { name: "Scanners", href: "#scanners" },
    { name: "Login", href: "/login" },
    { name: "Join us", href: "https://www.hfssociety.com" },
  ];

  const goTo = (e, id) => {
    if (id.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.querySelector(id);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop;
        const screenHeight = window.innerHeight;
        const scrollPosition = offsetTop - screenHeight / 4;

        window.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const handleToggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        marginTop: "30px",
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: "999",
      }}
    >
      <AppBar
        className="navbar"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#000000",
          maxWidth: "100%",
          height: "70px",
          zIndex: "999",
          transition: "300ms all ease",
          mx: "auto",
          // mb: scrolling ? "0" : "30px",
          backdropFilter: "blur(15.7px)",
          backgroundColor: scrolling
            ? "rgba(0, 0, 0, 0.7)"
            : "rgba(0, 0, 0, 1)",
          py: "0px",
          top: "0",
        }}
      >
        <Toolbar
          sx={{
            transition: "all 1s ease",

            justifyContent: "space-around",
            height: "100%",
            width: "90%",
            alignItems: "center",
            gap: "50px",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Box
              component="img"
              src={logo}
              sx={{
                maxWidth: { xs: "50px", md: "65px" },
                maxHeight: { xs: "50px", md: "70px" },
                animation: "fadeIn 0.5s ease",
              }}
            />
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {links.map((link) => (
              <Box
                key={link.name}
                sx={{
                  position: "relative",
                  "&:hover": {
                    transition: "all 1s ease",
                    ...(link.name !== "Join us" && {
                      "&:after": {
                        content: '""',
                        position: "absolute",
                        top: "100%",
                        backgroundColor: "#ecbc56",
                        width: "100%",
                        height: "3px",
                      },
                    }),
                  },
                }}
              >
                <a
                  href={link.href}
                  className="link"
                  onClick={(e) => goTo(e, link.href)}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#fff",
                      fontFamily: "TanseekModernProArabic-ExBold",
                      letterSpacing: ".071em",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: { xs: "16px", md: "25px" },
                      width: "150px",
                      ...(link.name === "Join us" && {
                        background:
                          "linear-gradient(90deg, #D6AA1C 0%, #5D5329 100%)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        width: "115px",
                        height: "35px",
                        borderRadius: "5px",
                        fontSize: "20px",
                        fontWeight: "bold",
                        position: "relative",
                        "&:hover": {
                          background:
                            "linear-gradient(180deg, #dfb247 0%, #ecbc56 100%)",
                        },
                      }),
                    }}
                  >
                    {link.name}
                  </Typography>
                </a>
              </Box>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <IconButton
              onClick={handleToggle}
              color="inherit"
              sx={{
                display: { xs: "flex", md: "none" },
                fontSize: "25px",
              }}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        sx={{ width: "100%", position: "fixed", zIndex: "999", top: "68px" }}
      >
        <Widget />
      </Box>

      <Drawer
        anchor="left"
        open={isOpen}
        onClose={handleToggle}
        sx={{ zIndex: "9999" }}
        className="filter"
        PaperProps={{
          sx: {
            width: "250px",
            position: "relative",
            backgroundColor: "#252525",
            display: "flex",
            flexDirection: "column",
            gap: "50px",
          },
        }}
      >
        <Box sx={{ width: "150px", mx: "auto", mt: "30px" }}>
          <Box
            component="img"
            src={logo}
            sx={{ width: "100%", backgroundSize: "cover" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            height: "100%",
            textAlign: "center",
          }}
        >
          {links.map((link) => (
            <a
              href={link.href}
              key={link.name}
              className="sidebar-link"
              to={link.href}
              onClick={(e) => handleToggle(e)}
              style={{
                color: "#fff",
                textAlign: "center",
                position: "relative",
                width: "80%",
                margin: "0 auto",
                transition: "400ms all",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "32px",
              }}
            >
              {link.name}
            </a>
          ))}
        </Box>
      </Drawer>
    </Box>
  );
}

export default Navbar;
