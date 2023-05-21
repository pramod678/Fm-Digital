import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
// import ImageUpload from "./components/imageUpload.";

//  SideBar Nev from ;
import Dashboard from "./pages/Dashboard";
import CreateRelease from "./pages/Create-Release";
import Catalogs from "./pages/Catalogs";
import Label from "./pages/Label";
import Tickets from "./pages/Tickets";
import Tools from "./pages/Tools";
import FAQ from "./pages/FAQ";
function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className="App">
        {/* <SideBar> */}
        <Routes>
          <Route
            exact
            path="/"
            element={isLoggedIn === "true" ? <UserDetails /> : <Login />}
          />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/userDetails" element={<UserDetails />} />
          {/* nev bar route */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/CreateRelease" element={<CreateRelease />} />
          <Route path="/Catalogs" element={<Catalogs />} />
          <Route path="/Label" element={<Label />} />
          <Route path="/Tickets" element={<Tickets />} />
          <Route path="/Tools" element={<Tools />} />
          <Route path="/FAQ" element={<FAQ />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
        {/* </SideBar> */}
        {/* <ImageUpload/> */}
      </div>
    </Router>
  );
}

export default App;
