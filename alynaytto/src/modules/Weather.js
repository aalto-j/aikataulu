import React from 'react'

const Weather = ({ weather }) => {
    function temp() {
        return (weather.main.temp.toFixed(0))
    }

    if (weather === null) {
        return (null)
    }
    else {
        return (
            <>
                <div className="wea">
                        <img className="icon" src={(`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`)} />
                        <p className="temperature">{temp()} C</p>
                        <img className="windicon" src="https://img.icons8.com/color/96/000000/windsock.png" />
                    <p className="windspeed">{weather.wind.speed} m/s{weather.wind.direction}</p>
                </div>
                
            </>
            )
    }
}

export default Weather