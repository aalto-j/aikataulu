import React from 'react'

const ViewButtons = ({setView}) => {
    return (
    <>
        <button className="timetablebutton" onClick={() => setView('timetable')}></button>
        <button className="bikebutton" onClick={() => setView('bike')}></button>
        <button className="listbutton" onClick={() => setView('list')}></button>
    </>
    )
}

export default ViewButtons