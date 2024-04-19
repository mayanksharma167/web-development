const express = require("express");
const app = express();


const port = 8080;
const path = require("path");

app.use(express.static("public"));
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res)=>{
    res.render("home");
});
app.get("/ig/:username",(req,res)=>{
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data){
        res.render("instagram",{data});
    }
    else{
        res.render("error")
    }    
})
app.get("/hello",(req, res)=>{
    res.send("Hello dosto")
});
app.get("/rolldice",(req, res)=>{
    let diceVal = Math.floor(Math.random()*6) + 1;
    res.render("rolldice",{diceVal});
});


app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});