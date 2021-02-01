const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const members = require("./Members");

const logger = require("./middleware/logger");

const app = express();
const port = process.env.PORT || 8000;

//initializing middleware
//app.use(logger);

//handlebars middleware
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//homepage route
app.get("/", (req, res) =>
  res.render("index", {
    title: "Member app",
    members,
  })
);

app.use("/api/members", require("./routes/api/members"));

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
