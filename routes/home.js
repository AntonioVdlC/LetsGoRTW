const express = require("express")
const router = express.Router()

// Data
const itineraries = require("./../data/itineraries")
const countries = itineraries
    .map(itinerary => {
        return { 
            name: itinerary.country,
            code: itinerary.country_code
        }
    })
    .sort((a, b) => (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0)
    .filter((c, i, cc) => !i || c.code !== cc[i-1].code)

// Route
router.get("/", (req, res) => {
    res.render("home", {
        countries: countries
    })
})

module.exports = router
