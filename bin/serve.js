#!/usr/bin/env node
// ----native----

//-----package---
const boxen = require("boxen")
const express = require("express")
const app = express()
app.use(express.static(process.cwd()));
//---
let message = `
    Serving!                                        
    - Local:            http://localhost:9000
    Copied local address to clipboard!
`
app.listen(9000,()=>{
    console.log(boxen(message,{
        padding: 1,
        borderColor: 'green',
        margin: 1
    }))
})


