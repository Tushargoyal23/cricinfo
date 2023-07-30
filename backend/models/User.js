const mongoose = require('mongoose');
const { Schema } = mongoose;

// creating a schema 
const UserSchema = new Schema({
    name : {
        type: String,
        required:true
    },
    location:{
        type: String,
        required:true
    },
    email :{
        type: String,
        required:true
    },
    password :{
        type: String,
        required:true
    },age:{
        type: Number
    },experiance:{
        type: String
    },team :{
        type:String
    },type :{
        type:String
    },fav_cricketer :{
            type:String
    },fav_batsman :{
            type:String
    },fav_bowler :{
            type:String
    },fav_alrounder :{
            type:String
    },fav_wicketKeeper :{
            type:String
    },fav_fielder :{
            type:String
    },fav_captain :{
            type:String
    },moment :{
            type:String
    },formats :{
            type:String
    },contact:{
        type:String
    }
    ,tel :{
        type:Number
    },
    address :{
        type: String
    },
    city :{
        type:String
    },
    work:{
        type:String
    },
    position :{
        type:String
        },
    contact_work :{
        type:Number
    },
    work_place :{
        type:String
    },
    Work_city :{
        type:String
    }
});

module.exports = mongoose.model('user' , UserSchema)