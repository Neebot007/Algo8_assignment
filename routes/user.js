const express=require('express');
const router=express.Router();
const User=require('../model/user');
const auth=require('../controller/auth');
router.get('/login', (req, res) => {
    res.render('login')
});
router.post('/login',auth);
router.post('/signup',async(req,res)=>{
    const newUser=await  User.create({username:req.body.username,password:req.body.password});
    res.render('home',{newUser});
})
router.post('/delete',async(req,res)=>{
    res.clearCookie('token');
    await User.findByIdAndDelete(req.body.id);
    res.render('signup');
    
})
router.post('/logout',(req,res)=>{
    res.clearCookie('token');
    res.render('login');
})
router.get('/signup',(req,res)=>{
    res.render('signup')
})
module.exports=router;

