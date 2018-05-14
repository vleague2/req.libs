const express = require("express");
const router = express.Router();
const db = require("../models");
const {ensureLoggedIn, guest} = require('../helpers/auth');

router.get("/", function(req, res) {
    console.log("fetching objects..");
    // sequelize to query the categories for the drop down menu
    db.UserStory.findAll({

    }).then(data => {
      console.log("finding all saved user stories..");

      // rendering category
      res.render("profile", {
        // passing in object "stories" with data
        stories: data
      });
    })
});

router.get("/delete/:id", function(req, res) {
    console.log("finding object to delete..");
    db.UserStory.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
        console.log("reloading page..");
        res.redirect("/profile");
    });
  });

module.exports = router;