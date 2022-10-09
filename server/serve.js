const express = require("express");
const path = require("path")

const app = express();

app.get('/',(request,response)=>{
  response.sendFile(path.resolve(__dirname,'./static/callback.html'));
})

app.listen(8080,()=>{
  console.log("server listen on 8080");
})