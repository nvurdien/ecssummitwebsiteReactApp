import React from 'react';
import FullCalendar from 'fullcalendar-reactwrapper';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';

class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultView: 'timeline2Day',
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
            events:'https://fullcalendar.io/demo-events.json?with-resources=2',
        }
    }

    render() {
        return (
            <div id="example-component">
                <FullCalendar
                    header= {{
                        left: '',
                        center: 'title',
                        right: 'timeline2Day,list2Day'
                    }}
                    id = "your-custom-ID"
                    defaultDate={new Date()}
                    nowIndicator={true}
                    defaultView={this.state.defaultView}
                    views={this.state.views}
                    groupByResource={true}
                    resources={this.state.resources}
                    events = {this.state.events}
                />
            </div>
        );
    }
}

export default Schedule;