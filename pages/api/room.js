const SocketHandler = (req, res) => {
    if (res.socket.server.io) {
        console.log('join room');
        res.socket.server.io.join("room1");
    } 
    res.end();
}

export default SocketHandler;