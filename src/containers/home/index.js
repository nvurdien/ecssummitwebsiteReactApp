import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Header} from "../../components/header";
import './style.css';
import introvideo from '../../media/Website-Intro-Video-Medium-Quality.mp4';
import ACMWLogo from '../../media/ACMW-Tuffy.png';
import ACMLogo from '../../media/acm-desktopcta.png';
import {OffCanvasHeader} from "../../components/offCanvasHeader";
import day1image from '../../media/day1image.JPG';
import day2image from '../../media/DSC_0073.JPG';
import {Footer} from "../../components/footer";
import RegistrationForm from "../../components/registrationForm";
import {Link} from "react-router-dom";

const backgroundStyle = {
    minHeight: '750px',
    boxShadow: '-8px 21px 35px 0px rgba(0,0,0,0.38)',
    WebkitBoxShadow: '-8px 21px 35px 0px rgba(0,0,0,0.38)',
    MozBoxShadow: '-8px 21px 35px 0px rgba(0,0,0,0.38)'
};

const backgroundOverlayStyle = {
    minHeight: '750px'
};

const backgroundTextStyle = {
    minHeight: '750px',
    background: 'rgba(34,34,34,0.3)'
};

const lineHeightChange = {
    lineHeight: '2.5'
};

const colorToWhite = {
    color:'white'
};

const day1Background = {
    backgroundImage: `url(${day1image})`
};

const day2Background = {
    backgroundImage: `url(${day2image})`
};

// const disabledCursor = {
//     cursor: 'not-allowed'
// };

const Home = () => (
    <div>
    <OffCanvasHeader name="home"/>

    <div id="mainpage" className="uk-background-muted">

        <div className="uk-cover-container uk-background-cover uk-background-default" style={backgroundStyle}>
        <video id="home_video_element" autoPlay="" loop alt="summit preview" muted="" playsInline="" uk-cover="">
    <source id="mp4Source" type="video/mp4" src={introvideo} alt="summit preview" />
        </video>


    <div className="uk-cover-container uk-position-cover uk-blend-multiply uk-background-primary" style={backgroundOverlayStyle}>
    </div>
    <div className="uk-cover-container uk-position-cover uk-flex-center uk-flex uk-flex-middle uk-overlay uk-overlay-primary" style={backgroundTextStyle}>

        <div className="uk-child-width-1-1@s uk-text-center uk-grid-collapse uk-article" uk-grid="">
    <div>
    <h1 className="uk-article-title uk-light" style={{textShadow: "4px 2px 4px #000000", marginBottom:'15px'}}>ECS Diversity and Leadership Summit</h1>
    </div>
    <div style={lineHeightChange}>
        <h4 className="uk-article-lead" style={colorToWhite}><span>April 6th - 7th</span></h4>
        <div className="uk-grid-small uk-flex uk-flex-center uk-child-width-auto" uk-grid="" uk-countdown="date: 2018-04-06T13:00:00+00:00" style={colorToWhite}>
        <div>
        <div className="uk-countdown-number uk-countdown-days"/>
        <div className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Days</div>
        </div>
        <div className="uk-countdown-separator">:</div>
        <div>
        <div className="uk-countdown-number uk-countdown-hours"/>
        <div className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Hours</div>
        </div>
        <div className="uk-countdown-separator">:</div>
        <div>
        <div className="uk-countdown-number uk-countdown-minutes"/>
        <div className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Minutes</div>
        </div>
        <div className="uk-countdown-separator">:</div>
        <div>
        <div className="uk-countdown-number uk-countdown-seconds"/>
        <div className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Seconds</div>
        </div>
    </div>
    {/*<p> <a className="btn btn-1 btn-1a" style={disabledCursor} disabled="">Register Soon!</a> </p>*/}
    <RegistrationForm/>
    </div>
    </div>
    </div>
    </div>
    </div>

        <Header name="home" />

    <div className="uk-section uk-section-primary uk-padding-large uk-flex uk-flex-middle uk-margin uk-margin-remove-top uk-margin-remove-bottom">
        <div className="uk-text-center uk-margin-large-left@s uk-margin-large-right@s uk-padding-large@s uk-padding-remove-top uk-padding-remove-bottom" style={colorToWhite}>
            <h2 style={{textShadow: "1px 1px 2px #000000"}}>What is ECS Diversity and Leadership Summit?</h2>
            <h4 style={{textShadow: "1px 1px 1px #000000", color:"white"}}>
                It is an event to promote diversity and provide students with professional leadership training.
                The event will be hosted by a mixture of companies, industry professionals and student clubs.
                Many of the events will be deliberately interactive, the goal being that the attendees walk away with hands-on experience with specific leadership skills.
            </h4>

        </div>
    </div>
<div className="uk-grid-collapse uk-child-width-1-1@s" uk-grid="">
    {/*uk-scrollspy="cls: uk-animation-slide-left; target: > div; offset-top: -200;"*/}
        <div
             className="uk-card uk-card-secondary uk-grid-collapse uk-child-width-1-2@s uk-margin uk-margin-remove-bottom"
             uk-grid="">
            <div title="at team building activity at event"
                 className="uk-card-media-left uk-box-shadow-large uk-background-blend-screen uk-text-center uk-background-primary uk-background-cover uk-background-fixed"
                 style={day1Background} alt="Summit Intro picture">
                <canvas width="400" height="350"/>
            </div>

            <div className="uk-flex uk-flex-middle uk-flex-center">
                <div className="uk-card-body uk-text-center">
                    <h3 className="uk-card-title" style={{textShadow: "1px 1px 4px #000000"}}>Day 1</h3>
                    <p style={{textShadow: "1px 1px 2px #000000", color:"white"}}>Active Listening</p>
                    <p style={{textShadow: "1px 1px 2px #000000", color:"white"}}>Keynote Speaker</p>
                    <p  style={{textShadow: "1px 1px 2px #000000", color:"white"}}>Speed Mentoring</p>
                </div>
            </div>

        </div>
    {/*uk-scrollspy="cls: uk-animation-slide-right; target: > div; offset-top: -200;"*/}
        <div
             className="uk-card uk-card-primary uk-grid-collapse uk-child-width-1-2@s uk-margin uk-margin-remove-top uk-margin-remove-bottom"
             uk-grid="">
            <div title="at team building activity at event"
                 className="uk-flex-last@s uk-card-media-right uk-box-shadow-large uk-background-blend-screen uk-text-center uk-background-primary uk-background-cover uk-background-fixed"
                 style={day2Background} alt="Summit Intro picture">
                <canvas width="400" height="350"/>
            </div>
            <div className="uk-flex uk-flex-middle uk-flex-center">
                <div className="uk-card-body uk-text-center">
                    <h3 className="uk-card-title" style={{textShadow: "1px 1px 4px #000000"}}>Day 2</h3>
                    <p style={{textShadow: "1px 1px 2px #000000", color:"white"}}>Strengthsfinder</p>
                    <p style={{textShadow: "1px 1px 2px #000000", color:"white"}}>Workshops</p>
                    <p style={{textShadow: "1px 1px 2px #000000", color:"white"}}>Panel Discussion</p>

                </div>
            </div>
        </div>
</div>
    <div  uk-scrollspy="cls: uk-animation-slide-bottom; target: > div; repeat:true" className="uk-section uk-section-secondary uk-padding-large">
        <div className="uk-container">

            <h1 className="uk-text-center uk-text-bold" style={{textShadow: "1px 1px 2px #000000", color:"white"}}>FAQ</h1>
            <br />

                <div className="uk-grid-match uk-child-width-1-2@s" uk-grid="">
                    <div className="">
                        <p style={{textShadow: "1px 1px 2px #000000", color:"white"}}>
                            <strong>Who can come?</strong>
                            <br /> We are welcoming college students (undergraduate or graduate) who are Engineering or Computer Science majors.</p>
                    </div>
                    <div>
                        <p style={{textShadow: "1px 1px 2px #000000", color:"white"}}>
                            <strong>What should I bring?</strong>
                            <br />Nothing is required, but it may be helpful to bring a small notepad and pen.</p>
                    </div>
                    <div>
                        <p style={{textShadow: "1px 1px 2px #000000", color:"white"}}>
                            <strong>Does this cost money?</strong>
                            <br />The event is free to attend. We will provide free SWAG, food, and useful workshops.</p>
                    </div>
                    <div>
                        <p style={{textShadow: "1px 1px 2px #000000", color:"white"}}>
                            <strong>What is the dress code?</strong>
                            <br /> The dress code is business casual.
                        </p>
                    </div>
                    <div>
                        <p style={{textShadow: "1px 1px 2px #000000", color:"white"}}>
                            <strong>Where can I volunteer?</strong>
                            <br /> If you would like to volunteer please follow the link <Link className="uk-text-bold" to="/getinvolved">here</Link>.</p>
                    </div>
                    <div>
                        <p style={{textShadow: "1px 1px 2px #000000", color:"white"}}>
                            <strong>Want to find out more?</strong>
                            <br /> If you would like to know more please follow the link <Link className="uk-text-bold uk-text-italic" to="/about">here</Link>.</p>
                    </div>
                </div>

        </div>
    </div>


    <div className="uk-section uk-section-default">
        <div className="uk-container">

            <h1 className="uk-text-center uk-text-bold" style={{textShadow: "0px 1px 1px gray"}}>Sponsors</h1>
            <br />

                <div className="uk-text-center uk-flex uk-flex-middle uk-child-width-1-2@s"  uk-grid="">
                    <div>
                        <p><img src={ACMLogo} className="uk-text-middle" alt="sponsor name"/></p>
                    </div>
                    <div>
                        <p><img src={ACMWLogo} height="auto" width="200px" alt="sponsor name"/></p>

                    </div>
                </div>

        </div>
    </div>
    <Footer />
</div>
);

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/about-us')
}, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(Home)
