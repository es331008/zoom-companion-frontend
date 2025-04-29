import {createRoot} from "react-dom/client";
import "./index.css";
import {BrowserRouter} from "react-router";
import {CssBaseline} from "@mui/material";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    // Strict mode is causing issues with the way the zoom client renders itself
  // <StrictMode>
      <BrowserRouter>
          <CssBaseline />
          <App />
      </BrowserRouter>
  // </StrictMode>
);
