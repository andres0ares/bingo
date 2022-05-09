import { Server } from 'socket.io';

const SocketHandler = (req, res) => {
    const { option } = req.query;
    switch(option){
        case 'connection': 
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
        
                    socket.on('input-test', msg => {
                        socket.broadcast.emit('update-test', msg);
                    });

                    socket.on('join-room', msg => {
                        console.log("room: ", msg);
                        socket.join(msg);
                    });

                    socket.on('send-to-room', msg => {
                        console.log(msg);
                        socket.in(msg.room).emit("update-players", msg.msg);
                    });
                });
            }
            break
        case 'room':
            break
    }    
    res.end();
}

export default SocketHandler;