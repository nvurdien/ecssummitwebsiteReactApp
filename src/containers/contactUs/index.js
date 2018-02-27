import React from 'react'
import {Title} from "../../components/title";
import {OffCanvasHeader} from "../../components/offCanvasHeader";
import {Header} from "../../components/header";
import {Footer} from "../../components/footer";
import ContactForm from "../../components/contactForm";


export default () => (
    <div>
        <OffCanvasHeader name="contact"/>
        <Title title="Contact Us" subtext="We love feedback!"/>
        <Header name="contact"/>
        <div className="uk-section uk-section-default uk-padding-large">
            <ContactForm/>
        </div>
        <Footer/>
    </div>
);