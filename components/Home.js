import * as React from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

import JoinForm from "./JoinForm";

export default function Home(props) {
  const router = useRouter();

  const handleClick = (e) => {
    props.path(e.target.name);
  };

  const handleJoinRoom = (room_, name_) => {
    router.push(`${room_}?name=${name_}`);
  };

  return (
    <div className={styles.main}>
      <img className={styles.img} src="/Logo.svg"></img>
      <JoinForm type="home" btnFunction={handleJoinRoom} />

      <button
        className={styles.btn_create}
        onClick={handleClick}
        name="create-room"
      >
        {" "}
        {props.content.btn2}{" "}
      </button>
    </div>
  );
}
