import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Agenda, Month, Inject } from '@syncfusion/ej2-react-schedule';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
class cal extends React.Component {
    constructor() {
        super(...arguments);
        this.data = [{
                Id: 2,
                Subject: 'Rented',
                StartTime: new Date(2020, 8, 15, 8, 0),
                EndTime: new Date(2020, 8, 20, 20, 0),

                IsAllDay: false,
                Status: 'Completed',
                Priority: 'High'
            }];
           
            
    }
    componentDidMount(){
        const tokin = localStorage.usertoken;
		var decoded = jwt_decode(tokin); 
    console.log(decoded);
    var email =decoded.email;
    console.log(email);
        axios.post(
            'http://localhost:5000/getbookinguser',{
                email
            }).then((res)=>
              {
                  const databooking = res.data.success
                  console.log(res.data)
                this.setState({StartTime : res.data.success[0].startdate})
                this.data[0].StartTime = res.data.success[0].startdate
                this.data[0].EndTime = res.data.success[0].enddate

                console.log(this.data)
              }  
          );
    }

    render() {
        return <ScheduleComponent height='550px' selectedDate={new Date(2020, 8, 15)} eventSettings={{ dataSource: this.data,
            fields: {
                id: 'Id',
                subject: { name: 'Subject' },
                isAllDay: { name: 'IsAllDay' },
                startTime: { name: 'StartTime' },
                endTime: { name: 'EndTime' }
            }
            
        }}>
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
        </ScheduleComponent>;
  }
    };
export default cal;