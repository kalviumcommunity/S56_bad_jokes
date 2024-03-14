const mongoose = require("mongoose");


const UserSchema = mongoose.Schema({
    JokeId:String,
    Joke:String,
    Rating:Number,
    Category:String,
    DateAdded:String,
    CreatedBy:String

});

const UserModel=mongoose.model("badjoke",UserSchema);

const UserSchemaa=mongoose.Schema({
    name:String
});

const UserModela=mongoose.model("user",UserSchemaa);
module.exports = {
    UserModel,
    UserModela
}

//Joke
//Rating
//Category
//Date added


//users=>user


