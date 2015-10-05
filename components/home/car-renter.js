import React from 'react';
import moment from '../../../../node_modules/moment/moment.js';

var unavailableDates =[
                    "October 4 2015",
                    "October 8 2015",
                    "October 15 2015",
                    "October 16 2015",
                    "October 17 2015",
                    "November 3 2015",
                    "November 4 2015",
                    "November 5 2015",
                    "November 12 2015",
                    "November 29 2015"
                ];


var numOfDays = 7;
var allDays = [];
var weeks = [];



for(var i = 0; i < 91; i++) {
    allDays.push(moment().startOf('week').add(i, 'days').format('MMMM DD YYYY'));
};
for (var i=0; i<allDays.length; i+=numOfDays) {
    var weekArrays = allDays.slice(i,i+numOfDays);
    weeks.push(weekArrays);
}

var Day = React.createClass({
    render: function () {
        var date = this.props.date;
        var isUnavailable = this.props.unavailableDates.some(function(d) {
         return moment(d).isSame(date);
     });
        return (
            <div className={'day ' + (isUnavailable ? 'unavailable' : 'available')}>{date}</div>
            )
    }
});


var Week = React.createClass({
    render: function (){
        var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
        'Friday', 'Saturday'];

        var dayTitles = dayNames.map(function(dayTitle, index){
            return <div className="day-name">{dayTitle}</div>

        });
    return <div className="week-container">
      { this.props.weekArray.map(d => <Day date={d} unavailableDates={unavailableDates} />)}
    </div>
    }
});
 

var App = React.createClass({
    getInitialState: function() {
        return {
            weekNumber: 0,
            weeks: weeks,
            availability: true
        }
    },
    
    previous: function () {
        if(this.state.weekNumber === 0) {
            return null;
        }
        this.setState({
            weekNumber: this.state.weekNumber-1
        });
    },
     next: function() {
        if(this.state.weekNumber === 12) {
            return null;
        }
        this.setState({
            weekNumber: this.state.weekNumber+1
        });
    },
    // isUnavailableDate: function(dates, unavailableDates) {
    //         return unavailableDates.some(function(d) {
    //             var uDate = moment(d);
    //             console.log(uDate, dates)
    //             console.log(uDate.isSame('October 4 2015'))
    //         }); 
    // },
    render: function() {
        //console.log(this.isUnavailableDate(this.state.weeks[this.state.weekNumber], unavailableDates));
        var weekArray = weeks.map(function (day, index) {
            return (
                <Week
                key={index}
                weekArray={day} />
                )
        });

        return (

            <div>
            {weekArray[this.state.weekNumber]}
            <div onClick={this.previous}>Previous</div>
            <div onClick={this.next}>Next</div>
            </div>
            )
}
});


React.render(<App / > , document.getElementById('calendar-container'));

// function isUnavailableDate(date, unavailableDates) {
//   return unavailableDates.some(function(d) {
//     return d.diff(date);
//   });
// }