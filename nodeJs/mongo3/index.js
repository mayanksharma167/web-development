const express = require("express");
const app = express();
const mongoose = require('mongoose');
const methodOverride = require("method-override");
const path = require("path");
const Chat = require("./models/chats");

app.set("views", path.join(__dirname,"views"));
app.set("view engine", ("ejs"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

main()
.then((res)=>{console.log("Connection successful")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}


app.listen(8080,()=>{
    console.log("server is listening at 8080");
})

app.get("/", (req,res)=>{
    res.send("Root route working");
})

//Show All chats
app.get("/chats",async (req,res)=>{
    let chats = await Chat.find();
    res.render("index",{chats});
})

//New Route
app.get("/chats/new",(req,res)=>{
    res.render("new");
})
//create route
app.post("/chats",(req,res)=>{
    let {to, from, msg} = req.body;
    let newChat = new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at: new Date()
    });
    newChat.save();
    res.redirect("/chats");
})

//edit route
app.get("/chats/:id/edit",async(req,res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit",{chat});
})

//update route
app.put("/chats/:id",async(req,res)=>{
    let {msg} = req.body; 
    let {id} = req.params;
    
    let updtedChat =await Chat.findByIdAndUpdate(id,{msg:msg},{runValidators:true, new:true});
    console.log(updtedChat);
    res.redirect("/chats");
})
// delete route
app.delete("/chats/:id",async(req,res)=>{
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
})