import React, { useContext } from "react";
import { Box } from "@mui/material";
// import Sidebar from './Sidebar';  // Assuming Sidebar is already created
import { TokenContext } from "@/context";

const MainLayout = ({ children }) => {
  const { sidebarOpen } = useContext(TokenContext);

  return (
    <Box sx={{ display: "flex", minHeight: "fit-content" }}>
      {/* Sidebar Component */}
      {/* <Sidebar /> */}

      {/* Main Content Area */}
      <Box
        sx={{
          flex: 1, // Makes the body take up the remaining space after the sidebar
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
          marginLeft: sidebarOpen ? "16%" : "0", // Shift content to the right if sidebar is open
          marginTop: "1.5%", // Shift content to the right if sidebar is open
          marginRight: sidebarOpen ? "1%" : "0", // Shift content to the right if sidebar is open
          paddingLeft: "10px", // Add padding to the body
          transition: "all 0.5s ease-in-out", // Smooth transition for layout changes
        }}
      >
        {/* Render child components */}
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
