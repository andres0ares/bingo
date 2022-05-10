// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import JoinRoom from '../components/JoinRoom';
import CreateRoom from '../components/CreateRoom';
import Home from '../components/Home'

let socket;

export default function Index() {

  const [input, setInput] = useState('hellor');
  const [players, setPlayers ] = useState(['fulano']);
  const [sala, setSala ] = useState(false);
  const [player, setPlayer ] = useState(false);
  const [path, setPath ] = useState('home');

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

  

  const handlePath = (path) => {
    setPath(path);
  };

  switch(path){
    case 'home':
      return <Home path={handlePath}/>;
    case 'create-room':
      return <CreateRoom path={handlePath}/>
    case 'join-room':
      return <JoinRoom path={handlePath}/>
    default:
      return <Home path={handlePath}/>;
  }

}
