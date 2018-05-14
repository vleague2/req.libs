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

    console.log(req.body);
    let storyId = "";
    db.Story.create({
        category: req.body.category,
        title: req.body.title,
        body: req.body.story
      }).then(newUserInput => {
        storyId = newUserInput.dataValues.id;
        for (i = 0; i<req.body.speech.length; i++){
            db.VarBlanks.create({
                varBlanks: req.body.speech[i],
                StoryId: storyId
            })    
        }

      });
    console.log("posted story");
});

module.exports = router;