import axios from 'axios'
//import ApolloClient from 'apollo-boost';
//import { gql } from "apollo-boost";


const api_key = //Api key
console.log(api_key)
const capital = 'Helsinki'
const weatherUrl = (`https://api.openweathermap.org/data/2.5/weather?q=${ capital }&units=metric&appid=${ api_key }&lang=fi`)
const eventsUrl = ('https://open-api.myhelsinki.fi/v1/events/')
const ablocUrl = ('https://foodandco.fi/modules/json/json/Index?costNumber=3087&language=fi')
/*
const client = new ApolloClient({
    uri: `https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql`
});

const getTimetable = () => (
    client
        .query({
            query: gql`
        {
            stops(name: "t��l�ntori") {
                name
                stoptimesWithoutPatterns(numberOfDepartures: 3) {
                    scheduledArrival
                    realtimeArrival
                    arrivalDelay
                    scheduledDeparture
                    realtimeDeparture
                    departureDelay
                    realtime
                    realtimeState
                    serviceDay
                    headsign

                }
            }
        }`
            }
    )
        .then(response => {
            return response
        })
    )

*/
const getWeather = () => (
    axios
        .get(weatherUrl)
        .console.log(weatherUrl)
        .then(response => {
            return (response.data)
        })
)

const getAbloc = () => (
    axios
        .get(ablocUrl)
        .then(response => {
            console.log(response.data)
            return (response.data)
        })
)

const getEvents = () => (
    axios
        .get(eventsUrl)
        .then(response => {
            return (response.data)
        })
)



export default { getWeather, getEvents, getAbloc} //getTimetable