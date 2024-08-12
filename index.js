// const express = require('express');

import express from 'express'    /*------------ ES6 syntx--------------*/ 
import ProductController from './src/controllers/product.controller.js';


const server = express();

// create an instance of ProductController
const productController = new ProductController(); 
server.get('/', (productController.getProducts));

server.use(express.static('src/views'));


server.listen(3000, ()=>{
    console.log("server is listening at port: 3000")
})