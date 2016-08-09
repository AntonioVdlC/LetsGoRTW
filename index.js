const express = require("express")
const app = express()

const port = process.env.PORT || 8080

// Templating engine
app.set("views", "./views")
app.set("view engine", "ejs")

// Static files
app.use(express.static(__dirname + "/public"))

// Routes
app.use("/", require("./routes/home"))
app.use("/about", require("./routes/about"))

// Server
app.listen(port, () => {
    console.log("Listening on port " + port)
})
