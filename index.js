import express from "express"
import db from "./src/db/index.js"

const app = express()
const port = 5000

app.get('/get-products',(req,res)=>{
    res.send("Hi i am here")
})

app.listen(port, () => {
  console.log(`workiong on port ${port}`)
})