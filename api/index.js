const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000;
app.listen(3000,()=>{
    console.log(`App is up and runninf at port ${PORT}`)
})

app.post((res)=>{
    res.send("this the real estate app ")
})