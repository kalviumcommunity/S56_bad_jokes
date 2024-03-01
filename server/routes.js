const express = require('express');
const router = express.Router();
const {UserModel}=require("./models/Users.js");



router.get('/get', (req, res) => {
    res.send('GET request to the homepage')
});

router.get('/getUsers', async(req, res) => {
    let result = await UserModel.find({});
    res.send(result)
   
});
router.post('/post', (req, res) => {
  res.send('POST request to the homepage')
});

router.patch('/patch', (req, res) => {
    res.send('PATCH request to the homepage')
});

router.delete('/delete', (req, res) => {
    res.send('DELETE request to the homepage')
});

module.exports = router;
