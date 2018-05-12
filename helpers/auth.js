module.exports = {
    // if the user is authenticated then return to the next function in the line. Otherwise go back to the home page
    ensureLoggedIn: function (req,res,next){
        if (req.isAuthenticated()){
            return next();
        }
        res.redirect('/');
    },
    guest: function (req,res,next){
        if (req.isAuthenticated()){
            res.redirect('/stories')
        }else {
            return next();
        }
    }
}