import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

//components
import CreateHost from "../components/CreateHost";

//styles
import * as styles from "../styles/Home.module.css";

//text content
import content from "../utils/content";


export default function Index() {

  const router = useRouter();

  const [path, setPath] = React.useState("home");
  const [name2, setName2] = React.useState("");
  const [room, setRoom] = React.useState("");


  const createSocketConnection = async () => {
    await fetch("/api/socket?option=connection");
  };

  const handlePath = (path) => {
    createSocketConnection();
    setPath(path);
  };

  const handleJoinRoom = (option) => {
    switch (option) {
      case "join":
        router.push(`${room}?name=${name2}`);
        break;
      case "create":
        handlePath("create-room");
        break;
    }
  };

  switch (path) {
    case "create-room":
      return <CreateHost />;
    default:
      return (
        <>
          <Head>
            <title>Bingo! - Início</title>
          </Head>
          <div className={styles.main}>
            <img className={styles.img} src="/Logo.svg"></img>

            <label className={styles.label}>Id da Sala</label>
            <input
              autoComplete="off"
              className={styles.input}
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              name="room"
              type="text"
            ></input>

            <label className={styles.label}>Seu nome</label>
            <input
              autoComplete="off"
              className={styles.input}
              value={name2}
              onChange={(e) => setName2(e.target.value)}
              name="room"
              type="text"
            ></input>

            <button
              className={`${styles.btn_enter} ${styles.bgc_green}`}
              onClick={() => handleJoinRoom("join")}
            >
              Entrar
            </button>

            <span className={styles.division}> ............. </span>

            <button
              className={`${styles.btn_enter} ${styles.bgc_dark_blue}`}
              onClick={() => handleJoinRoom("create")}
            >
              Criar Sala
            </button>
          </div>
        </>
      );
  }
}
