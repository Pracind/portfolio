// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

function renderApp(AppComponent: React.ComponentType) {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <AppComponent />
      </BrowserRouter>
    </React.StrictMode>
  );
}

// Decide mobile vs desktop at runtime.
// Adjust the breakpoint as you prefer (900px used in your desktop App.tsx matchMedia).
// const MOBILE_QUERY = "(max-width: 900px)";
// const isMobile = typeof window !== "undefined" && window.matchMedia && window.matchMedia(MOBILE_QUERY).matches;

const isMobile = true;

if (isMobile) {
  import("./App.mobile")
    .then(({ default: AppMobile }) => {
      renderApp(AppMobile);
    })
    .catch((err) => {
      // If mobile build fails for any reason, log and fall back to desktop app.
      console.error("Failed to load App.mobile — falling back to App. Error:", err);
      import("./App").then(({ default: App }) => renderApp(App));
    });
} else {
  import("./App")
    .then(({ default: App }) => {
      renderApp(App);
    })
    .catch((err) => {
      console.error("Failed to load App — attempting to load App.mobile. Error:", err);
      import("./App.mobile").then(({ default: AppMobile }) => renderApp(AppMobile));
    });
}
