import React, { useMemo } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { themeSettings } from "theme";
//redux
// import Admin from "scenes/Admin"
import { useSelector } from "react-redux";
import Layout from "scenes/Layout/Layout";
// import SignIn from "scenes/SignIn/SignIn";
// import SignUp from "scenes/SignIn/SignUp";
import Home from "scenes/Home/Home";
import Contact from "scenes/Contact/Contact";
import "./App.css";
import Services from "scenes/Services/Services";
import Team from "scenes/ourTeam/ourTeam";
import OurWork from "scenes/OurWork/OurWork";
import  Dashboard  from "scenes/Dashboard/Dashboard";
import Profile from "scenes/Profile/Profile";
import Form from "scenes/Dashboard/components/Form.jsx";
import Admin from "scenes/Admin/Admin"
import Dasb from "scenes/Admin/dasb.jsx"
function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  // const buttonColorChange = document.querySelectorAll("Button");
  // if (theme.palette.mode === "dark") {
  //   // $("buttonColorChange").css("color","black")

  // }

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* <div className="app_background" style={{backgroundColor:theme.palette.background.default}}></div> */}
          <Routes>
            <Route element={<Layout/>}>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />}/>
              <Route path="/services" element={<Services />}/>
              <Route path="/our-work" element={<OurWork />}/>
              <Route path="/pricing" element={<Home />}/>
              <Route path="/our-team" element={<Team />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/dashboard" element={<Dashboard />}/>
              <Route path="/profile" element={<Profile />}/>
              <Route path="/add" element={<Form />} />
              <Route path="/admin" element={<Admin/>}/> 
              <Route path="/dasb" element={<Dasb/>} />
            </Route>
            {/* <Route path="/login" element={<SignIn />}/> */}
            {/* <Route path="/signup" element={<SignUp />} /> */}
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
