const express = require("express");
const app = express();

app.set("port",4000);
app.listen(app.get("port"));
console.log("escuchando desde puerto"+ app.get("port"));
app.get("/actor", async(req,res)=>{
    })