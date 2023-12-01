import React from "react";
import './NavBar.css'

function navBar(){
    return(
        <>
        <div className="main">
            <div className="left">
               <a href="/"><img src="logo-removebg-preview.png" alt="" /></a>
            </div>
            <div className="right">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Projects</a>
                <a href="">Events</a>
                <a href="">Team</a>
                <a href="">Contact</a>
            </div>
        </div>
        
        </>
    );
}

export default navBar;