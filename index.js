const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const {Server} =  require("socket.io");
const { Socket } = require("dgram");
app.use(cors());

const server = http.createServer(app); //passing the express to http to create server

const io = new Server(server , {
    cors: {
        origin : "http://localhost:3000",
        methods : ["GET" , "POST"],
    }
});  // for the issue we might get working with socket.io


io.on("connection",(socket)=>{
    console.log(`USER CONNECTED : ${socket.id}`); // for connection we are using the on event and also when this action takes place we are consoloing the id of the connected socket

    socket.on("join_room", (data)=>{
        socket.join(data);
        console.log(`user with id ${socket.id} joined room ${data} `);
    })

    socket.on("send_message",(data)=>{
        // console.log(data);
        socket.to(data.room).emit("receive_message",data)
    })
    socket.on("disconnect", ()=>{
        console.log("user is disconnected", socket.id);
    })
})  

server.listen(3001, ()=>{
    console.log("listening");
})