//making the connection
const mongoose = require('mongoose');

main()
.then(()=> {
    console.log("connection successful.");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

//declaring the schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
  
}); 

//creating a model to make documents
const User = mongoose.model("User", userSchema);
const Employee = mongoose.model("Employee", userSchema);

// const user1 = new User({
//     name: "Adam", 
//     email: "adam@yahoo.in", 
//     age: 43
// });

// const user2 = new User({
//     name: "Eve", 
//     email: "eve@google.com", 
//     age: 48 
// });
// user1.save();
// user2.save();

// User.insertMany([
// { name: "parul", email: "parul@yahoo.in", age: 45 },
// { name: "max", email: "max@google.com", age: 49 },
// { name: "John", email: "john@outlook.com", age: 30 },
// { name: "Jane", email: "jane@hotmail.com", age: 25 },
// ]).then(res =>{
//     console.log(res);
// });


User.find({})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});

User.updateOne({name:"max"},{age:24})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});