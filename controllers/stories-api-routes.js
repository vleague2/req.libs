const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", function(req, res) {
  console.log("fetching objects..");
  
db.Story.findAll().then(dbStory => {
  console.log("findAll...");
  // projects will be an array of all Project instances
  // console.log(res.json(dbStory));
  res.render("category", dbStory);
})
});

module.exports = router;