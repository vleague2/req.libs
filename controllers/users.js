const express = require('express');
const router = express.Router();
const path = require('path');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const db = require('../models');

/************************ LOCAL AUTH ROUTES****NO TOUCH***************************** */


router.get('/login', (req, res)=>{
    res.render('users/login');
}); 
router.get('/register', (req, res)=>{
    res.render('users/register');
}); 

router.get('/logout', (req, res)=>{
    req.logout();
    res.redirect('/');
}); 

router.post('/register', (req, res) =>{
    let errors = [];
    // This requires the password to be longer than 5 characters
    if (req.body.password.length < 5){
        errors.push({
            text:"Password must be at least 5 characters"
        });
    }
    if (errors.length > 0){
        //This will allow us to refresh the page but keep the users info populated if they cause an error.
        res.render('users/register', {
            errors:errors,
            userName:req.body.userName,
            email:req.body.email

        });

    } else {
        // Find if a user already exists
        db.User.findOne({
            where:{
                username: req.body.username
            }
        }).then((user)=>{
            // If a user exists re-render the page and keep their fields populated
            if (user){
                errors.push({
                    text:"User already exists, please choose a new username"
                });
                res.render('users/register', {
                    errors:errors,
                    userName:req.body.userName,
                    email:req.body.email
        
                });
            } else {
                let insecurePass = req.body.password;
                bcrypt.genSalt(10, (err, salt) =>{
                    bcrypt.hash(insecurePass, salt, (err,hash)=>{
                        let newUser = {
                            username:req.body.userName.toLowerCase(),
                            email:req.body.email,
                            password:hash
                        }
                        db.User.create(newUser).then(function(user) {
                            res.redirect('/auth/login');
                          });
                    });
                });
            }
        })
    }


    
});

router.post('/login', (req, res, next) =>{
    db.User.findOne({
        where:{
            username: req.body.userName.toLowerCase()
        }
    }).then((user)=>{
        let userId = user.dataValues.id;
        if (user){
            // calling passport authenticate method
            passport.authenticate('local',{
                successRedirect:"/stories",
                failureRedirect:"/auth/login",
                failureFlash:"Invalid username or password",
                successFlash:`Welcome ${user.dataValues.username}`
            })(req,res,next);
        }
    });
});
/********************************************************* */

/*****************GOOGLE AUTH ROUTES************************** */

module.exports = router;