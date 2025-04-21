import React from "react";
import { FaSearch } from "react-icons/fa";
import { SiRockstargames } from "react-icons/si";
import './Home page.css';
import { useLocation } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const HomePage=()=>
{
       const homeUser=useLocation().state;

       return(
        <div className="HomeBody">
            <div className="overlay">
            <nav className="navbar navbar-expand navbar-dark pt-3">
                <div className="container-fluid">
                    <ul className="navbar-nav ms-3">
                        <li className="nav-item"><span className="nav-link me-4">Home</span></li>
                        <li className="nav-item"><span className="nav-link me-4">About us</span></li>
                        <li className="nav-item"><span className="nav-link me-4">Contact</span></li>
                        <li className="nav-item"><a className="nav-link" href="/">Sign up</a></li>
                    </ul>
                    <div className="search-cont">
                        <input type="text" placeholder="Search" className="search-box"/>
                        <FaSearch className="text-white me-5"/>
                    </div>
                    <div className="title-card">
                        <h6 className="me-5 fw-bold"><SiRockstargames className="me-2 title-card d-inline-block"/>{homeUser.name}</h6>
                    </div>
                </div>
            </nav>
            <div className="content-box p-5">
                <div>
                    <h5 className="fw-bold">Hi {homeUser.name} !</h5>
                    <p className="my-5">
                        Welcome to <span className="fw-bold">Gokula Kannan</span>'s Project. <br/><br/>
                        This project showcases my web devlopment work.It reflects my efforts 
                        in creating functional and user-friendly web applications.
                         Feel free to explore and thanks for visiting!
                    </p>
                    <a href="https://github.com/gokul-cp0" target="_blank" rel="noopener noreferrer" className="github-button"><FaGithub className="me-1 icon" />  GitHub</a>
                </div>
            </div>
            </div>
        </div>
    )
}
export default HomePage;