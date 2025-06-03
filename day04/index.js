const express = require('express')
const dotenv = require('dotenv')
const app = express()
dotenv.config()

const port = process.env.PORT

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Home Api  ")
})


//1 examples ***
// const pass = process.env.PASSWORD;
// const user = process.env.USERNAME;

// const autho = (req,res,next)=>{
//     if (req.query.users==""||req.query.users==undefined) {
//         res.send("please fill the userName")
//     }
//     else if (req.query.users!=user) {
//         res.send("please enter the currect userName")
        
//     }
//     else if (req.query.pass==""|| req.query.pass==undefined) {
//         res.send("please fill the password")
//     }
//     else if (req.query.pass!=pass) {
//         res.send("please enter currect password")
//     }
//     else{
//         next()
//     }
// }
// app.get('/user',autho,(req,res)=>{
//     res.send(
//         {
//             userName:user,
//             passwrord:pass
//         }
//     )
// })

//2 example ***
const token = (req,res,next)=>{
        if(req.query.user==""||req.query.user==undefined){
            res.send("please fill userName")
        }
        else if(req.query.user!="vikash"){
            res.send("please fill currect userName")
        }
        else if(req.query.pass==""||req.query.pass==undefined){
            res.send("please fill password")
        }
        else if(req.query.pass!="12345"){
            res.send("please currect password")
        }
        else{
            next()
        }
}
app.get('/user',token,(req,res)=>{
    res.send({
            userName:req.query.user,
            passwrod:req.query.pass
    })
})



app.listen(port)