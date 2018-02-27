import React from 'react'
import {OffCanvasHeader} from "../../components/offCanvasHeader";
import {Header} from "../../components/header";
import {Title} from "../../components/title";
import {CardList} from "../../components/cardList";
import {Committee} from './committee';
import {AdvisorsList} from './AdvisorsList';
import {Footer} from "../../components/footer";
import HeadImage from '../../media/contactimage.JPG';
import './imagehover.min.css';
import './style.css';

export default () => (
    <div>
        <OffCanvasHeader name="committee"/>
        <Title title="Our Team" image={HeadImage} subtext="We like feedback."/>
        <Header name="committee"/>
        <div className="uk-section uk-section-default" role="main">

            <h1 className="uk-heading-primary uk-heading-line uk-text-center"><span>Student Leaders</span></h1>

            <div className="uk-margin-small-left uk-margin-small-right">
                <CardList members={Committee}/>
            </div>
        </div>
        <div className="uk-section uk-section-default">
            <h1 className="uk-heading-primary uk-heading-line uk-text-center"><span>Professional Lead</span></h1>
            <CardList members={AdvisorsList}/>
        </div>
        <Footer/>
    </div>
)