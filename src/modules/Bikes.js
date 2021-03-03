import React from 'react'

const Bikes = ({ bikes }) => {
    if (bikes === null) {
        return (null)
    } else {
        return (
<div>{bikes.bikeRentalStation.bikesAvailable}</div>


        )
    }
}

export default Bikes