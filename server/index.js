const express = require('express');
const path = require('path');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
 var items = require('../database-mysql');
 var mysql = require('mysql');
 var db = require("./../database-mysql/index")
 var login = require("./regist")
 var add = require("./addaffice")
 var getall = require("./getall")
 var bookall = require("./bookingall")
 var gitoffice = require("./gitaffice") 
 var router = express.Router();
 const bcrypt = require('bcrypt');
  var search =require("./searchbylocation")
  var addbooking = require("./rent")
  var getbookinguser = require('./bookinguser')
  var rating = require('./rating')
  var cors = require('cors')
  const nodemailer = require ('nodemailer')
  app.use(cors());
db.connection.connect(function(err) {
  if (err) console.log(err)
  console.log("Connected!");
});
app.get('/', function(req, res) {
  res.send("hhh");
});
app.post('/registeruser',login.register);
app.post('/loginuser',login.login);
app.post('/registerowner',login.registerowner);
app.post('/loginowner',login.loginowner);
app.post('/addoffice',add.addoff);
app.get('/getall',getall.getoff);
app.post('/search',search.search);
app.post('/addbooking',addbooking.addbooking)
app.post('/getbooking',bookall.getbooking);
app.post('/getoffice',gitoffice.getoff)
app.post('/getbookinguser',getbookinguser.getbookinguser)
app.post('/rating',rating.rating) 
const { google } = require('googleapis')

// Require oAuth2 from our google instance.
const { OAuth2 } = google.auth

// Create a new instance of oAuth and set our Client ID & Client Secret.
const oAuth2Client = new OAuth2(
  '1062927840996-6g77vq8i6hvgi3mpr5rn1rab9utqoh5p.apps.googleusercontent.com',
  'dP9s63Ig7yhGy0yM5Q7j0qXl'
)

// Call the setCredentials method on our oAuth2Client instance and set our refresh token.
oAuth2Client.setCredentials({
  refresh_token: '1//04opwRGWxN9WZCgYIARAAGAQSNwF-L9IrZcXCJJ5XsG93AKWDZ4hol0w7xbWhwuLI1I4OIp1LGgiHTWcd2qSY1xDgqQ5q1Ndo1oo',
})

// Create a new calender instance.
const calendar = google.calendar({ version: 'v3', auth: oAuth2Client })

// Create a new event start date instance for temp uses in our calendar.
const eventStartTime = new Date()
eventStartTime.setDate(eventStartTime.getDay() + 2)

// Create a new event end date instance for temp uses in our calendar.
const eventEndTime = new Date()
eventEndTime.setDate(eventEndTime.getDay() + 4)
eventEndTime.setMinutes(eventEndTime.getMinutes() + 45)

// Create a dummy event for temp uses in our calendar
const event = {
  summary: `Meeting with David`,
  location: `3595 California St, San Francisco, CA 94118`,
  description: `Meet with David to talk about the new client project and how to integrate the calendar for booking.`,
  colorId: 1,
  start: {
    dateTime: eventStartTime,
    timeZone: 'Palestine/Gaza',
  },
  end: {
    dateTime: eventEndTime,
    timeZone: 'Palestine/Gaza',
  },
}

// Check if we a busy and have an event on our calendar for the same time.
calendar.freebusy.query(
  {
    resource: {
      timeMin: eventStartTime,
      timeMax: eventEndTime,
      timeZone: 'Palestine/Gaza',
      items: [{ id: 'primary' }],
    },
  },
  (err, res) => {
    // Check for errors in our query and log them if they exist.
    if (err) return console.error('Free Busy Query Error: ', err)

    // Create an array of all events on our calendar during that time.
    const eventArr = res.data.calendars.primary.busy

    // Check if event array is empty which means we are not busy
    if (eventArr.length === 0)
      // If we are not busy create a new calendar event.
      return calendar.events.insert(
        { calendarId: 'primary', resource: event },
        err => {
          // Check for errors and log them if they exist.
          if (err) return console.error('Error Creating Calender Event:', err)
          // Else log that the event was created.
          return console.log('Calendar event successfully created.')
        }
      )

    // If event array is not empty log that we are busy.
    return console.log(`Sorry I'm busy...`)
  }
)


const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  // Set static folder


  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
