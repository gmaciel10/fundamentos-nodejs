const express = require('express')

const app = express()
app.use(express.json())

app.put('/courses/:id', (req,res)=>{
    const body = req.params
    console.log(body)
    return res.json([
        "curso 1",
        "curso 2",
        "curso 3",
        "curso 4",
        "curso 5",
    ])
})

app.get('/courses', (req,res)=>{
    const query = req.query
    console.log(query)
    return res.json([
        "curso 1",
        "curso 2",
        "curso 3",
        "curso 4",
        "curso 6",
    ])
})

app.listen(8080)