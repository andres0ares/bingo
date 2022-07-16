import * as React from "react";
import { useRouter } from "next/router";
import io from "socket.io-client";
import { createCartela, bingo } from "../../utils/bingo";

//styles
import styles from "../../styles/HostScreen.module.css";

import BingoDisplay from "../../components/BingoDisplay";
import ChatDisplay from "../../components/ChatDisplay";
import BingoWinner from "../../components/BingoWinner";

let socket;
let balls = {
  riffledOrder: [],
  riffleds: [],
};

export default function Host() {
  const router = useRouter();
  const { host, qtdBalls, gameOption } = router.query;
  const [path, setPath] = React.useState("wait");
  const [players, setPlayers] = React.useState([]);
  const [chat, setChat] = React.useState([]);
  const [sort, setSort] = React.useState([]);
  const [bingoWinner, setBingoWinner] = React.useState("");

  //set event listeners
  React.useEffect(() => {
    socketInitializer();
  }, [host, qtdBalls]);

  const socketInitializer = async () => {
    try {
      await fetch("/api/socket?option=connection");
      socket = io();

      socket.on("connect", () => {
        console.log("connected");
      });

      socket.on("get-chat", (msg) => {
        setChat((prev) => [...prev, msg]);
      });

      socket.on("get-new-player", (msg) => {
        setPlayers((old) => {
          let cartela = createCartela(
            Number(qtdBalls),
            old.filter((el) => el.cartela)
          );
          socket.emit("send-players", {
            room: host,
            msg: [...old.map((el) => el.name), msg.name],
          });
          socket.emit("send-cartela", { to: msg.id, cartela: cartela });
          socket.emit("send-chat", {
            room: host,
            name: "newPlayer",
            msg: `${msg.name} entrou.`,
          });
          return [...old, { name: msg.name, id: msg.id, cartela: cartela }];
        });
      });

      socket.on("get-bingo", (msg) => {
        setPath("bingo");
        setBingoWinner(msg);
      });
    } finally {
      socket.emit("join-room", host);
    }
  };

  const startGame = () => {
    setPath("play-room");
    balls.riffledOrder = bingo(Number(qtdBalls));
    socket.emit("send-start", host);
  };

  const riffle = () => {
    balls.riffleds.unshift(balls.riffledOrder.pop());
    setSort((old) => [balls.riffleds[0], ...old]);
    socket.emit("send-raffleds", host, balls.riffleds);
  };

  const handleChat = (name_, msg_) => {
    socket.emit("send-chat", { room: host, name: name_, msg: msg_ });
    setChat((prev) => [...prev, { name: "sent-200", msg: msg_ }]);
  };

  switch (path) {
    case "wait":
      return (
        <>
          <p>
            Sala: {host} - quantidade de bolas : {qtdBalls} - opção de jogo:{" "}
            {gameOption}
          </p>
          {players.map((e, idx) => {
            return (
              <div key={idx}>
                <p>{e.name}</p>
              </div>
            );
          })}
          <button onClick={startGame}>Start game</button>
          <ChatDisplay name={"host"} content={chat} btnFunction={handleChat} />
        </>
      );
    case "play-room":
      return (
        <>
          <ChatDisplay
            name={"host"}
            content={chat}
            btnFunction={handleChat}
            onGame={true}
          />
          <section className={styles.main_play}>
            <div className={styles.div_grid_2}>
              <p> Jogo iniciado </p>
              <button onClick={riffle}> sortear </button>
              <BingoDisplay numbers={sort} type="main" />
            </div>
            <div className={styles.div_grid_2}>
              <BingoDisplay
                numbers={sort}
                balls={Number(qtdBalls)}
                type="all"
              />
            </div>
          </section>
        </>
      );
    case "bingo":
      return (
        <>
          <ChatDisplay
            name={"host"}
            content={chat}
            btnFunction={handleChat}
            onGame={true}
          />
          <BingoWinner winner={bingoWinner} />
        </>
      );
  }
}
