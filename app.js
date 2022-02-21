const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

app.set("view engine", "hbs");
app.use(express.static(`${__dirname}/public`));

app.get("/", (req, res) => {
  res.render("index", { header: "Weather App" });
});

app.get("*", (req, res) => {
  res.render("notfound");
});

app.listen("8080", () => {
  console.log("App running on PORT 8080......");
});
