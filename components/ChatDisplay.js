import * as React from "react";
import styles from "../styles/ChatDisplay.module.css";

export default function ChatDisplay(props) {
  const [msg, setMsg] = React.useState("");

  const display = (e_, idx_) => {
    switch (e_.name) {
      case "newPlayer":
        return (
          <div key={idx_} className={styles.joined}>
            <div className={styles.joined_box}>
              <p className={styles.joined_box_p}>{e_.msg}</p>
            </div>
          </div>
        );
      case "cartela":
        return (
          <div key={idx_} className={styles.msg_cartela}>
            <p>seus numeros são:</p>
            <p>{e_.msg.toString()}</p>
            <p>boa sorte!</p>
          </div>
        );
      case "sent-200":
        return (
          <div key={idx_} className={styles.msg_sent}>
            <p>{e_.msg}</p>
          </div>
        );
      default:
        return (
          <div key={idx_} className={styles.msg_received}>
            <p className={styles.name}>{e_.name}</p>
            <p className={styles.msg_received_p}>{e_.msg}</p>
          </div>
        );
    }
  };

  return (
    <div className={styles.main}>
      <p>Vamos conversar {props.name}?</p>

      <div className={styles.display}>
        {props.cartela && display({ name: "cartela", msg: props.cartela }, 0)}
        {props.content.map((e, idx) => display(e, idx + 1))}
        <div className={styles.test} ref={props.reflash}></div>
      </div>

      <div className={styles.input}>
        <input
          className={styles.input_box}
          type="text"
          autoComplete="off"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        ></input>
        <button
          className={styles.input_btn}
          onClick={() => {
            props.btnFunction(props.name, msg);
            setMsg("");
          }}
        >
          send
        </button>
      </div>
    </div>
  );
}
