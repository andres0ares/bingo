import * as React from "react";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  const handleClick = (e) => {
    props.path(e.target.name);
  };

  return (
    <div className={styles.main}>
      <img className={styles.img} src="/Logo.svg"></img>
      <button
        className={styles.btn_join}
        onClick={handleClick}
        name="join-room"
      >
        {" "}
        {props.content.btn1}
      </button>
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
