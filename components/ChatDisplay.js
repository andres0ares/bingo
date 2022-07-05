import * as React from "react";

export default function ChatDisplay(props) {
  const [msg, setMsg] = React.useState("");

  return (
    <>
      <p>Vamos conversar {props.name}?</p>
      {props.content.map((e) => (
        <>
          <p>{e.name}</p>
          <p>{e.msg}</p>
        </>
      ))}
      <input
        type="text"
        autoComplete="off"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      ></input>
      <button
        onClick={() => {
          props.btnFunction(props.name, msg);
          setMsg("");
        }}
      >
        send
      </button>
    </>
  );
}
