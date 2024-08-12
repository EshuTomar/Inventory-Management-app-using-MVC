// const express = require('express');

import express from 'express'    /*------------ ES6 syntx--------------*/ 
import ProductController from './src/controllers/product.controller.js';
import path from 'path';


const server = express();

//setting up view-engine settings
server.set('view engine', "ejs");
server.set("views",path.join(path.resolve(),'src','views'));

// create an instance of ProductController
const productController = new ProductController(); 
server.get('/', (productController.getProducts));

server.use(express.static('src/views'));


server.listen(3000, ()=>{
    console.log("server is listening at port: 3000")
})