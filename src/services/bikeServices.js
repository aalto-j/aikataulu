import bikeStation from '../Setup.js'

const { createApolloFetch } = require('apollo-fetch');

const fetch = createApolloFetch({
  uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql',
})

const getBikes = () => fetch({
  query: `{
    bikeRentalStation(id:${bikeStation}) {
        stationId
        name
        bikesAvailable
        spacesAvailable
    }   
}`
}).then(res => {
    return res.data
})

export default {getBikes}