import React from 'react';
import Schedule from "../../components/schedule";
import {OffCanvasHeader} from "../../components/offCanvasHeader";
import {Title} from "../../components/title";
import {Header} from "../../components/header";

export default () => (
    <div>
        <OffCanvasHeader name="schedule" />
        <Title title="Schedule" subtext="Lost?" />
        <Header name="schedule" />
        <div className="uk-section uk-section-muted uk-padding-large">
            Note: SGMH is Steven G. Mihaylo Hall
            <Schedule/>
        </div>
    </div>
)