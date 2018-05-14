const express = require("express");
const router = express.Router();
const db = require("../models");
const {ensureLoggedIn, guest} = require('../helpers/auth');

// getting page for which catagory the user wants
// need to add ensureLoggedIn when we want to protect the routes. Syntax: router.get("/", ensureLoggedIn, function ect)
router.get("/:username", function(req, res) {
  console.log("fetching objects..");
  // sequelize to query the categories for the drop down menu
  db.Story.findAll({group: 'category'}).then(data => {
    console.log("findAll...");
    let stories = {
      data: data,
      username: req.params.username
    }
    // res.json(stories);
    // rendering category
    res.render("category", stories);
      // passing in object "stories" with data
  })
});

// getting page for user to select which story they want
router.get("/category/:username/:query", (req, res) => {
    console.log("fetching objects..");
    let query = req.params.query;
    query = query.replace("%20", " ");
  console.log(query);
  // sequelize to query the stories for the drop down menu
  db.Story.findAll({
    where: {
      category: query
    }
  }).then(data => {
    console.log("findAll...");
    let stories = {
      data: data,
      username: req.params.username
    }
    // rendering category2
    res.render("category2", stories);   

  })
});

// getting page for user to input blanks based on story they selected
router.get("/userInput/:username/:id", (req, res) => {
  console.log("fetching objects..");
  let storyName = ""
  db.Story.findOne({
    where: {
      id: req.params.id
    }
  }).then(data => {
    storyName = data.title
  })
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
      blanks: data,
      storyName: storyName,
      username: req.params.username
    });
    
    // res.json(data);
  })
});

// getting page for user to read story they created
router.post("/user-story/:username/:id", function(req, res) {
  console.log("posting...");
  // querying for the story they selected
  db.Story.findOne({
    where: {
      id: req.params.id
    }
  }).then(data => {
    console.log("creating story..");
    let storyBody = data.body;
    console.log(storyBody);

    //looping over story and replacing instence (***) with the user inputs from the form's array
    for (let i = 0; i < req.body.userInput.length; i++) {
        storyBody = storyBody.replace(/(\*)(\*)(\*)/, function(match, p1) {
           return `<b>${req.body.userInput[i]}</b>`;
        });
    };
    console.log(storyBody);

    // saving user's story to db under UserStory
    db.UserStory.create({
      username: req.params.username,
      title: data.title,
      body: storyBody
    }).then(newUserInput => {
      console.log(`Added successfully`);
    });

    // rendering story.handlebars with title and story body being pushed in
    res.render("story", {
      username: req.params.username,
      title: data.title,
      story: storyBody
    });
    

  })

});






module.exports = router;