const express = require('express');
const router = express.Router()
const User = require('../models/User')
const { body , validationResult } = require('express-validator');

router.post("/createuser",[
    body('email').isEmail(),
    body('password').isLength({min: 5}),
    
] ,async (req , res)=>{
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()});
    }
    try{
        await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            location:req.body.location
        })
        res.json({Success:true});
    }catch (error){
        console.log(error);
        res.json({Success:false});
    }
})

router.post("/login",[
    body('email').isEmail(),
    body('password').isLength({min: 5}),
    
] ,async (req , res)=>{
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()});
    }
    let email = req.body.email;
    try{
        let userdata = await User.findOne({email});
        if(!userdata){
            return res.status(400).json({errors : "Try with correct credentials"});
        }
        if(req.body.password !== userdata.password){
            return res.status(400).json({errors : "Try with correct password"});
        }
        return res.json({success:true});
    }catch (error){
        console.log(error);
        res.json({Success:false});
    }
})
module.exports = router;