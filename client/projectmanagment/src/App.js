import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import Addproject from "./components/Addproject";
import Update from "./components/Update";

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Login/>}></Route>
          <Route exact path="/register" element={<Register/>}></Route> 
          <Route exact path="/project" element={<Project/>}></Route> 
          <Route exact path="/add-project" element={<Addproject/>}></Route>
          <Route exact path="/update" element={<Update/>}></Route> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
