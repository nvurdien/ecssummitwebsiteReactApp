import React from 'react';
import Schedule from "../../components/schedule";
import {OffCanvasHeader} from "../../components/offCanvasHeader";
import {Title} from "../../components/title";
import {Header} from "../../components/header";
import events from './events'

export default () => (
    <div>
        <OffCanvasHeader name="schedule" />
        <Title title="Schedule" subtext="Lost?" />
        <Header name="schedule" />
        <div className="uk-section uk-section-muted uk-padding-large">
            Note: SGMH is Steven G. Mihaylo Hall
            {
                /*
                TODO: You guys will want to change Schedule for after 2019!
                      You guys will also want to edit the events.js file in this same directory
                */
            }
            {
                /* Schedule
                @param events * indicates what activities, workshops, etc will be done those days please make sure the events array is set up properly
                @param defaultDate * the start date of the event
                @param numDays * indicates how long the event will be from start date
                */
            }
            <Schedule
                events={events}
                defaultDate={'March 15, 2019'}
                numDays={3}
            />

        </div>
    </div>
)