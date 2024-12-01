import { createRoot } from "react-dom/client";

// css
import "./index.css";

// components
import { AppProvider } from "@/context";
import App from "@/App.jsx";

// application
const app = createRoot(document.getElementById("root"));
app.render(
  <AppProvider>
    <App />
  </AppProvider>
);
