const express = require('express');
const router = express.Router();
const {UserModel}=require("./models/Users.js");
const {UserModela}=require("./models/Users.js");
const { validateData } = require('./Validator.js');
const bodyParser = require('body-parser');
const jwt = require("jsonwebtoken");
router.use(bodyParser.json());


router.get('/getUsers', async(req, res) => {
    let result = await UserModel.find({});
    res.json(result)
   
});
router.get('/getUsersa', async(req, res) => {
    let result = await UserModela.find({});
    res.json(result)
});
router.get('/getUsers/:id', async(req, res) => {
    const id=req.params.id;
    UserModel.findById({_id:id}).then((data) => {res.json(data)}).catch((err) => {res.json(err)})

});
router.post('/post', (req, res) => {   
    console.log(req.body);
    const {error} = validateData(req.body);
    console.log(error);
    if(error){
        return res.status(400).json({error:"Invalid data provided",message:"Invalid data provided",details:error.details.map((error)=>error.message),status:"failed"});
    } 
    UserModel.create(req.body).then((data) => {res.json(data)}).catch((err) => {res.json(err)})    
});

router.post('/postUsers', (req, res) => {
    console.log(req.body);
    UserModela.create(req.body).then((data) => {res.json(data)}).catch((err) => {res.json(err)})    
});

router.put('/updateUser/:id', (req, res) => {
    const id=req.params.id;
    
    UserModel.findByIdAndUpdate({_id:id},
        {JokeId:req.body.JokeId,
        Joke:req.body.Joke,Rating:req.body.Rating
        ,Category:req.body.Category,
        DateAdded:req.body.DateAdded,
        CreatedBy:req.body.CreatedBy})
    .then((data) => {res.json(data)})
    .catch((err) => {res.json(err)})
});

router.delete('/deleteUser/:id', (req, res) => {
    const id=req.params.id;
    UserModel.findByIdAndDelete({
        _id:id}).then((data) => {res.json(data)}).catch((err) => {res.json(err)})
}
);

router.patch('/patch', (req, res) => {
    res.send('PATCH request to the homepage')
});

router.delete('/delete', (req, res) => {
    res.send('DELETE request to the homepage')
});

router.post("/auth", (req, res) => {
    const { username } = req.body;
      const token = jwt.sign({ username: username }, "secretkey")
      res.send(token)
})

module.exports = router;
