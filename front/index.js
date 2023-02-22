const cors = require('cors');
const express = require("express")
const bodyParser = require("body-parser")

const route = express();
route.use(bodyParser.json())
route.use(cors())

route.post("/getData",function(req,res) {
    console.log(req.body)
    res.json("ok")
})

route.listen(3000,()=>{
    console.log("listening on port 3000")
})