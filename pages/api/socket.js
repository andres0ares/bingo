import { Server } from "socket.io";

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
          socket.on("join-room", (room) => {
            socket.join(room);
          });

          socket.on("send-to-room", (msg) => {
            //send player name and id
            socket
              .in(msg.room)
              .emit("update-players", { name: msg.name, id: msg.id });
          });

          socket.on("send-to-host", (msg) => {
            console.log(msg);
            socket
              .in(msg.room)
              .emit("get-new-player", { name: msg.name, id: msg.id });
          });

          socket.on("send-chat", (msg) => {
            socket
              .in(msg.room)
              .emit("get-chat", { name: msg.name, msg: msg.msg });
          });

          socket.on("send-players", (msg) => {
            socket.in(msg.room).emit("get-players", msg.msg);
          });

          socket.on("send-cartela", (msg) => {
            //send raffled numbers
            socket.to(msg.to).emit("get-cartela", msg.cartela);
          });

          socket.on("send-start", (room) => {
            socket.in(room).emit("start-game");
          });

          socket.on("send-raffleds", (room, raffleds) => {
            //sen raffled balls
            socket.in(room).emit("get-raffleds", raffleds);
          });

          socket.on("send-bingo", (room, name) => {
            socket.in(room).emit("get-bingo", name);
          });
        });
      }
      break;
    case "room":
      //verify if room is already set
      if (res.socket.server.io) {
        const { room } = req.query;
        const allRooms = Array.from(res.socket.server.io.sockets.adapter.rooms);
        const activeRooms = allRooms.filter((room) => !room[1].has(room[0]));
        const activeRoomNames = activeRooms.map((el) => el[0]);
        const there_is =
          activeRoomNames.findIndex((el) => el == room) == -1 ? false : true;
        console.log("here");
        console.log(there_is);
        res.status(200).json({ thereIs: there_is });
      }
      break;
  }
  res.end();
};

export default SocketHandler;
