const SocketHandler = (req, res) => {
    if (res.socket.server.io) {
        console.log('send mensagem');
        sockett.to("room1").emit("input-change", "funcionou");
    } 
    res.end();
}

export default SocketHandler;