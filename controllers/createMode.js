const express = require("express");
const router = express.Router();
const db = require("../models");
const {ensureLoggedIn, guest} = require('../helpers/auth');

router.get("/:username", function(req, res) {
    console.log("getting create mode..");

    res.render("userCreated", {
        username: req.params.username
    });
});

router.post("/:username", function(req, res) {
    console.log("posting new created story...");

    db.Story.create({
        category: req.body.category,
        title: req.body.title,
        body: req.body.body
      }).then(newUserInput => {
        console.log(`Added successfully`);
      });
});

module.exports = router;