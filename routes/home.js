const fetch = require("node-fetch")

const express = require("express")
const router = express.Router()

router.get("/", (req, res, next) => {
    const urls = [
        req.protocol + "://" + req.get("host") + "/api/countries"
    ]

    Promise.all(urls.map(url => 
        fetch(url).then(data => data.json())
    ))
    .then(json => {
        res.render("home", {
            countries: json[0]
        })
    })
    .catch(err => next(err))
})

module.exports = router
