import React, { useRef } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MiniSidebar = ({
  links,
  scannersItems,
  sidebarOpen,
  setScannersOpen,
  scannersOpen,
}) => {
  const iconsSidebarRef = useRef();
  const navigate = useNavigate();

  return (
    <>
      {!sidebarOpen && (
        <Box
          ref={iconsSidebarRef}
          sx={{
            position: "fixed",
            top: "50%",
            transform: "translateY(-50%)",
            left: "0",
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            gap: "15px",
            p: "15px",
            backgroundColor: "#333",
            borderRadius: "0 10px 10px 0",
            zIndex: "99999999",
            transition: "all 0.5s ease-in-out",
          }}
        >
          {links.map((link) => (
            <Box
              key={link.name}
              onClick={() => {
                if (link.name === "Scanners") {
                  setScannersOpen((prev) => !prev);
                } else {
                  navigate(link.path);
                }
              }}
              style={{
                position: "relative",
              }}
            >
              <Box
                sx={{
                  fontSize: "24px",
                  color: "#fff",
                  cursor: "pointer",
                  position: "relative",
                  "&:hover": {
                    transform: "scale(1.05)",
                    color: "#ecbc56",
                  },
                }}
              >
                {link.icon}
              </Box>

              {link.name === "Scanners" && scannersOpen && !sidebarOpen && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "0",
                    left: "100%",
                    backgroundColor: "#444",
                    padding: "10px",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                    zIndex: "999999",
                    width: "200px",
                    transform: "translateX(10px)",
                  }}
                >
                  {scannersItems.map((item) => (
                    <Box
                      key={item.name}
                      sx={{
                        fontSize: "22px",
                        color: "#fff",
                        letterSpacing: "3px",
                        cursor: "pointer",
                        fontFamily: "TanseekModernProArabic-ExBold",
                        "&:hover": {
                          transform: "scale(1.05)",
                          color: "#ecbc56",
                        },
                      }}
                      onClick={() => {
                        navigate(`${item.path}`);
                        window.scrollTo(0, 0);
                      }}
                    >
                      {item.name}
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

export default MiniSidebar;
