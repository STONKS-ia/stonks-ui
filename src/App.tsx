import React from "react";
import "./assets/styles.scss";
import AppProvider from "./hooks";
import AppRoutes from "./routes";

function App() {
  return (
    <AppProvider>
        <AppRoutes />
    </AppProvider>
  );
}

export default App;
