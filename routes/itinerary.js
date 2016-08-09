const express = require("express")
const router = express.Router()

const itineraries = require("./../data/itineraries")

router.get("/:id", (req, res) => {
    let itinerary = itineraries
        .find(itinerary => itinerary.mapid === req.params.id)

    res.render("itinerary", {
        itinerary: itinerary
    })
})

module.exports = router
