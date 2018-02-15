import React from 'react'

export const OffCanvasHeader = ({name}) => {
    return <div id="offcanvas-navbar" uk-offcanvas="mode: reveal; flip: true;">
        <div className="uk-offcanvas-bar">
            <ul className="uk-nav uk-nav-default">
                <li className={name === "home" ? "uk-active" : ""}><a href="/">Home</a></li>
                <li className={name === "about" ? "uk-active" : ""}><a href="about">About Us</a></li>
                <li className={name === "contact" ? "uk-active" : ""}><a href="contact">Contact Us</a></li>
                <li className={name === "getinvolved" ? "uk-active" : ""}><a href="getinvolved">Get Involved</a></li>
            </ul>
        </div>
    </div>
};