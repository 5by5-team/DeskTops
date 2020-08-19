import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Agenda, Month, Inject } from '@syncfusion/ej2-react-schedule';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
class cal extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            length : 0 
        }
        this.data = [{
            Id: 1,
            Subject: 'RENTED',
            StartTime: new Date(2018, 1, 15, 9, 30),
            EndTime: new Date(2018, 1, 15, 11, 0)
        }]
    }
    componentDidMount(){
       console.log(this.state)
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
               this.setState({length : res.data.success.length})
               console.log(this.state)
               for(var i = 1 ; i<=this.state.length;i++){
                   this.data.push({
                        Id:i+1,
                        Subject: 'RENTED',
                        StartTime: new Date(2018, 1, 14, 13, 0),
                        EndTime: new Date(2018, 1, 14, 14, 30)
                    })
               }
               console.log(this.data)
               res.data.success.map((element,index)=>{
                this.data[index+1].StartTime=(new Date(element.startdate))
                this.data[index+1].EndTime= (new Date(element.enddate))
            })
                console.log(this.data)
              }  
          );
    }
    render() {
        return <ScheduleComponent height='550px' selectedDate={new Date(2020, 8, 15)} eventSettings={{ dataSource: this.data  
        }}>
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
        </ScheduleComponent>;
  }
    };
export default cal;