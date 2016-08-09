const express = require("express")
const api = express.Router()

const itineraries = require("./../data/itineraries")

api.get("/countries", (req, res) => {
    res.json(itineraries
        .map(itinerary => {
            return { 
                name: itinerary.country,
                code: itinerary.country_code
            }
        })
        .sort((a, b) => (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0)
        .filter((c, i, cc) => !i || c.code !== cc[i-1].code)
    )
})

module.exports = api
