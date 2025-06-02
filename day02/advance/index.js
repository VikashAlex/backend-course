let express = require('express')

const app = express();
app.use(express.json())

const users = [
    {
        sr: 1,
        name: "Vikash Kumar"
    },
    {
        sr: 2,
        name: "Lokesh Kumar"
    },
    {
        sr: 3,
        name: "Shivam Sen"
    }
]


app.get('/', (req, res) => {
    res.send("Hello World !")
})
app.get('/user', (req, res) => {
    res.send(users)
})
// use this serios there are method 
// 1 : Get 2: Post 

// Get Method se request  se Backend tak data lena 

// ***body ke through data lena

app.get('/body', (req, res) => {
    const userData = req.body
    res.send(userData)
})

// *** paramas ke through data lena

app.get('/user/:id', (req, res) => {
    const dynamic = req.params.id
    if (dynamic == 1) {
        res.send({
            sr: dynamic,
            name: "Vikash Kumar"
        })
    }
    if (dynamic == 2) {
        res.send({
            sr: dynamic,
            name: "Lokesh Kumar"
        })
    }
    if (dynamic == 3) {
        res.send({
            sr: dynamic,
            name: "Shivam Sen"
        })
    }
    else {
        res.send({
            sr: dynamic,
            name: "Unkwon User"
        })
    }
})

// *** Query ke through data lena

app.get('/query', (req, res) => {
    res.send(req.query)
})


// *************************//

// Post Method se request  se Backend tak data lena 
app.post('/post', (req, res) => {
    res.send("hello World !")
})

// ***body ke through data lena

app.post('/body', (req, res) => {
    res.send(req.body)
})

// *** paramas ke through data lena

app.post('/user',(req,res)=>{
            res.send(users)
})

app.post('/user/:id', (req, res) => {
    const idValue = req.params.id;
    if (idValue == 1) {
        res.send({
            sr: idValue,
            name: "Vikash Kumar"
        })
    }
    else if (idValue==2) {
         res.send({
            sr: idValue,
            name: "Lokesh Kumar"
        })
    }
     else if (idValue==3) {
         res.send({
            sr: idValue,
            name: "Shivam Sen"
        })
    }
    else{
        res.send({
             sr: idValue,
            name: "Unkwon user"
        })
    }
})

// *** Query ke through data lena
app.post('/query',(req,res)=>{
    res.send(req.query)
})

app.use((req, res) => {
    res.status(400).send("Page Not Found !")
})



app.listen("8000")