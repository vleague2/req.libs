const express = require("express");
const router = express.Router();
const db = require("../models");

// getting page for which catagory the user wants
router.get("/", (req, res) => {
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
    console.log("fetching objects..");

  // sequelize to query the stories for the drop down menu
  db.Story.findAll({
    where: {
      category: req.params.id
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
router.get("/user-input/:id", (req, res) => {
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
    blanks: data
    });
  })
});

// getting page for user to read story they created
router.post("/user-create-story/", function(req, res) {
  console.log("posting...");

  // looping over the user's inputs
  for (i=0;i<req.body.userInput.length;i++) {

    // pushing the users's inputs to the db under the userInputs table
    db.UserInput.create({
      userInput: req.body.userInput[i]
    }).then(newUserInput => {
      console.log(`Added successfully`);
  });
}
});



module.exports = router;