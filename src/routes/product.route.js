import * as product  from "../controller/product.controller.js";
import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'C:/kanu/express/uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })

  const upload = multer({ storage: storage })

  
const productRoute = (app) => {
    app.post('/product',upload.single('image'), product.create);        // Create
    app.get('/products', product.read);            // read 
    app.get('/productdetail/:id', product.readDetails);     // Read All details
    app.get('/getProductById/:email',product.getDetailsById);    // Read detail by Id

    app.put('/updateproduct/:id',product.update)    // Update 
    app.delete('/deleteproduct/:id',product.deleteproduct)  // Delete
}
export default productRoute