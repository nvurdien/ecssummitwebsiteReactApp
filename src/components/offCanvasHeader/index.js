import React from 'react'


const colorToWhite = {
    color:'white'
};

export const OffCanvasHeader = ({name}) => {
    return <div id="offcanvas-navbar" uk-offcanvas="mode: reveal; flip: true;">
        <div className="uk-offcanvas-bar">
            <ul className="uk-nav uk-nav-default" >
                <li className={name === "home" ? "uk-active" : ""}><a style={colorToWhite} href="/">Home</a></li>
                <li className={name === "about" ? "uk-active" : ""}><a style={colorToWhite} href="about">About Us</a></li>
                <li className={name === "contact" ? "uk-active" : ""}><a style={colorToWhite}  href="contact">Contact Us</a></li>
                <li className={name === "getinvolved" ? "uk-active" : ""}><a style={colorToWhite} href="getinvolved">Get Involved</a></li>
            </ul>
        </div>
    </div>
};