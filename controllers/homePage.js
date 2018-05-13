const express = require("express");
const {ensureLoggedIn, guest} = require('../helpers/auth');
const router = express.Router();

// basic get route for home page & testing handlebars pages
router.get('/', guest, (req, res) => {
  res.render("index");
})

// export for server
module.exports = router;