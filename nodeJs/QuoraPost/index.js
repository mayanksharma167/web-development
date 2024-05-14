const express  = require("express");
const app = express();
const port = 8080;
const path = require("path");//FO
const { v4: uuidv4 } = require('uuid');

const methodOverride = require("method-override");
app.use(methodOverride('_method'));

app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");

app.set("views",path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        id: uuidv4(),
        username: "Mayank",
        content:  "i am Ceo"
    },
    {
        id: uuidv4(),
        username: "Arijit",
        content:  "i am Cto"
    },
    {
        id: uuidv4(),
        username: "Satyansh",
        content:  "i am Cfo"
    }

]

app.listen(port, ()=>{
    console.log("listening to port 8080");
})

app.get("/",(req,res)=>{
    res.send("server working well");
})

app.get("/posts",(req,res)=>{
    res.render("index",{posts});
})
app.get("/posts/new",(req,res)=>{
    res.render("new");
})

app.post("/posts",(req,res)=>{
    let id = uuidv4();
    let {username, content} = req.body
    posts.push({id,username, content});
    res.redirect("/posts");
})
app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("show",{post});
})
app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("edit",{post})

})
app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=> id===p.id);
    post.content = newContent;
    res.redirect("/posts");
})
app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=> id !== p.id);
    res.redirect("/posts");
})

