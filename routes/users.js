var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');
const User = require('../models/users');
const {checkBody}=require('../modules/checkBody');

router.post('/signup', (req, res) => {
    if (!checkBody(req.body,["name","email","password"])) {
         res.json({
            result: false,
            error: 'Missing or empty fields',
        });
        return
    }
    User.findOne({ email: req.body.email }).then(data => {
        if(data===null){
                const newUser = new User({
                name: req.body.name, 
                email:req.body.email,
                password:req.body.password
            });
          
            newUser
              .save()
              .then((data) => {
                res.json({result:true, newUser: data });
              })
        }else{

            res.json({ result: false, error: 'User already exists' });
        }
        
       });
  }); 
  

  router.post('/signin', (req, res) => {
    const email=req.body.email;
    const password=req.body.password;
    if (!checkBody(req.body,['email','password'])) {
        return res.json({
            result: false,
            error: 'Missing or empty fields',
        });
    }
    User.findOne({ email: { $regex: new RegExp(req.body.email, 'i') }}).then(data => {
        if(data===null){
            res.json({ result: false, error: 'User not found' });
        }else if(data.password !== password){

            res.json({ result: false, error: 'User not found' });
        }
        
        else{

            res.json({ result: true });
        }
        
       });
  }); 

module.exports = router;