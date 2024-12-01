import { useContext, useEffect } from "react";
import { ThemeProvider } from "@emotion/react";
import { LoadingContext } from "@/context";
import useTheme from "@/utils/theme";

// components
import Router from "@/routes";

// css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// components
function App() {
  // config
  const { setLoading } = useContext(LoadingContext);

  // data
  const theme = useTheme();

  // on App render
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => clearTimeout(timer);
  }, [setLoading]);

  // render
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
