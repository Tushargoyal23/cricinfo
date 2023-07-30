const express = require('express');
const router = express.Router()

router.post('/userdata' , (req , res)=>{
    try{
        // console.log(global.userDetails)
        res.send([global.userDetails])
    }catch(error){
        console.log(error)
        res.send("Server error")
    }
})

module.exports = router;