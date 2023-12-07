import React from "react";
import './App.css'
import NavBar from './Components/navbar/navBar/NavBar';
import MainBody from './Components/navbar/mainBody/MainBody'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
        <NavBar />
        <Routes>
          <Route element={<MainBody />} path="/"></Route>
          
        </Routes>
    </Router>
    </>
  );
}

export default App;
