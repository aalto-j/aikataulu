import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import apiService from './services/services.js'
import timetableService from './services/hslServices.js'
//import { ApolloProvider } from "react-apollo";
//import { ApolloProvider } from '@apollo/react-hooks'
//import { DepartureView } from './DepartureView'
import Clock from'./modules/Clock.js'
import Weather from './modules/Weather.js'
import Timetable from './modules/Timetable.js'
/*
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
*/
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
        /*apiService
            .getAbloc()
            .then(res => {
                setAbloc(res)
            })*/
            
        //setTimetable(null)
        setInterval(() => {
            setTime(new Date())
            timetableService
            .getTimetable()
            .then(res => {
        setTimetable(res)
        
    })}, 5000)
        }, [])

        //setInterval(geet, 3000)


    //var timer2 = setInterval(() => setTime(new Date()), 1000) //clock
/*

                    <Abloc abloc={abloc} />
 <Event events={events} />*/
    return (
        <>
            <div className="container">
                <div>
                    <Clock time={time} />
                    <Weather weather={weather} />
                    <Timetable timetable={timetable} />
                    
                </div>
                <footer>Timetables - Helsinki Region Transport 2019 | Weather - Open Weather Map | Icons8</footer>
                </div>
            </>
            )
}



export default App;