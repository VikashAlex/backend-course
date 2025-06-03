// middelwaare in express js

let express = require("express");

const app = express();
app.use(express.json());

//1 simple way use middleware  ***

// let login = true;
// app.use((req,res,next)=>{
//     login?next():res.send("please login");
// })

// app.get('/',(req,res)=>{
// res.send("hello world !")
// })

//2 chack validation for middleware ***
// const password = 12345;
// const token = (req,res,next)=>{
//         if (req.query.pass==""|| req.query.pass==undefined) {
//             res.send("plase the fill the password")
//         }
//         if (password!=req.query.pass) {
//             res.send("please correct passord")
//         }
//         else{
//             next()
//         }
// }

// app.use(token)

// app.get('/',(req,res)=>{
//     res.send("Home Api")
// })

//3 chack two validation  ***

// const password = 12345;
// const userName = "vikash"

// const autho = (req,res,next)=>{
//     if (req.query.pass=="" || req.query.pass==undefined) {
//         res.send("Please fill the Password and Get Your Api")
//     }
//     else if (req.query.pass!=password) {
//         res.send("Please fill the correct password ")
//     }
//     else if (req.query.user==""|| req.query.user==undefined) {
//         res.send("Please fill the userName and Get Your Api")
//     }
//      else if (req.query.user!=userName) {
//         res.send("Please fill the correct userName ")
//     }
//     else{
//         next()
//     }
// }
// app.use(autho)

// app.get('/',(req,res)=>{
//         res.send({
//             status:1,
//             name:"Vikash",
//             password:"12345"
//         })
// })

// 4 ony check validation particular router

// const users = [
//   {
//     sr: 1,
//     name: "Vikash Kumar",
//     add: "Pathorda Alwar",
//     course: "BCA",
//   },
//   {
//     sr: 2,
//     name: "Lokesh Kumar",
//     add: "Ramgarh Alwar",
//     course: "BCA",
//   },
//   {
//     sr: 3,
//     name: "Pankaj yadav",
//     add: "Delhi India",
//     course: "B.tech",
//   },
// ];
// const pass= 123456;
// const validation  = (req,res,next)=>{
//         if (req.query.pass==""|| req.query.pass==undefined) {
//             res.send("Pehale Password Darj Kare")
//         }
//         else if (req.query.pass!=pass) {
//             res.send("Passwor sahi dale ")
//         }
//         else{
//             next()
//         }
// }
// app.get("/", (req, res) => {
//   res.send("Home Api Hello World !");
// });

// app.get("/user",validation, (req, res) => {
//   res.send(users);
// });

// app.get("/user/:id", (req, res) => {
//   const value = req.params.id;
//   if (value == 1) {
//     res.send({
//       sr: 1,
//       name: "Vikash Kumar",
//       add: "Pathorda Alwar",
//       course: "BCA",
//     });
//   } else if (value == 2) {
//     res.send({
//       sr: 2,
//       name: "Lokesh Kumar",
//       add: "Ramgarh Alwar",
//       course: "BCA",
//     });
//   } else if (value == 3) {
//     res.send({
//       sr: 3,
//       name: "Pankaj yadav",
//       add: "Delhi India",
//       course: "B.tech",
//     });
//   }
//   else{
//     res.send({
//       sr: value,
//       name: "Unkwon User",
//       add: " not Found",
//       course: "i dont kwon",
//     });
//   }
// });



// this is my port number

app.listen("8000");
