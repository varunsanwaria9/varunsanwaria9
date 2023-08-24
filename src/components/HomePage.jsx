import React from "react";
import Navbar from "./Navbar";
import "../styles/Homepage.css"

export default function HomePage() {
    return (
        <div className="main-body">
            <Navbar />
            <div className="home-main-body">
                <div className="home-left-body">
                    <p>Hi, I am</p>
                    <p>VARUN SANWARIA</p>
                </div>
                <div className="home-right-body"></div>
            </div>
        </div>
)}