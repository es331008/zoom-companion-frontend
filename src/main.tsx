import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import {BrowserRouter} from "react-router";
import {CssBaseline} from "@mui/material";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <BrowserRouter>
          <CssBaseline />
          <App />
      </BrowserRouter>
  </StrictMode>
);
