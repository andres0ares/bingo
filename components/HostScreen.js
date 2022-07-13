import * as React from "react";
import io from "socket.io-client";
import { createCartela, bingo } from "../utils/bingo";

//styles
import styles from "../styles/HostScreen.module.css";

//componets
import BingoDisplay from "./BingoDisplay";

let socket;
let room1;
let amount;
let balls = {
  riffledOrder: [],
  riffleds: [],
};

export default function HostScreen(props) {
  //HOOKERS
  const [room, setRoom] = React.useState("");
  const [qtdBalls, setQtdBalls] = React.useState(99);
  const [path, setPath] = React.useState("create-room");
  const [players, setPlayers] = React.useState([]);
  const [chat, setChat] = React.useState([]);
  const [sort, setSort] = React.useState([]);
  const [bingoWinner, setBingoWinner] = React.useState("");
  const [thereIsRoom, setThereIsRoom] = React.useState(false);

  //set event listeners
  React.useEffect(() => {
    socketInitializer();
  }, []);
  const socketInitializer = async () => {
    await fetch("/api/socket?option=connection");
    socket = io();

    socket.on("connect", () => {
      console.log("connected");
    });

    socket.on("get-new-player", (msg) => {
      setPlayers((old) => {
        let cartela = createCartela(
          amount,
          old.filter((el) => el.cartela)
        );
        socket.emit("send-players", {
          room: room1,
          msg: [...old.map((el) => el.name), msg.name],
        });
        socket.emit("send-cartela", { to: msg.id, cartela: cartela });
        console.log("here");
        socket.emit("send-chat", {
          room: room1,
          name: "host",
          msg: `${msg.name} entrou.`,
        });
        return [...old, { name: msg.name, id: msg.id, cartela: cartela }];
      });
      socket.emit("send-cartela", { to: msg.id });
    });

    socket.on("get-bingo", (msg) => {
      setPath("bingo");
      setBingoWinner(msg);
    });
  };

  //METHODS

  const createRoom = async () => {
    const res = await fetch(`/api/socket?option=room&room=${room}`);
    const posts = await res.json();
    if (!posts.thereIs) {
      socket.emit("join-room", room);
      room1 = room;
      amount = qtdBalls;
      setPath("wait-room");
    } else {
      setThereIsRoom(true);
    }
  };

  const startGame = () => {
    setPath("play-room");
    balls.riffledOrder = bingo(amount);
    socket.emit("send-start", room);
  };

  const riffle = () => {
    balls.riffleds.unshift(balls.riffledOrder.pop());
    setSort((old) => [balls.riffleds[0], ...old]);
    socket.emit("send-raffleds", room, balls.riffleds);
  };

  switch (path) {
    case "create-room":
      return (
        <div className={styles.main}>
          <h1 className={styles.title}> {props.content.createRoom.title}</h1>
          <label className={styles.label}>
            {" "}
            {props.content.createRoom.label1}{" "}
          </label>
          {thereIsRoom && <p>{props.content.createRoom.warning}</p>}
          <input
            autoComplete="off"
            className={styles.input}
            value={room}
            minLength="1"
            maxLength="5"
            onChange={(e) => setRoom(e.target.value)}
            name="room"
            type="text"
          ></input>
          <label className={styles.label}>
            {" "}
            {props.content.createRoom.label2}{" "}
          </label>
          <input
            className={styles.input}
            value={qtdBalls}
            onChange={(e) => setQtdBalls(e.target.value)}
            name="qtdBalls"
            min={50}
            max={99}
            type="number"
          ></input>
          <button className={styles.btn_enter} onClick={createRoom}>
            {" "}
            {props.content.createRoom.btn}{" "}
          </button>
        </div>
      );

    case "wait-room":
      return (
        <section className={styles.main_wait}>
          <div className={styles.div_grid_3}>
            <h1 className={styles.title_wait}>
              {" "}
              {props.content.waitRoom.title}{" "}
            </h1>
            <h1 className={styles.room}>{room}</h1>
            <p>
              {props.content.waitRoom.subtitle} {qtdBalls}
            </p>
            <button className={styles.btn_start} onClick={startGame}>
              {props.content.waitRoom.btn}
            </button>
          </div>
          <div className={styles.div_grid_3}>
            <p>{props.content.waitRoom.title2}</p>
            {players.map((el, i) => {
              return (
                <p key={i}>
                  {el.name} {props.content.waitRoom.subtitle2}
                </p>
              );
            })}
          </div>
          <div className={styles.div_grid_3}>
            <h3>{props.content.waitRoom.title3}</h3>
            {props.content.waitRoom.instructions}
          </div>
        </section>
      );

    case "play-room":
      return (
        <section className={styles.main_play}>
          <div className={styles.div_grid_2}>
            <p> {props.content.playRoom.title} </p>
            <button onClick={riffle}> {props.content.playRoom.btn} </button>
            <BingoDisplay numbers={sort} type="main" />
          </div>
          <div className={styles.div_grid_2}>
            <BingoDisplay numbers={sort} balls={qtdBalls} type="all" />
          </div>
        </section>
      );
    case "bingo":
      return (
        <section className={styles.bingo}>
          <img src="/Logo2.svg"></img>
          <p className={styles.bingo_winner}>
            {" "}
            {bingoWinner} {props.content.bingo.title}
          </p>
        </section>
      );
    default:
      return (
        <>
          <p>default</p>
        </>
      );
  }
}
