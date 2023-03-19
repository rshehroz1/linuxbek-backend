const express = require("express")
const app = express()
const PORT = 3001

app.get("/", (req, res)=>{
    res.send("hi")
})

app.listen(PORT, ()=>{
    console.log(`server connected port ${PORT}`);
})