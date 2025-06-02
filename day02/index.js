
const express = require('express')

const app = express()

const student = [
    {
        name:"Vikash",
        course:"BCA",
        Add:"Alwar"
    },
     {
        name:"Rakesh",
        course:"MCA",
        Add:"Punjab"
    },
    {
        name:"Lokesh",
        course:"BCA",
        Add:"Alwar"
    },
    {
        name:"Ravi",
        course:"B.Come",
        Add:"Haryana"
    }
]

app.get('/',(req,res)=>{
    res.send("hello World")
    
})
app.get('/student',(req,res)=>{
        res.send(student)
})
app.get('/news',(req,res)=>{
        res.send([
            {
                status:true,
                data:"News Alwar"
            },
            {
                status:false,
                data:"News delhi"
            }
        ])

})

app.listen("8000")