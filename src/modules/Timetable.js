import React from 'react'

const Timetable = ({ timetable }) => {
    if (timetable === null) {
        return (null)
    } else {
        const timetableArray = timetable.stops.flat().map(a => a.stoptimesWithoutPatterns).flat().sort(function(a, b) {return a.realtimeArrival-b.realtimeArrival})

        function editArrival(realtimeArrival) {

            function with_zero(t) {           //function to edit time 9:3 => 9:03
                return (t < 10 ? '0' : '') + t;
              }

            let today = new Date(), today_abs = new Date(), today_secs = 0; // From https://stackoverflow.com/questions/11447067/in-javascript-how-to-get-second-of-current-day
            today_abs.setHours(0);
            today_abs.setMinutes(0);
            today_abs.setSeconds(0);
            today_secs = (today.getTime() - today_abs.getTime()) / 1000;
            if (realtimeArrival < today_secs) {
                var minutesUntilArrival = new Date(( realtimeArrival + 86400 - today_secs )).getMinutes()
                return minutesUntilArrival.toString()
            }
            else if (( realtimeArrival - today_secs ) < 600) {
                //var minutesUntilArrival = new Date(( realtimeArrival - today_secs )).getMinutes()
                return Math.floor((realtimeArrival - today_secs) / 60) //minutesUntilArrival.toString()
            } else {
                var todayOther = new Date(Date.now())
                todayOther.setHours(0); todayOther.setMinutes(0); todayOther.setMilliseconds(0); todayOther.setSeconds(0)
                var arriveTime = new Date(realtimeArrival*1000 + todayOther.valueOf())
                return(arriveTime.getHours().toString() + ':' + with_zero(arriveTime.getMinutes()))
            }
            //return realtimeArrival
            }

            /*
            var timeNow = new Date(Date.now())
            var today = new Date(Date.now())
            today.setHours(0); today.setMinutes(0); today.setMilliseconds(0); today.setSeconds(0)
            var time = new Date(realtimeArrival*1000 + today.valueOf())

            time.getMinutes() <= timeNow.getMinutes() && time.getHours() == 0*/
        

        return (
        <table className="timetable">
            {timetableArray.map((lahto) =>
            <tr classname="departureRow" key={lahto.trip.gtfsId}>
                <td className="realtimeArrival">{editArrival(lahto.realtimeArrival)}</td>
                <td className="headsign">{lahto.headsign}</td>
                <td className="shortName">{lahto.trip.route.shortName}</td>
                <td className="mode">{lahto.trip.route.mode}</td>
            </tr>
            )}
        </table>
        
            //<div>{timetable.stops[0].stoptimesWithoutPatterns[0].headsign}</div>
        )
    }
}

export default Timetable