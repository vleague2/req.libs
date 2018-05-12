var db = require("../models");

module.exports = function(app) {
  // Find all Authors and return them to the user with res.json
  app.get("/api/story", function(req, res) {
    db.Story.findAll({}).then(function(dbStories) {
      res.json(dbStories);
      console.log(dbStories);
    //   console.log(res);
    });
  });

//   app.get("/api/stories/:id", function(req, res) {
//     // Find one Author with the id in req.params.id and return them to the user with res.json
//     db.Story.findOne({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbStory) {
//       res.json(dbStory);
//     });
//   });

//   app.post("/api/stories", function(req, res) {
//     // Create an Author with the data available to us in req.body
//     console.log(req.body);
//     db.Story.create(req.body).then(function(dbStory) {
//       res.json(dbStory);
//     });
//   });

//   app.delete("/api/stories/:id", function(req, res) {
//     // Delete the Author with the id available to us in req.params.id
//     db.Story.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbStory) {
//       res.json(dbStory);
//     });
//   });

};