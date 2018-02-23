import React from 'react'
import {Title} from "../../components/title";
import {OffCanvasHeader} from "../../components/offCanvasHeader";
import {Header} from "../../components/header";
import {Footer} from "../../components/footer";


const Committtee = () => (
    <div>
        <OffCanvasHeader name="committee"/>
        <Title name="The Committee" subtext="We love feedback!"/>
        <Header name="committee"/>


        <Footer/>

    </div>
);

export default Committtee;