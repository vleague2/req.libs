// required modules
const express = require("express");
const router = express.Router();
const db = require("../models");
const {ensureLoggedIn, guest} = require('../helpers/auth');

// get route for create/username
router.get("/:username", function(req, res) {
    console.log("getting create mode..");

    // load the page
    res.render("userCreated", {

        // send the username to the client
        username: req.params.username
    });
});

// post route for when user sends data (makes a new story)
router.post("/:username", function(req, res) {
    console.log("posting new created story...");

    console.log(req.body);

    // create storyID variable
    let storyId = "";

    // create new entry in story table
    db.Story.create({
        category: req.body.category,
        title: req.body.title,
        body: req.body.story
      }).then(newUserInput => {
        // pull the id of the new story out of DB and assign to storyId
        storyId = newUserInput.dataValues.id;

        // loop through the speech property sent by client side
        for (i = 0; i<req.body.speech.length; i++){

            // create new entries in varblanks table
            db.VarBlanks.create({
                varBlanks: req.body.speech[i],
                StoryId: storyId
            })    
        }

        // send a success message to the user
        res.sendStatus(200);

      });
    console.log("posted story");
});

module.exports = router;