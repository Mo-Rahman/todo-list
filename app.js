const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

// console.log(date);

const port = 3000;
const app = express();

//  Didn't use bodyparser.json as I wasn't parsing anything from an API
// app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

const items = ["Buy Chocolate!"];
const workItems = ["Run morning report"];

app.get("/", (req, res) => {
  // The lists.ejs needs to be in a views folder.
  let dayAndDate = date.getDate();

  res.render("lists", { listTitle: dayAndDate, newListItems: items });
});

app.post("/", (req, res) => {
  // Returns the object as a key: value {newItem: (The item added into the add field) Chocolate}
  // let data = req.body;
  // console.log(data);
  // Returns the string of the item added into the add field - "Chocolate"
  let item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    // res.render("lists", { newListItem: item });
    res.redirect("/");
  }
});

app.get("/work", (req, res) => {
  res.render("lists", { listTitle: "Work", newListItems: workItems });
  // console.log(workItems);
});

app.post("/work", (req, res) => {
  let test = req.body.list;
  // console.log(test);
  workItems.push(test);
  res.redirect("/");
});

app.get("/about", (req, res) => {
  res.render("about");
});

// Listening on port 3000.
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
