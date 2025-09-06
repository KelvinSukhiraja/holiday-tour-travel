import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import { TransitionProvider } from "./context/TransitionContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ReactLenis root>
        <TransitionProvider>
          <App />
        </TransitionProvider>
      </ReactLenis>
    </BrowserRouter>
  </StrictMode>
);
