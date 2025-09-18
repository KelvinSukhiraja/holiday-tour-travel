import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AssetLoader } from "./components/AssetLoader";
import { BrowserRouter } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import { TransitionProvider } from "./context/TransitionContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ReactLenis root>
        <TransitionProvider>
          <AssetLoader
            // Optionally list critical assets to guarantee they are loaded before reveal
            images={["/LOGO-WHITE.png", "/LOGO.png", "/ICON.png"]}
            minimumLoadTime={800}
          >
            <App />
          </AssetLoader>
        </TransitionProvider>
      </ReactLenis>
    </BrowserRouter>
  </StrictMode>
);
