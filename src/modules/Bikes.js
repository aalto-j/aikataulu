import React from 'react'

const Bikes = ({ bikes }) => {
    if (bikes === null) {
        return (null)
    } else {
        return (
            <div className="">{bikes.bikeRentalStation.bikesAvailable} {bikes.bikeRentalStation.name}</div>
        )
    }
}

export default Bikes