import { FaArrowUp } from "react-icons/fa";
import { Box } from "@mui/material";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      onClick={scrollToTop}
      sx={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex:'9999',
        backgroundColor: "black",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <FaArrowUp size={16} color="#fff" />
    </Box>
  );
};

export default ScrollToTopButton;
