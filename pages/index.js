// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import JoinRoom from '../components/JoinRoom';
import CreateRoom from '../components/CreateRoom';

let socket;

export default function Home() {

  const [input, setInput] = useState('hellor');
  const [players, setPlayers ] = useState(['fulano']);
  const [sala, setSala ] = useState(false);
  const [player, setPlayer ] = useState(false);

  useEffect(() => { socketInitializer(); }, []);

  const socketInitializer = async () => {
    await fetch('/api/socket?option=connection');
    socket = io();

    socket.on('connect', () => {
      console.log('connected');
    });

    socket.on('update-players', msg => {

      console.log(msg);
      let pre = players;
      pre.push(msg);
      setPlayers(pre);

      console.log(players);
    });
  };
  
  const testFunction = () => {
    const hello = {name: 'fulano', faltam: 12, possuem: 13};
    socket.emit('input-test', hello);
  };

  const testRoom =  () => {
    socket.emit("join-room", "room1");
    setDeu("room1")
  }

  const testPrivateMsg = () => {
    socket.emit("send-to-room", {room: "room1", msg: "funcionou"});
  }

  const joinRoom = (name, room) => {
    socket.emit("join-room", room);
    socket.emit("send-to-room", {room: room, msg: name})
  }

  return (
    <div>
      <p>mensagem: </p>
      {players.map(function(name, i){
        return <p key={i}>{name}</p>;
      })}
      <button onClick={() => setSala(true)}>Criar sala</button>
      <button onClick={() => setPlayer(true)}>Entrar sala</button>
      {sala && <CreateRoom />}
      {player && <JoinRoom open={joinRoom}/> }
    </div>
    
  )
}
