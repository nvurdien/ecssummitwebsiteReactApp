import React from 'react'
import Link from "react-router-dom/es/Link";
import * as Scroll from 'react-scroll'

const colorToWhite = {
    color:'white'
};

let scroll = Scroll.animateScroll;

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
                        <li className={name === "about" ? "uk-active" : ""}><Link to="/about" onClick={Scroll.animateScroll.scrollToTop()}>About Us</Link></li>
                        <li className={name === "committee" ? "uk-active" : ""}><Link onClick={Scroll.animateScroll.scrollToTop()} to="/committee">Committee</Link></li>
                        <li className={name === "contact" ? "uk-active" : ""}><Link onClick={Scroll.animateScroll.scrollToTop()} to="/contact">Contact Us</Link></li>
                        <li className={name === "getinvolved" ? "uk-active" : ""}><Link onClick={Scroll.animateScroll.scrollToTop()} to="/getinvolved">Get Involved</Link></li>
                    </ul>
                    <div className="uk-navbar-right uk-hidden@s">
                        <a style={colorToWhite} className="uk-navbar-toggle uk-navbar-toggle-icon uk-icon" uk-navbar-toggle-icon=""
                           uk-toggle="target: #offcanvas-navbar">
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
};