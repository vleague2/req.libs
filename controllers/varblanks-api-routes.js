var db = require("../models");

module.exports = function(app) {
  // Find all Authors and return them to the user with res.json
  app.get("/api/var_blanks/:id", function(req, res) {
    db.Post.findOne({
        where: {
          id: req.params.id
        },
        include: [db.Author]
      }).then(function(dbPost) {
        res.json(dbPost);
      });
  });

};