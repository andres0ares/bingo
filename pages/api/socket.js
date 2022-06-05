import { Server } from "socket.io";

const SocketHandler = (req, res) => {
  const { option } = req.query;
  switch (option) {
    case "connection":
      if (res.socket.server.io) {
        console.log("Socket is alredy runnign");
      } else {
        console.log("Socket is initializing");
        const io = new Server(res.socket.server);
        res.socket.server.io = io;

        io.on("connection", (socket) => {
          socket.on("input-change", (msg) => {
            socket.broadcast.emit("update-input", msg);
          });

          socket.on("input-test", (msg) => {
            socket.broadcast.emit("update-test", msg);
          });

          socket.on("join-room", (msg) => {
            console.log("room: ", msg);
            socket.join(msg);
          });

          socket.on("send-to-room", (msg) => {
            console.log(msg);
            socket
              .in(msg.room)
              .emit("update-players", { name: msg.name, id: msg.id });
          });

          socket.on("send-players", (msg) => {
            console.log(msg);
            socket.in(msg.room).emit("get-players", msg.msg);
          });

          socket.on("send-cartela", (msg) => {
            console.log(msg);
            socket.to(msg.to).emit("get-cartela", msg.cartela);
          });

          socket.on("send-start", (msg) => {
            console.log(msg);
            socket.in(msg).emit("start-game");
          });

          socket.on("send-riffleds", (room, riffleds) => {
            console.log(room, riffleds);
            socket.in(room).emit("get-riffleds", riffleds);
          });

          socket.on("send-bingo", (room, name) => {
            console.log(room, name);
            socket.in(room).emit("get-bingo", name);
          });
        });
      }
      break;
    case "room":
      break;
  }
  res.end();
};

export default SocketHandler;
