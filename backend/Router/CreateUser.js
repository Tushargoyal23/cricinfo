const express = require('express');
const router = express.Router()
const User = require('../models/User')
const { body , validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware')
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
        // console.log('k');
        if(req.body.password !== userdata.password){
            return res.status(400).json({errors : "Try with correct password"});
        }
        const data = {
            user:{
                id:userdata.id,
                name:userdata.name
            }
        }
        const authToken = jwt.sign(data, 'secretKey');
        // localStorage.setItem("authToken" , json.authToken);
        return res.json({success:true , authToken:authToken });
    }catch (error){
        console.log(error);
        res.json({Success:false});
    }
})
router.post("/editdetails", authMiddleware, async(req , res)=>{
    try{
        const userId = req.user.id; 
    let user = await User.findOne({ _id: userId });
        if(user){
            user.name = req.body.name || user.name,
            user.location = req.body.location || user.location,
            user.age = req.body.age || user.age;
            user.experiance = req.body.experiance || user.experiance;
            user.team = req.body.team || user.team;
            user.type = req.body.type || user.type;
            user.fav_cricketer = req.body.fav_cricketer || user.fav_cricketer;
            user.fav_batsman = req.body.fav_batsman || user.fav_batsman;
            user.fav_bowler = req.body.fav_bowler || user.fav_bowler;
            user.fav_alrounder = req.body.fav_alrounder || user.fav_alrounder;
            user.fav_fielder = req.body.fav_fielder || user.fav_fielder;
            user.fav_captain = req.body.fav_captain || user.fav_captain;
            user.fav_wicketKeeper = req.body.fav_wicketKeeper || user.fav_wicketKeeper;
            user.moment = req.body.moment || user.moment;
            user.formats = req.body.formats || user.formats;
            user.contact = req.body.contact || user.contact;
            user.tel = req.body.tel || user.tel;
            user.address = req.body.address || user.address;
            user.city = req.body.city || user.city;
            user.work = req.body.work || user.work;
            user.work_place = req.body.work_place || user.work_place;
            user.Work_city = req.body.Work_city || user.Work_city;
            user.contact_work = req.body.contact_work || user.contact_work;
            user.position = req.body.position || user.position;
        }
        await user.save();
        // Return the updated user data in the response
        res.json({Success:true  , updatedData: user});
    }catch(error){
        console.log(error);
        res.json({Success:false});
    }
})
module.exports = router;