const mongoose = require('mongoose');
const Chat = require("./models/chats.js");

main()
.then((res)=>{console.log("Connection successful")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}


let allChats = [
    {
        from: "Alice",
        to: "Bob",
        msg: "Hey Bob, how's it going?",
        created_at: new Date("2024-06-01T10:15:00")
    },
    {
        from: "Charlie",
        to: "Dave",
        msg: "Hey Dave, I'm good! How about you?",
        created_at: new Date("2024-06-01T10:16:00")
    },
    {
        from: "Eve",
        to: "Frank",
        msg: "Doing well, just got back from a trip.",
        created_at: new Date("2024-06-01T10:17:00")
    },
    {
        from: "Grace",
        to: "Hank",
        msg: "Nice! Where did you go?",
        created_at: new Date("2024-06-01T10:18:00")
    },
    {
        from: "Ivy",
        to: "Jack",
        msg: "Went hiking in the mountains.",
        created_at: new Date("2024-06-01T10:19:00")
    },
    {
        from: "Kara",
        to: "Liam",
        msg: "That sounds amazing! How was it?",
        created_at: new Date("2024-06-01T10:20:00")
    },
    {
        from: "Mona",
        to: "Nick",
        msg: "It was beautiful, the views were stunning.",
        created_at: new Date("2024-06-01T10:21:00")
    },
    {
        from: "Olivia",
        to: "Paul",
        msg: "I bet! We should plan a trip together sometime.",
        created_at: new Date("2024-06-01T10:22:00")
    },
    {
        from: "Quinn",
        to: "Rachel",
        msg: "Absolutely! Let's do it.",
        created_at: new Date("2024-06-01T10:23:00")
    },
    {
        from: "Steve",
        to: "Tina",
        msg: "Great! I'll start looking into places.",
        created_at: new Date("2024-06-01T10:24:00")
    }
];

Chat.insertMany(allChats);
