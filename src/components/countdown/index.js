import React from 'react'


/* Countdown
    @param date * Indicates the start date of the event (YYYY-MM-DDTHH:MM:SS-08:00)
    @param colorToWhite * just a style piece no need to touch
*/
export default ({date, colorToWhite}) => <div>
    {
        ((new Date()) < new Date(date)) ?
        (<div className="uk-grid-small uk-flex uk-flex-center uk-child-width-auto" uk-grid=""
              uk-countdown={`date: ${date}`} style={colorToWhite}>
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
        </div>) : <div><h1 className="uk-article-lead" style={colorToWhite}><span>Happening Now!</span></h1></div>
    }
</div>