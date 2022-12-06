const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const date = require(__dirname + "/date.js");
const port = 3000;

// const items = ["buy food", "cook food", "eat food"];
// const workItems = [];

mongoose.set('strictQuery', true);

mongoose.connect("mongodb://127.0.0.1:27017/todolistDB", {useNewUrlParser: true});

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "there's no name in it"],
  }
})

const Item = mongoose.model("Item", itemSchema);

const item1 = new Item({
  name : "Welcome to your todolist!",
})
const item2 = new Item({
  name : "Hit the + button to add a new item.",
})
const item3 = new Item({
  name : "<-- Hit this to delete an item.",
})

const defaultItems = [item1, item2, item3];

Item.insertMany(defaultItems, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("succesfully saved all the default items to todolistDB");
  }
})

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  const day = date.getDate();
  res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", function (req, res) {
  const item = req.body.newItem;
  console.log(req.body.list);
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
