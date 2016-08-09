const express = require("express")
const router = express.Router()

const itineraries = require("./../data/itineraries")

router.get("/", (req, res) => {
    const query = req.query

    let results = itineraries.filter(itinerary => {
        return itinerary.country_code == query.country 
                && itinerary.duration == query.duration
                && itinerary.budget == query.budget
                && query.date in itinerary.dates
    })

    results.month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] [query.date - 1]

    results.budget = convertCurrency(query.curency, query.budget)

    res.render("search", {
        itineraries: results
    })
})

function convertCurrency (currency, value) {
        let val
        let sym

        switch (currency) {
            case "USD":
                val = value * 1.3
                sym = "$"
                break
            case "SGD":
                val = value * 1.7
                sym = "$"
                break
            case "GBP":
                val = value * 0.8
                sym = "£"
                break
            case "EUR":
            default:
                val = value
                sym = "€"
        }
        
        return {
            val,
            sym
        }
    }

module.exports = router
