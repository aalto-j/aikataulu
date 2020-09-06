import React from 'react'

const Timetable = ({ timetable }) => {
    if (timetable === null) {
        return (null)
    } else {
        const joku = timetable.stops.flat()
        const jokumuu = joku.map(a => a.stoptimesWithoutPatterns).flat()
        return (
        <table className="timetable">
            {jokumuu.map((lahto) =>
            <tr classname="departureRow" key={lahto.trip.gtfsId}>
                <td className="realtimeArrival">{lahto.realtimeArrival}</td>
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