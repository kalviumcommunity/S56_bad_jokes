const express = require('express');
const router = express.Router();
const {UserModel}=require("./models/Users.js");

const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/getUsers', async(req, res) => {
    let result = await UserModel.find({});
    res.json(result)
   
});
router.get('/getUsers/:id', async(req, res) => {
    const id=req.params.id;
    UserModel.findById({_id:id}).then((data) => {res.json(data)}).catch((err) => {res.json(err)})

});

router.post('/post', (req, res) => {    
    UserModel.create(req.body).then((data) => {res.json(data)}).catch((err) => {res.json(err)})    
});

router.put('/updateUser/:id', (req, res) => {
    const id=req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{JokeId:req.body.JokeId,
        Joke:req.body.Joke,Rating:req.body.Rating
        ,Category:req.body.Category,
        DateAdded:req.body.DateAdded})
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

module.exports = router;
