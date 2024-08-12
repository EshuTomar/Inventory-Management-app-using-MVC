const express = require('express');

const server = express();

server.get('/', (req,res)=>{
    return res.send("Hello world")
})
server.listen(3000, ()=>{
    console.log("server is listening at port: 3000")
})