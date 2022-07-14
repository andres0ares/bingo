//import { useState } from "react";

//styles
import styles from "../styles/ChatNav.module.css";
import { MdChatBubbleOutline, MdOutlineClose } from "react-icons/md";

export default function ChatNav(props) {
  return (
    <section className={styles.main}>
      {props.option == "open" && (
        <div className={styles.box} onClick={props.openChat}>
          <div className={styles.pop}>{props.newMsg}</div>
          <MdChatBubbleOutline className={styles.icon} />
        </div>
      )}
      {props.option == "close" && (
        <div className={styles.box} onClick={props.openChat}>
          <MdOutlineClose className={styles.icon_close} />
        </div>
      )}
    </section>
  );
}
