import { FaTelegramPlane } from "react-icons/fa";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

const TelegramButton = () => {
  const handleClick = () => {
    window.open("https://t.me/your-username", "_blank"); // ضع اسم مستخدمك هنا
  };

  return (
    <Box
      onClick={handleClick}
      component={motion.div}
      sx={{
        position: "fixed",
        bottom: "100px",
        right: "20px",
        backgroundColor: "#0088cc",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        zIndex: "9999",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
      initial={{ y: 30, boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
      whileInView={{ y: 5, boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.9)" }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse", // يعكس الحركة بعد كل تكرار
      }}
    >
      <FaTelegramPlane size={24} color="#fff" />
    </Box>
  );
};

export default TelegramButton;
