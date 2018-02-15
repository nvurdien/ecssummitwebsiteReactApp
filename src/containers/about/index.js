import React from 'react'
import {Title} from "../../components/title";
import AboutImage from './about.JPG'
import {OffCanvasHeader} from "../../components/offCanvasHeader";
import {Header} from "../../components/header";
import Presidents from './alvaro&sara.JPG';
import picture1 from './3people.JPG';
import picture2 from './4people.JPG';
import {Footer} from "../../components/footer";

const About = () => (
    <div>
        <OffCanvasHeader name="about" />
        <Title title="About Us" image={AboutImage} subtext="What we're about." />
        <Header name="about" />
        <div className="uk-section uk-section-muted uk-padding-large">
            <div className="uk-container">
                <article className="uk-article">
                    <h1 className="uk-article-title">Our History</h1>
                    <img className="uk-align-center uk-align-right@m uk-margin-remove-adjacent" src={Presidents} width="400" alt="Sara and Alvaro (Past Club Presidents)" />
                        <p className="uk-text-lead">The first Leadership & Diversity Summit was hosted by ACM & ACM-W last year on April 29th, 2017.</p>
                        <p>Alvaro Rivera, the former president of Association for Computing Machinery, and Sara Lipowsky the former president of Association for Computing Machinery - Women led a team to design and host this opportunity for students. The purpose was to promote diversity and prepare our students with necessary leadership skills to succeed in the workforce.</p>
                </article>
            </div>
        </div>

        <div className="uk-section uk-section-default uk-padding-large">
            <div className="uk-container">
                <div className="uk-text-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ESkN8w20hcU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen/>
                </div>
                <p className="uk-text-center">Our team is devoted to make your experience as beneficial as it can be.
                </p>
                <div className="uk-grid-match uk-child-width-1-3@s" uk-grid="">
                    <div><img src={picture1} alt="club members" /></div>
                    <div><img src={picture2} alt="past members and advisor" /></div>
                    <div><img src={picture3} alt="at the team building activity" /></div>
                </div>

            </div>
        </div>
        <Footer/>
    </div>
);

export default About;