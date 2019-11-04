const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + "/public/"));
app.get("/", (req, res) => res.sendFile("index.html"));

app.listen(port, ()=> console.log("App started listening on " + port));