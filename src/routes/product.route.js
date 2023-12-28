import * as product  from "../controller/product.controller.js";
import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, process.cwd() + '/uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = file.fieldname + '-'+ Date.now()+file.originalname;
      req.body.image=uniqueSuffix
      cb(null,  uniqueSuffix)
    }
  })

  const upload = multer({ storage: storage })
  
  const productRoute = (app) => {
  
  // app.post('/product',product.create);        // Create
  app.get('/products', product.read);            // Read 
  app.get('/productdetail/:id', product.readDetails);     // Read All details
  app.get('/getProductById/:email',product.getDetailsById);    // Read detail by Id

  app.put('/updateproduct/:id',product.update)    // Update 
  app.delete('/deleteproduct/:id',product.deleteproduct)  // Delete

  app.post('/product',upload.single('image'), product.multerdetails);  // Multer using Single Image
  app.post('/multipleproduct',upload.array('image',10),product.multipleproduct)   // Multer using Array
  
  
}
export default productRoute