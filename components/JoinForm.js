import * as React from "react";

//styles
import styles from "../styles/PlayerScreen.module.css";

export default function JoinForm(props) {
  const [name2, setName2] = React.useState("");
  const [room, setRoom] = React.useState("");

  switch (props.type) {
    case "room":
      return (
        <>
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
            className={styles.btn_enter}
            onClick={() => props.btnFunction(props.room, name2)}
          >
            Entrar
          </button>
        </>
      );
    case "home":
      return (
        <>
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
            className={styles.btn_enter}
            onClick={() => props.btnFunction(room, name2)}
          >
            Entrar
          </button>
        </>
      );
  }
}
