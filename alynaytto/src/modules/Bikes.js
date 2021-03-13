import React from 'react'

const Bikes = ({ bikes }) => {
    if (bikes === null) {
        return (null)
    } else {
        console.log(bikes)
        //{bikes.bikeRentalStation.bikesAvailable} {bikes.bikeRentalStation.name}
        return (
            
            <div>
                {bikes.bikeRentalStations.map((bike) => <div className="bikes">{bike.bikesAvailable}/{bike.spacesAvailable} {bike.name}</div>)}
            </div>
        )
    }
}

export default Bikes