import React from 'react'

const ViewButtons = ({setView}) => {
    return (
    <div className="buttons">
        <button className="timetablebutton" onClick={() => setView('timetable')}></button>
        <button className="bikebutton" onClick={() => setView('bike')}></button>
        <button className="listbutton" onClick={() => setView('list')}></button>
    </div>
    )
}

export default ViewButtons