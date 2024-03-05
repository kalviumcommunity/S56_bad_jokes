const express = require('express');
const router = express.Router();
const {UserModel}=require("./models/Users.js");

const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/getUsers', async(req, res) => {
    let result = await UserModel.find({});
    res.json(result)
   
});
router.post('/post', (req, res) => {
    
        UserModel.create(req.body).then((data) => {res.json(data)}).catch((err) => {res.json(err)})
        
    
});
router.get('/getUsers', (req, res) => {
    
    UserModel.find({}).then((data) => {res.json(data)}).catch((err) => {res.json(err)})
    
});


router.patch('/patch', (req, res) => {
    res.send('PATCH request to the homepage')
});

router.delete('/delete', (req, res) => {
    res.send('DELETE request to the homepage')
});

module.exports = router;
