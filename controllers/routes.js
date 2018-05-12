var express = require("express");
const {ensureLoggedIn, guest} = require('../helpers/auth');
var router = express.Router();

/* passport is not defined

//authenticating google sign in
router.post('/login', passport.authenticate('local', { successRedirect: '/',failureRedirect: '/login' }));
   
router.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });
*/
   
// basic get route for home page & testing handlebars pages
router.get('/', guest, (req, res) => {
  res.render("index");
})

// router.get('/api/category', (req, res) => {
//   res.render("controller");
// })

// export for server
module.exports = router;