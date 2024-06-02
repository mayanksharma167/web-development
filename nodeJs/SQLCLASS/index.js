const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: ""
  });

  let getRandomUser = ()=> {
    return [
      faker.string.uuid(),
      faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password(),
    ]; 
  };  

const port = "8080"
app.listen(port,()=>{
    console.log("server is listening at port 8080");
})

//HOMEPAGE
app.get("/",(req,res)=>{

    let q = "SELECT Count(*) FROM user";
    try{
        connection.query(q,(err,result)=>{
            if (err) throw err;
            let count = result[0]["Count(*)"];
            console.log(result[0]["Count(*)"]);
            res.render("home",{count});
        });
    }catch(err){
        console.log(err);
        res.send("Some error in homepage")
    }
    })

    //Show All users 
app.get("/user", (req,res)=>{
    q = "SELECT * FROM user";
    try{
        connection.query(q,(err,users)=>{
            if (err) throw err;
            console.log("success");
            res.render("showusers",{users});
        });
    }catch(err){
        console.log(err);
        res.send("Some error in homepage")
    }
})
//Add Form
app.get("/user/add",(req,res)=>{
    res.render("add");
})
//Send Post request and send form
app.post("/user",(req,res)=>{
    let {id, username, email, password} = req.body;
    let q = `insert into user(id, username, email, password)values('${id}', "${username}", "${email}", "${password}");`;
    try{
        connection.query(q,(err,result)=>{
            if (err) throw err;
            res.redirect("/user");
        });
    }catch(err){
        console.log(err);
        res.send("Some error in homepage")
    }
})

// Edit route
app.get("/user/:id/edit",(req,res)=>{
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query(q,(err,result)=>{
            if (err) throw err;
            let user = result[0];
            res.render("edit",{user});
        });
    }catch(err){
        console.log(err);
        res.send("Some error in homepage")
    }
})

//update route
app.patch("/user/:id",(req,res)=>{
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    let {password: formpass, username:newUsername} = req.body;
    try{
        connection.query(q,(err,result)=>{
            if (err) throw err;
            let user = result[0];
            if(formpass != user.password){
                res.send("Worng Password");
            }else{
                let q2 = `UPDATE user SET username="${newUsername}" WHERE id='${id}'`;
                connection.query(q2,(err,result)=>{
                    if (err) throw err;
                    res.send(result);
                })
            }
        });
    }catch(err){
        console.log(err);
        res.send("Some error in homepage")
    }
})

