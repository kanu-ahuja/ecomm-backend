import * as product  from "../controller/product.controller.js";
const productRoute = (app) => {
    app.post('/product', product.create);
    app.get('/products', product.read);
    app.get('/productdetail/:id', product.readDetails);
}
export default productRoute