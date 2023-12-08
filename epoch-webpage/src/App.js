import React from "react";
import './App.css'
import NavBar from './Components/navbar/navBar/NavBar';
import MainBody from './Components/navbar/mainBody/MainBody'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from "./Components/navbar/about/About";
import Project from "./Components/navbar/projects/Project";
import Events from "./Components/navbar/events/Events";
import ContactPage from "./ContactPage/ContactPage";

function App() {
  return (
    <>
    <Router>
        <NavBar />
        <Routes>
          <Route element={<MainBody />} path="/"></Route>
          <Route element={<About/>} path="/about"></Route>
          <Route element={<Project/>} path="/projects"></Route>
          <Route element={<Events/>} path="/events"></Route>
          <Route element={<ContactPage/>} path="/Contact"></Route>
        </Routes>
    </Router>
    </>
  );
}

export default App;
