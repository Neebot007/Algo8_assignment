const User=require('../model/user');
const jwt = require('jsonwebtoken');
const auth=async function (req,res,next){
    try{
        const newUser=await User.findOne({username:req.body.username});
        if(newUser==null || newUser.password!=req.body.password){
            return res.render('login');
        }
        const token = jwt.sign({ username:req.body.username },'secret');
        res.cookie('token',token,'secret');
        return res.render('home',{newUser});
    }
    catch(err){
        console.log(err);
        res.render('login');
    }
}
module.exports=auth;