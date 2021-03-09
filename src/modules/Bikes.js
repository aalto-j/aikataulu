import React from 'react'

const Bikes = ({ bikes }) => {
    if (bikes === null) {
        return (null)
    } else {
        console.log(bikes)
        return (
            <div className="bikes" >{bikes.bikeRentalStation.bikesAvailable} {bikes.bikeRentalStation.name}</div>
        )
    }
}

export default Bikes