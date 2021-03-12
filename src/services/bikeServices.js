const { createApolloFetch } = require('apollo-fetch');

const fetch = createApolloFetch({
  uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql',
})

/**/

const getBikes = () => fetch({
  query: `{
    bikeRentalStations(ids:["036", "070", "035", "037"]) {
        stationId
        name
        bikesAvailable
        spacesAvailable
    }   
}`
}).then(res => {
    console.log(res.data)
    return res.data
})

export default {getBikes}