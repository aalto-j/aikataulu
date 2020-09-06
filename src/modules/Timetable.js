import React from 'react'

const Timetable = ({ timetable }) => {
    if (timetable === null) {
        return (null)
    } else {
        const joku = timetable.stops.flat().stoptimesWithoutPatterns.flat()
        console.log(joku)
        return (
        <div>{timetable.stops[0].stoptimesWithoutPatterns[0].headsign}</div>
        )
    }
}

export default Timetable