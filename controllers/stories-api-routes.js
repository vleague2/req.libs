const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", function(req, res) {
  console.log("fetching objects..");
  
db.Story.findAll().then(dbStory => {
  console.log("findAll...");
  // var hbsObject = JSON.stringify(dbStory);
  // projects will be an array of all Project instances
  // res.json((hbsObject));
  res.render("category", {
    stories: dbStory
  });
})
});

module.exports = router;