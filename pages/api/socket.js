import { Server } from "socket.io";

// Here is where the magic happens

// if you want to know how sockets works: https://socket.io/docs/v4/

// But a important thing to know is that: Socket.IO provides a convenient way to send an event and receive a response:

// Sender

// socket.emit("hello", "world", (response) => {
//   console.log(response); // "got it"
// });

// Receiver

// socket.on("hello", (arg, callback) => {
//   console.log(arg); // "world"
//   callback("got it");
// });


const SocketHandler = (req, res) => {
  const { option } = req.query;
  switch (option) {
    case "connection":
      if (res.socket.server.io) {
        //Socket is already running
      } else {
        //Initialize socket
        const io = new Server(res.socket.server);
        res.socket.server.io = io;

        io.on("connection", (socket) => {
          
          //join room
          socket.on("join-room", (room) => {
            socket.join(room);
          });

          //send player name and id
          socket.on("send-to-room", (msg) => {         
            socket
              .in(msg.room)
              //each player will have an uptated list of all players
              .emit("update-players", { name: msg.name, id: msg.id });
          });

          //update list of players
          socket.on("send-to-host", (msg) => {
            socket
              .in(msg.room)
              .emit("get-new-player", { name: msg.name, id: msg.id });
          });
          
          //send chat mensage to room
          socket.on("send-chat", (msg) => {
            socket
              .in(msg.room)
              .emit("get-chat", { name: msg.name, msg: msg.msg });
          });

          socket.on("send-players", (msg) => {
            socket.in(msg.room).emit("get-players", msg.msg);
          });

          //send raffled numbers
          socket.on("send-bingo-card", (msg) => {   
            socket.to(msg.to).emit("get-bingo-card", msg.cartela);
          });

          //send start signal
          socket.on("send-start", (room) => {
            socket.in(room).emit("start-game");
          });

          //send raffled balls
          socket.on("send-raffleds", (room, raffleds) => {
            socket.in(room).emit("get-raffleds", raffleds);
          });

          //send winner to all players
          socket.on("send-bingo", (room, name) => {
            socket.in(room).emit("get-bingo", name);
          });
        });
      }
      break;



    case "room":
      //verify if room is already set
      if (res.socket.server.io) {

        //gets room id
        const { room } = req.query;

        //gets all rooms id 
        const allRooms = Array.from(res.socket.server.io.sockets.adapter.rooms);

        //get all active rooms
        const activeRooms = allRooms.filter((room) => !room[1].has(room[0]));
        const activeRoomNames = activeRooms.map((el) => el[0]);

        //finds is there is a room with same id
        const there_is =
          activeRoomNames.findIndex((el) => el == room) == -1 ? false : true;
        
        //returns condition
        res.status(200).json({ thereIs: there_is });
      }
      break;
  }
  res.end();
};

export default SocketHandler;
