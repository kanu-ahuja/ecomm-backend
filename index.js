import express from "express"
import db from "./src/db/index.js"
import userRoute from "./src/routes/user.route.js"
import cors from "cors"
import productRoute from "./src/routes/product.route.js"

//[ server create]

const app = express()
const port = 5000

app.use(express.json())


app.use('/uploads', express.static(process.cwd()+'/uploads'))


var corsOptions = {
  origin: "*",
}
app.use(cors(corsOptions))


userRoute(app)
productRoute(app)

app.get('/get-products', (req, res) => {
  res.send("Hi i am here")
})


app.get("/",(req,res)=>{
  res.status(200).send("working...")
})


app.listen(port, () => {
  console.log(`working on port ${port}`)
})