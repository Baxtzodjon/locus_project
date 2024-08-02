import React from "react";
import logo from "/icons/house.svg"

const Header = () => {
    return (
        <>
            <header className="header">

                <a href="#" className="logo">

                    <img src={logo} alt="" />
                    <span>Locus</span>

                </a>

                <nav className="navbar">

                    <a href="#home" className="active">Home</a>
                    <a href="#contact">Contact</a>
                    <a href="#location">Location</a>
                    <a href="#about">About Us</a>

                </nav>

                <button className="sgn_btn">Sign Up</button>

            </header>
        </>
    )
}

export default Header