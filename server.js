const express = require('express')
const app = express()
const dotenv = require('dotenv');
const port = process.env.port||3000

app.get('/ping', (req, res) => {
    try{
        res.send('pong')
    }catch(err){
        res.send(err)
    }
})

app.get('/', (req, res) => {
    try{
        res.send('Hello World!')
    }catch(err){
        res.send(err)
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

