const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
    position:{
        type:Number,
        required:true,
        unique:true
    },
    team:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    matches:{
        type:Number,
        required:true
    },
    points:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:true,
    }
})

const TeamsRanking = new mongoose.model("TeamRanking",teamSchema)

module.exports = TeamsRanking;