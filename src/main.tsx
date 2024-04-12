import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import StationNameProvider from "./Providers/StationNameProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StationNameProvider>
      <App />
    </StationNameProvider>
  </React.StrictMode>
);
