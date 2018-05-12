const express = require("express");
const router = express.Router();
const db = require("../models");
const {ensureLoggedIn, guest} = require('../helpers/auth');

// getting page for which catagory the user wants
// need to add ensureLoggedIn when we want to protect the routes. Syntax: router.get("/", ensureLoggedIn, function ect)
router.get("/", function(req, res) {
  console.log("fetching objects..");

  // sequelize to query the categories for the drop down menu
  db.Story.findAll({group: 'category'}).then(data => {
    console.log("findAll...");

    // rendering category
    res.render("category", {
      // passing in object "stories" with data
      stories: data
    });
  })
});

  // getting page for user to select which story they want
router.get("/category/:id", function(req, res) {
    console.log("fetching objects..");

  // sequelize to query the stories for the drop down menu
  db.Story.findAll({
    where: {
      category: req.params.id
    }
  }).then(dbStory => {
    console.log("findAll...");

    // rendering category2
    res.render("category2", {

      // passing in object "stories" with data      
      stories: dbStory
    });
  })
});

module.exports = router;