#!/usr/bin/env node
// ----native----
const os = require("os")

//-----package---
const boxen = require("boxen")
const express = require("express")
const app = express()
app.use(express.static(process.cwd()));
//---
//获取 network ip
const interfaces = os.networkInterfaces();
const getNetworkAddress = () => {
	for (const name of Object.keys(interfaces)) {
		for (const interface of interfaces[name]) {
			const {address, family, internal} = interface;
			if (family === 'IPv4' && !internal) {
				return address;
			}
		}
	}
};
const address = getNetworkAddress()

let message = `
    Serving!                                        
    - Local:            http://localhost:9000
    - Network           http://${address}:9000
    Copied local address to clipboard!
`
app.listen(9000,()=>{
    console.log(boxen(message,{
        padding: 1,
        borderColor: 'green',
        margin: 1
    }))
})


