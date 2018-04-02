import React from 'react';
import FullCalendar from 'fullcalendar-reactwrapper';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';
import events from './events.js'
import './style.css'

class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultView: 'list2Day',
            views: {
                timeline2Day: {
                    type: 'agenda',
                    duration: {days: 2},
                    buttonText: "Agenda"
                },
                list2Day: {
                    type:'list',
                    duration: {days: 2},
                    buttonText: "List View"
                }
            },
            events: events,
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
                    defaultDate={new Date('April 6, 2018')}
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