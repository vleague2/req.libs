const express = require("express");
const router = express.Router();
const db = require("../models");
const {ensureLoggedIn, guest} = require('../helpers/auth');

router.get("/:username",ensureLoggedIn, function(req, res) {
    console.log("fetching objects..");
    // sequelize to query the all previous stories
    db.UserStory.findAll({
      where: {
        username: req.params.username
      }
    }).then(data => {
      console.log("finding all saved user stories..");
      let stories = {
        data: data,
        username: req.params.username
      }
      res.render("profile", stories);
    })
});

// getting route to delete past saved story
router.get("/delete/:username/:id", ensureLoggedIn, function(req, res) {
    console.log("finding object to delete..");
    db.UserStory.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
        console.log("reloading page..");
        res.redirect(`/profile/${req.params.username}`);
    });
  });

module.exports = router;