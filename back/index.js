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
route.get("/sendData",function(req,res) {
    let data = [{
        clientUuid: '67bb0c2a-e344-43b0-a3f4-c0abf0231a81',
        date: [ 2023, 23, 2, 14, 41, 4 ],
        tagName: 'BODY#page-top > HEADER > DIV > DIV > A',
        tagType: 'button',
        actionType: 'Mouse hover',
        AcionUuid: 'dd6e4f54-2a18-4e07-90e5-6f50f617b6f8',
        text: 'click me',
        },{
            clientUuid: '67bb0c2a-e344-43b0-a3f4-c0abf0231a81',
            date: [ 2023, 23, 2, 14, 41, 4 ],
            tagName: '#navbarResponsive > ul > li:nth-child(1) > a',
            tagType: 'button',
            actionType: 'Mouse hover',
            AcionUuid: 'dd6e4f54-2a18-4e07-90e5-6f50f617b6f8',
            text: 'click me',
            },{
                clientUuid: '67bb0c2a-e344-43b0-a3f4-c0abf0231a81',
                date: [ 2023, 23, 2, 14, 41, 4 ],
                tagName: '#navbarResponsive > ul > li:nth-child(2) > a',
                tagType: 'button',
                actionType: 'Mouse hover',
                AcionUuid: 'dd6e4f54-2a18-4e07-90e5-6f50f617b6f8',
                text: 'click me',
                }
    

       
        ]

      

    console.log(req.body)
    res.json(data)
})

route.listen(3000,()=>{
    console.log("listening on port 3000")
})