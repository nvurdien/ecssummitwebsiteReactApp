import React from 'react';
import FullCalendar from 'fullcalendar-reactwrapper';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';
import events from './events.js'

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
            groupByResource: true,
            resources: [
                { id: 'a', title: 'Room A' },
                { id: 'b', title: 'Room B' }
            ],
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
                    minTime={'09:00:00'}
                    maxTime={'19:00:00'}
                />
            </div>
        );
    }
}

export default Schedule;