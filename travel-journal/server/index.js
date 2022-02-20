require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

const {seed, getCountries, createCity, getCities, deleteCity} = require('./controller.js')

app.use(express.json())
app.use(cors())

// DEV
app.post('/seed', seed)

// COUNTRIES
app.get('/countries', getCountries)

// CITIES
app.post('/cities', createCity)
app.get('/cities', getCities)
// app.delete('/cities/:id', deleteCity)



const port = process.env.PORT || process.env.SERVER_PORT
app.listen(port, () => console.log(`Server running on ${port}`)) 