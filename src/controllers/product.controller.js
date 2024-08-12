//we'll use es6 module method here
import path from 'path';


class ProductController{

    getProducts(req,res){
        console.log(path.resolve());
        
        return res.sendFile(path.join(path.resolve(),"src",'views',"products.html" ));
    
    }
}

export default ProductController;