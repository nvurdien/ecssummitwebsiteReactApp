import React from 'react';
import FullCalendar from 'fullcalendar-reactwrapper';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';
import './style.css';

/* Schedule
 @param events * indicates what activities, workshops, etc will be done those days please make sure the events array is set up properly
 @param defaultDate * the start date of the event
 @param numDays * indicates how long the event will be from start date
*/
class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultView: 'list2Day',
            views: {
                timeline2Day: {
                    type: 'agenda',
                    duration: {days: props.numDays},
                    buttonText: "Agenda"
                },
                list2Day: {
                    type:'list',
                    duration: {days: props.numDays},
                    buttonText: "List View"
                }
            },
            events: props.events,
            defaultDate: props.defaultDate
        }
    }

    render() {
        return (
            <div id="example-component">
                <FullCalendar
                    header= {{
                        left: '',
                        center: 'title',
                        right: 'list2Day,timeline2Day'
                    }}
                    id = "your-custom-ID"
                    defaultDate={new Date(this.state.defaultDate)}
                    nowIndicator={true}
                    defaultView={this.state.defaultView}
                    views={this.state.views}
                    groupByResource={true}
                    resources={this.state.resources}
                    events = {this.state.events}
                    slotDuration= {'00:10:00'}
                    minTime={'08:00:00'}
                    maxTime={'19:00:00'}
                    contentHeight={"auto"}
                    height={"auto"}
                    eventRender={function (event, element){}}
                />
            </div>
        );
    }
}

export default Schedule;