import express from "express"
import db from "./src/db/index.js"
import cors from "cors"
import productRoute from "./src/routes/product.route.js"

//[ server create]

const app = express()
const port = 9000

app.use(express.json())

app.use('/uploads', express.static('src/uploads'))

var corsOptions = {
  origin: "*",
}
app.use(cors(corsOptions))
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