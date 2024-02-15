import * as product from "../controller/product.controller.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.cwd() + '/src/uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = file.fieldname + '-'+ Date.now()+file.originalname;
    req.body.image=uniqueSuffix
    cb(null,  uniqueSuffix)
  }
})
const upload = multer({ storage: storage })

const productRoute = (app) => {
  app.post("/product", product.create);        
  app.post("/multerProduct", upload.single("image"), product.multerProduct);    
  app.get("/getProduct", product.read);     
  app.get("/getProductbyid/:id", product.readDetails);      
  app.delete("/deleteUser/:id", product.deleteproduct); 
 };
export default productRoute;
