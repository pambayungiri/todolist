const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  var today = new Date();
  var day = "";
  var nameOfDay = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  day = nameOfDay[today.getDay()];

  res.render("list", { kindOfCode: day });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
