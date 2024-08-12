//we'll use es6 module method here
import path from 'path';
import ProductModel from '../models/product.model.js';

class ProductController{

    getProducts(req,res){
        let products = ProductModel.get();
        console.log(products);


        // console.log(path.resolve());
        return res.sendFile(path.join(path.resolve(),"src",'views',"products.html" ));
    
    }
}

export default ProductController;