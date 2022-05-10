import * as React from 'react';
import styles from '../styles/CreateRoom.module.css';
import io from 'socket.io-client';
import { createCartela, bingo } from '../utils/bingo';

let socket;
let room1;
let amount;
let balls = {
    riffledOrder: [],
    riffleds: []
};

export default function CreateRoom() {
    
    const [room, setRoom] = React.useState('');
    const [qtdBalls, setQtdBalls] = React.useState(99);
    const [path, setPath] = React.useState('create-room');
    const [players, setPlayers] = React.useState([]);
    const [sort, setSort] = React.useState([]);
    const [bingoWinner, setBingoWinner] = React.useState('');

    React.useEffect(() => { socketInitializer(); }, []);
    const socketInitializer = async () => {
        await fetch('/api/socket?option=connection');
        socket = io();

        socket.on('connect', () => {
            console.log('connected');
        });

        socket.on('update-players', (msg) => {
            setPlayers(old => {
                let cartela = createCartela(amount, old.filter(el => el.cartela));
                socket.emit('send-players', {room: room1, msg: [...old.filter(el => el.name), msg.name]}); 
                socket.emit('send-cartela', {to: msg.id, cartela: cartela});
                return [...old, {name: msg.name, id: msg.id, cartela: cartela}];
            }); 
            socket.emit('send-cartela', {to: msg.id})
        });

        socket.on("get-bingo", (msg) => {
            console.log("here2")
            setPath('bingo');
            setBingoWinner(msg)
        }); 
    };

    const createRoom = () => {
        socket.emit('join-room', room);
        room1 = room;
        amount = qtdBalls;
        setPath('wait-room'); 
    };

    const startGame = () => {
        setPath('play-room');
        balls.riffledOrder = bingo(amount);
        socket.emit("send-start", room);
    };

    const riffle = () => {
        balls.riffleds.unshift(balls.riffledOrder.pop());
        console.log(balls);
        setSort((old) => [balls.riffleds[0], ...old]);
        socket.emit("send-riffleds", room, balls.riffleds);
    }

    switch(path){
        case 'create-room':
            return <>
                <label>NOME DA SALA
                <input value={room} onChange={(e) => setRoom(e.target.value)} name="room" type="text"></input>
                </label>
                <label>QUANTIDADE DE BOLAS
                <input value={qtdBalls} onChange={(e) => setQtdBalls(e.target.value)} name="qtdBalls" type="text"></input>
                </label>
                <button onClick={createRoom}>Entrar</button>
            </>
        case 'wait-room':
            return <>
                <p>waiting room</p>
                <p>sala: {room}, quantidade de bolas: {qtdBalls}</p>
                {players.map((el, i) => {
                    return <li key={i}>{el.name} - {el.id} - {el.cartela.join(',')}</li>
                })}
                <button onClick={startGame}>começar</button>
            </>
        case 'play-room':
            return <>
                <p>gaming</p>
                {sort.map((el, i) => {
                    return <li key={i}>{el}</li>
                })}
                <button onClick={riffle}>sortear</button>
            </>
        case 'bingo':
            return <>
                <p>Bingo</p>
                <p> { bingoWinner } venceu!</p>
            </>
        default:
            return <>
                <p>default</p>
            </>
    }
} 