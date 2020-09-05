import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import apiService from './services/services.js'
//import { ApolloProvider } from "react-apollo";
//import { ApolloProvider } from '@apollo/react-hooks'
//import { DepartureView } from './DepartureView'



const Clock = ({ time }) => {
    function with_zero(t) {
        return (t < 10 ? '0' : '') + t;
    }

    return (
        <div className="time">
            <div className="cal">
                <p className="date">{time.getDate()}</p>.
                <p className="month">{time.getMonth() + 1}</p>.
                <p className="year">{time.getYear() + 1900}</p>
            </div><div className="clock">
                <p className="hour">{with_zero(time.getHours())}.</p>
                <p className="min">{with_zero(time.getMinutes())}.</p>
                <p className="sec">{with_zero(time.getSeconds())}</p>
            </div>
        </div>
        )
}

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
                    <div>Weather today</div>
                    <div>
                        <p className="temperature">{temp()} C</p>
                        <img className="icon" src={(`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`)} />
                    </div>
                    <div>{weather.weather[0].description} </div>
                    <img className="windicon" src="https://img.icons8.com/color/96/000000/windsock.png" />
                    <p>{weather.wind.speed} m/s{weather.wind.direction}</p>
                </div>
                
            </>
            )
    }
}

const Event = ({ events }) => {
    if (events === null) {
        return (null)
    } else {
        return (
            <>
                {events[0].id}
            </>
            )
    }
}


const Timetable = ({ timetable }) => {
    if (timetable === null) {
        return (null)
    } else {
        //console.log(timetable)
        return (null
            //<div>timetable.data</div>
        )
    }
}

const Abloc = ({ abloc }) => {
    if (abloc === null) {
        return (null)
    } else {
        console.log(abloc.RestaurantName)
        return (
            <div>juu</div>
        )
    }
}

const App = () => {

    const [abloc, setAbloc] = useState(null)
    const [weather, setWeather] = useState(null)
    const [events, setEvents] = useState(null)
    const [time, setTime] = useState(new Date())
    const [timetable, setTimetable] = useState(null)

    useEffect(() => {
        apiService
            .getWeather()
            .then(res => {
                setWeather(res)
            })
        apiService
            .getEvents()
            .then(res => {
                setEvents(res)
            })
        apiService
            .getAbloc()
            .then(res => {
                setAbloc(res)
            })
        apiService
            .getTimetable()
            .then(res => {
                setTimetable(res)
            })
        }, [])

    setInterval(() => setTime(new Date()), 1000)

    return (
        <>
            <div className="container">
                <div>
                    <Clock time={time} />
                    <Weather weather={weather} />
                    <Event events={events} />
                    <Timetable timetable={timetable} />
                    <Abloc abloc={abloc} />
                </div>
                </div>
            </>
            )
}



export default App;