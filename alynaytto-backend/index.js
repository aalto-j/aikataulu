const express = require('express')
const app = express()

const ev = require('dotenv').config()

const port = process.env.PORT

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

app.get('/timetable', (request, response) => {
  response.send(weatherService.getWeather())
})