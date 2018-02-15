import React from 'react'
import {Link} from "react-router-dom";

const colorToWhite = {
    color:'white'
};

export const Header = ({name}) => {
    return <div className="uk-position-top">
        <div className="uk-dark"
             uk-sticky=" animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 200">
            <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="">
                <div className="uk-navbar-left uk-panel uk-margin-left">
                    <a className="uk-logo" href="/" style={colorToWhite}>ECS Summit</a>
                </div>
                <div className="uk-navbar-right uk-panel uk-margin-right">
                    <ul className="uk-navbar-nav uk-visible@s">
                        <li className={name === "about" ? "uk-active" : ""}><Link to="/about">About Us</Link></li>
                        <li className={name === "contact" ? "uk-active" : ""}><Link to="/contact">Contact Us</Link></li>
                        <li className={name === "getinvolved" ? "uk-active" : ""}><Link to="/getinvolved">Get Involved</Link></li>
                    </ul>
                    <div className="uk-navbar-right uk-hidden@s">
                        <a className="uk-navbar-toggle uk-navbar-toggle-icon uk-icon" uk-navbar-toggle-icon=""
                           uk-toggle="target: #offcanvas-navbar">
                            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                                 ratio="1">
                                <rect y="9" width="20" height="2"/>
                                <rect y="3" width="20" height="2"/>
                                <rect y="15" width="20" height="2"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
};