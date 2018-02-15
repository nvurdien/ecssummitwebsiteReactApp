import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Header} from "../../components/header";
import './style.css';
import introvideo from './Website-Intro-Video-Medium-Quality.mp4';
import ACMWLogo from './ACMW-Tuffy.png';
import ACMLogo from './acm-desktopcta.png';
import {OffCanvasHeader} from "../../components/offCanvasHeader";
import day1image from './day1image.JPG';
import day2image from './DSC_0073.JPG';
import {Footer} from "../../components/footer";

const backgroundStyle = {
    minHeight: '750px',
    boxShadow: '-8px 21px 35px 0px rgba(0,0,0,0.38)',
    webkitBoxShadow: '-8px 21px 35px 0px rgba(0,0,0,0.38)',
    mozBoxShadow: '-8px 21px 35px 0px rgba(0,0,0,0.38)'
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

const Home = () => (
    <div>
    <OffCanvasHeader name="home"/>

    <div className="uk-background-muted">

        <div className="uk-cover-container uk-background-cover uk-background-default" style={backgroundStyle}>
        <video id="home_video_element" autoPlay="" loop alt="summit preview" muted="" playsinline="" uk-cover="">
    <source id="mp4Source" type="video/mp4" src={introvideo} alt="summit preview" />
        </video>


    <div className="uk-cover-container uk-position-cover uk-blend-multiply uk-background-primary" style={backgroundOverlayStyle}>
    </div>
    <div className="uk-cover-container uk-position-cover uk-flex-center uk-flex uk-flex-middle uk-overlay uk-overlay-primary" style={backgroundTextStyle}>

        <div className="uk-child-width-1-1@s uk-text-center uk-grid-collapse uk-article" uk-grid="">
    <div>
    <p>
    <h1 className="uk-article-title uk-light"><span>ECS Leadership and Diversity Summit</span></h1>
    </p>
    </div>
    <div style={lineHeightChange}>
        <h4 className="uk-article-lead" style={colorToWhite}><span>April 6th - 7th</span></h4>
        <div className="uk-grid-small uk-flex uk-flex-center uk-child-width-auto" uk-grid uk-countdown="date: 2018-04-06T05:00:00+00:00" style={colorToWhite}>
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
    <p> <a href="https://ecssummit.typeform.com/to/CGxyHR" className="btn btn-1 btn-1a" target="_blank" rel="noopener noreferrer">Register</a> </p>
    </div>
    </div>
    </div>
    </div>
    </div>

        <Header name="home" />

    <div className="uk-section uk-section-primary uk-padding-large uk-flex uk-flex-middle">
        <div className="uk-text-center uk-margin-large-left@s uk-margin-large-right@s uk-padding-large@s uk-padding-remove-top uk-padding-remove-bottom" style={colorToWhite}>
            <h4>The ECS Leadership and Diversity Summit is an event to promote diversity and provide students with professional leadership training. The event will be hosted by a mixture of companies, industry professionals and student clubs. Many of the events will be deliberately interactive, the goal being that the attendees walk away with hands-on experience with specific leadership skills.
            </h4>
        </div>
    </div>

    <div className="uk-section uk-section-default">
        <div className="uk-container">
            <div className="uk-child-width-1-2@s uk-grid-match" uk-grid="">
                <div>
                    <div title="at team building activity at event" className="uk-card uk-text-middle uk-card-secondary uk-box-shadow-large uk-box-shadow-hover-xlarge uk-background-blend-overlay uk-text-center uk-background-secondary uk-background-cover uk-card-body uk-border-rounded uk-background-fixed" style={day1Background} alt="Summit Intro picture">
                        <p className="uk-text-middle" style={colorToWhite}>
                            <h2 className="">Day 1</h2>
                            <span style={colorToWhite}>Active Listening
                            <br /> Keynote Speaker
                            <br /> Speed Mentoring</span>
                        </p>
                    </div>
                </div>
                <div>
                    <div title="at opening keynote speech" className="uk-card uk-height-1-1 uk-card-secondary uk-box-shadow-large uk-box-shadow-bottom uk-box-shadow-hover-xlarge uk-text-center uk-background-blend-overlay uk-background-secondary uk-background-cover uk-card-body uk-border-rounded uk-background-fixed" style={day2Background} alt="Summit Intro picture">
                        <p style={colorToWhite}>
                            <h2>Day 2</h2>
                            <span style={colorToWhite}>Strengthsfinder
                            <br /> Workshops
                            <br /> Panel Discussion</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="uk-section uk-section-muted uk-padding-large">
        <div className="uk-container">

            <h1 className="uk-text-center"><strong>FAQ</strong></h1>
            <br />

                <div className="uk-grid-match uk-child-width-1-2@s" uk-scrollspy="cls: uk-animation-fade; target: > div; repeat: true" uk-grid="">
                    <div className="">
                        <p>
                            <strong>Who can come?</strong>
                            <br /> We are welcoming college students (undergraduate or graduate) who are Engineering or Computer Science majors.</p>
                    </div>
                    <div>
                        <p>
                            <strong>What should I bring?</strong>
                            <br />Nothing is required, but it may be helpful to bring a small notepad and pen.</p>
                    </div>
                    <div>
                        <p>
                            <strong>Does this cost money?</strong>
                            <br />The event is free to attend. We will provide free SWAG, food, and useful workshops.</p>
                    </div>
                    <div>
                        <p>
                            <strong>What is the dress code?</strong>
                            <br /> The dress code is business casual.
                        </p>
                    </div>
                    <div>
                        <p>
                            <strong>Where can I volunteer?</strong>
                            <br /> If you would like to volunteer please follow the link <a href="/getinvolved">here</a>.</p>
                    </div>
                    <div>
                        <p>
                            <strong>Want to find out more?</strong>
                            <br /> If you would like to know more please follow the link <a href="/about">here</a>.</p>
                    </div>
                </div>

        </div>
    </div>


    <div className="uk-section uk-section-default">
        <div className="uk-container">

            <h1 className="uk-text-center"><strong>Sponsors</strong></h1>
            <br />

                <div className="uk-text-center uk-flex uk-flex-middle uk-child-width-1-3@m uk-child-width-1-2@s" uk-scrollspy="cls: uk-animation-fade; target: > div; repeat: true" uk-grid="">
                    <div>
                        <p><img src={ACMLogo} className="uk-text-middle" alt="sponsor name"/></p>
                    </div>
                    <div>
                        <p><img src={ACMWLogo} height="auto" width="200px" alt="sponsor name"/></p>

                    </div>
                    <div>
                        <p><img src="http://shashgrewal.com/wp-content/uploads/2015/05/default-placeholder-300x300.png" alt="sponsor name"/></p>

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
