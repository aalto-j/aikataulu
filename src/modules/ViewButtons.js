import React from 'react'

const ViewButtons = ({setView}) => {
    return (
    <>
        <button onClick={() => setView('timetable')}>Aikataulu</button>
        <button onClick={() => setView('bike')}>Pyörät</button>
        <button onClick={() => setView('list')}>Muistilista</button>
    </>
    )
}

export default ViewButtons