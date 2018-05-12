const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/category", function(req, res) {
  db.story.findAll({

  }).then(dbStory => {
    res.json(dbStory)
  });
  
});

module.exports = router;