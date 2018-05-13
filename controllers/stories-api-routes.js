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
router.get("/category/:id", (req, res) => {
    let query = req.params.id;
    console.log("fetching objects..");
    query = query.replace("%20", " ");
  console.log(query);
  // sequelize to query the stories for the drop down menu
  db.Story.findAll({
    where: {
      category: query
    }
  }).then(data => {
    console.log("findAll...");

    // rendering category2
    res.render("category2", {

      // passing in object "stories" with data      
      stories: data
    });
  })
});

// getting page for user to input blanks based on story they selected
router.get("/userInput/:id", (req, res) => {
  console.log("fetching objects..");

  // sequelize to query the blank inputs for the user to fill in
  db.VarBlanks.findAll({
    include: [{
      model: db.Story,
      where: {id: req.params.id}
  }]
  }).then(data => {
    console.log("findAll...");

    // rendering inputs page
    res.render("inputs", {

      // passing in object blanks with data    
    storiesId: req.params.id,  
    blanks: data
    });
    // res.json(data);
  })
});

// getting page for user to read story they created
router.post("/userStory/:id", function(req, res) {
  console.log("posting...");
  db.Story.findOne({
    where: {
      id: req.params.id
    }
  }).then(data => {
    console.log("creating story..");
    let storyBody = data.body;
    console.log(storyBody);

    for (let i = 0; i < req.body.userInput.length; i++) {
        storyBody = storyBody.replace(/(\*)(\*)(\*)/, function(match, p1) {
           return req.body.userInput[i];
          console.log(storyBody);
           
        });
    console.log(storyBody);
    };

    // rendering category
    // res.render("category", {
      // passing in object "stories" with data
    //   stories: data
    // });
  })
  // console.log(req.body.userInput);
  // // looping over the user's inputs
  // for (i=0;i<req.body.userInput.length;i++) {

  //   // pushing the users's inputs to the db under the userInputs table
  //   db.UserInput.create({
  //     userInput: req.body.userInput[i]
  //   }).then(newUserInput => {
  //     console.log(`Added successfully`);
  //   });
  // }

  // db.UserInput.findAll({
  //   include: [{
  //     model: db.Story,
  //     where: {id: req.params.id}
  // }]
  // }).then(data => {
  //   console.log("findAll...");

  //   // rendering inputs page
  //   res.render("inputs", {

  //     // passing in object blanks with data      
  //   blanks: data
  //   });
  // })

});



module.exports = router;