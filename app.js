const express = require("express");

const app = express();

app.use(express.json())
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.json({ home: "home" })
})

app.get('/success', (req, res) => {
    console.log("params ", req.query)
})

app.listen(process.env.PORT || 3000, function () {
    console.log("server started on port 3000");
});
