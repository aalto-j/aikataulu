const { createApolloFetch } = require('apollo-fetch');
//const { query } = require('express');

const fetch = createApolloFetch({
  uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql',
})

const getTimetable = () => fetch({
  query: `{
    stops(name: "Töölöntori") {
      stoptimesWithoutPatterns (numberOfDepartures: 3) {
        realtime
        realtimeArrival
        headsign
        trip {
          gtfsId
          route{
            shortName
            mode
        }}
      }
    }
  }
  `
}).then(res => {
    return res.data
    /*
    var string = 'Töölöntori 🚋\n\n'
    res.data.stops.forEach(stop => {
        stop.stoptimesWithoutPatterns.forEach(route => {

          function with_zero(t) {           //function to edit time 9:3 => 9:03
            return (t < 10 ? '0' : '') + t;
          }
          var today = new Date(Date.now())
          today.setHours(0); today.setMinutes(0); today.setMilliseconds(0); today.setSeconds(0)
          var arriveTime = new Date(route.realtimeArrival*1000 + today.valueOf())
          
          string = string + ' ' + route.trip.route.shortName + ' '
          
          route.realtime ? string = string + ' ' + arriveTime.getHours().toString() + ':' + with_zero(arriveTime.getMinutes()) + ' ' :
          string = string + '~' + arriveTime.getHours().toString() + ':' + with_zero(arriveTime.getMinutes()) + ' '

          string = string + route.headsign + '\n'

        })
        string = string + '\n'
    })*/
})

export default { getTimetable }