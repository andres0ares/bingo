import { Server } from 'socket.io';

const SocketHandler = (req, res) => {
    if (res.socket.server.io) {
        console.log('Socket is alredy runnign');
    } else {
        console.log('Socket is initializing');
        const io = new Server(res.socket.server);
        res.socket.server.io = io;

        io.on('connection', socket => {
            socket.on('input-change', msg => {
                socket.broadcast.emit('update-input', msg);
            });
        });
    }
    res.end();
}

export default SocketHandler;