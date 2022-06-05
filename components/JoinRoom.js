import * as React from 'react';
import styles from '../styles/JoinRoom.module.css';
import io from 'socket.io-client';
import { instructions } from '../utils/instructions'
import PlayerDisplay from '../components/PlayerDisplay';
import BingoDisplay from '../components/BingoDisplay';
import content from '../utils/pt_content';
let socket;

export default function JoinRoom(props) {

  React.useEffect(() => { socketInitializer(); }, []);

  const socketInitializer = async () => {
    await fetch('/api/socket?option=connection');
    socket = io();

    socket.on('connect', () => {
      console.log('connected');
    });

    socket.on('get-players', (msg) => {
      console.log(msg);
    });

    socket.on("get-cartela", (msg) => {
      setCartela(msg);
    });

    socket.on('get-riffleds', (msg) => {
      setRiffleds(msg);
    })

    socket.on("start-game", () => {
      console.log("here")
      setPath('play-room');
    }); 

    socket.on("get-bingo", (msg) => {
      console.log("here2")
      setPath('bingo');
      setBingoWinner(msg)
    }); 

  };

  //const [setup, setSetup] = React.useState(true);
  const [bingoWinner, setBingoWinner] = React.useState('');
  const [path, setPath] = React.useState('join-room');
  const [cartela, setCartela] = React.useState([]);
  const [riffleds, setRiffleds] = React.useState([]);
  const [data, setData ] = React.useState({
    name: '',
    room: '',
  });

  const joinRoom = (name, room) => {
    socket.emit("join-room", room);
    socket.emit("send-to-room", {room: room, name: name, id: socket.id});
    setPath('wait-room');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const bingo = () => {
    let count = 0;
    cartela.map(el => {
      if(riffleds.find(ele => ele === el) != undefined) 
        count++;
    });

    if(cartela.length == count) {
      console.log('BINGO!');
      socket.emit('send-bingo', data.room, data.name);
      setPath('bingo');
      setBingoWinner(data.name);
    } else {
      console.log('NÃO FOI BINGO');
    }

    console.log(data.room);
  }

  switch(path) {
    case 'join-room':
      return <section className={styles.main}>
        <h1> {content.joinRoom.joinRoom.title}</h1>
        <label className={styles.label}>{content.joinRoom.joinRoom.label1}</label>
        <input className={styles.input} value={data.name} onChange={handleChange} name="name" type="text"></input>
        
        <label className={styles.label}>{content.joinRoom.joinRoom.label2}</label>
        <input className={styles.input} value={data.room} onChange={handleChange} name="room" type="text"></input>
       
        <button className={styles.btn_enter} onClick={() => joinRoom(data.name, data.room)}>{content.joinRoom.joinRoom.btn}</button>
      </section>;
    case 'wait-room':
      return <section className={styles.main_wait}>
        <div className={styles.div_grid_3}>
          <h1>{content.joinRoom.waitRoom.title}</h1>
          <p>{content.joinRoom.waitRoom.subtitle}</p>
          <p>{ cartela ? cartela.join(' ') : content.joinRoom.waitRoom.subtitle2}</p>
        </div>
        <div className={styles.div_grid_3}>
          <p>{content.joinRoom.waitRoom.title2}</p>
          { instructions }
        </div>
        <div className={styles.div_grid_3}>
          <p>{content.joinRoom.waitRoom.title3}</p>
        </div>
        
      </section>;
    case 'play-room':
      return <section className={styles.main_play}>
        <p> { data.name }</p>
        <p>{content.joinRoom.playRoom.title}</p>
        <BingoDisplay type='player' max={5} numbers={riffleds} />
        <PlayerDisplay numbers={cartela} test={'hi there!'}/>
        <button className={styles.btn_bingo} onClick={bingo}>{content.joinRoom.playRoom.btn}</button>
        
      </section>
    case 'bingo':
        return <section className={styles.bingo}>
          <img src='/Logo2.svg'></img>
          <p className={styles.bingo_winner}> { bingoWinner } {content.joinRoom.bingo.title}</p>
      </section>
    default:
      return <p> error 404 </p>;
  };
};