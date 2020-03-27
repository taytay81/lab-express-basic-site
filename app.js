require("dotenv").config();
const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const PORT = 8080;

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(path.join(__dirname, "views/partials"));
app.set("view engine", "hbs");

const approutes = require("./routes/approutes");
app.use("/", approutes);

app.listen(process.env.PORT, () => {
  console.log(`server ready to rock @ http://localhost:${process.env.PORT}`);
});
