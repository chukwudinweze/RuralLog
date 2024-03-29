import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AgentRegistrationPage from "./Pages/AgentRegistrationPage";
import AgroInputPage from "./Pages/AgroInputPage";
import FarmerRegPage from "./Pages/FarmerRegPage";
import HomePage from "./Pages/HomePage";

const theme = createTheme({
  typography: {
    fontFamily: '"DM Sans", sans-serif',
  },
  palette: {
    primary: {
      main: "#2a750d", // desired background color of AppBar
    },
  },
});

const App = () => {
  return (
    <section>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="agentsignup" element={<AgentRegistrationPage />} />
          <Route path="regfarmer" element={<FarmerRegPage />} />
          <Route path="agroinputs" element={<AgroInputPage />} />
        </Routes>
      </ThemeProvider>
    </section>
  );
};

export default App;
