const express = require('express')
const app = express()

let port = 8080;



app.listen(port,()=>{
    console.log("app is listening at ", port);
});

app.get('/', (req, res)=> {
    res.send('You contacted root path (/)')
  })




