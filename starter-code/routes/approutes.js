const express = require("express");
const router = express.Router();
router.get(["/", "/home"], (req, res) => {
  const data = {
    css: ["home"],
    title: "My Home page"
  };

  res.render("home", data); // data has to be an object
});

router.get("/about", (req, res) => {
  const data = {
    css: ["about"],
    title: "My About Page"
  };
  res.render("about", data);
});

router.get("/art", (req, res) => {
  const data = {
    css: ["art"],
    title: "My art page"
  };
  res.render("art", data);
});
router.get("/contact", (req, res) => {
  const data = {
    css: ["contact"],
    title: "My contact page"
  };
  //console.log(req.body);
  //res.redirect("contact");
  res.render("contact", data);
});

router.get("/art/sculpture", (req, res) => {
  const data = {
    css: ["painting"],
    title: "My sculpture page"
  };
  res.render("./art/sculpture", data);
});

router.get("/art/painting", (req, res) => {
  console.log("we enter the painting route");
  const data = {
    css: ["painting"],
    title: "My paintings page"
  };
  res.render("./art/painting", data);
});
router.get("/art/street-art", (req, res) => {
  const data = {
    css: ["painting"],
    title: "My street art page"
  };
  res.render("./art/street-Art", data);
});

module.exports = router;