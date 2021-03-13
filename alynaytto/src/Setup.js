import React, { useState } from 'react'

const Setup = () => {

    
    const [bikeStation, setBikeStation] = useState('036')
    const [stopName, setStopName] = useState('Apollonkatu')

    const handleStationChange = (event) => {
        setStopName(event.target.value)
        console.log(event.target.value)
    }
    
    const handleBikeStationChange = (event) => {
        setBikeStation(event.target.value)
    }

    return (
        <>
            <input type="text" name="Pyöräasema" onChange={handleBikeStationChange}/>
            <input type="text" name="Pysäkki" onChange={handleStationChange}/>
        </>
    )
}

export default Setup