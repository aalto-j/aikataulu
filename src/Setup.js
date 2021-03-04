import React, { useState } from 'react'

const Setup = () => {

    const [bikeStation, setBikeStation] = useState('036')
    const [stopName, setStopName] = useState('Apollonkatu')

    return (
        <>
            <input type="text" name="Pyöräasema"/>
            <input type="text" name="Pysäkki"/>
        </>
    )
}