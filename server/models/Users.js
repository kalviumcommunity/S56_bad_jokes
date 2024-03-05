const mongoose = require("mongoose");


const UserSchema = mongoose.Schema({
    JokeId:String,
    Joke:String,
    Rating:Number,
    Category:String,
    DateAdded:String

});

const UserModel=mongoose.model("badjoke",UserSchema);

module.exports = {
    UserModel
}

//Joke
//Rating
//Category
//Date added