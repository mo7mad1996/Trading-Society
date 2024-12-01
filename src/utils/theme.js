import { useContext } from "react";
import { createTheme } from "@mui/material";
import { DarkModeContext } from "@/context";

function useTheme() {
  const { darkMode } = useContext(DarkModeContext);

  return createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiInputBase-root": {
              color: "#000",
            },
          },
        },
      },
    },

    typography: {
      body1: {
        fontSize: "27px",
        fontFamily: "TanseekModernProArabic-ExBold",
        fontWeight: "400",
      },
      body2: {
        fontSize: "25px",
        fontFamily: "Bayon",
        fontWeight: "400",
      },
      h3: {
        fontSize: "45px",
        fontFamily: "TanseekModernProArabic-ExBold",
        fontWeight: "700",
      },
    },
    palette: {
      background: {
        default: darkMode ? "#0c0c0c" : "#f1e1c7",
      },
      text: {
        mainTheme: "#ecbc56",
        primary: darkMode ? "#ffffff" : "#000000",
        secondary: darkMode ? "#cccccc" : "#555555",
      },
    },
  });
}

export default useTheme;
