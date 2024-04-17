const express = require("express");
const app = express();


const port = 8080;
const path = require("path");

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res)=>{
    res.render("home");
});
app.get("/ig/:username",(req,res)=>{
    const followers = ["bob", "linda", "maria", "parle"];
    let {username} = req.params;   //accessing the user parameter and adding it to an object
    res.render("instagram",{username, followers});
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