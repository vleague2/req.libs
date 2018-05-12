const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/category", function(req, res) {
  console.log("fetching objects..");
  
  db.story.findAll({
  }).then(dbStory => {
    res.json(dbStory);
    console.log(dbStory);
  });

});

module.exports = router;