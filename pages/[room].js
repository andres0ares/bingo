import { useRouter } from "next/router";
import * as React from "react";

//styles
import styles from "../styles/PlayerScreen.module.css";

export default function Room() {
  const router = useRouter();
  const { room, name } = router.query;
  const [name2, setName2] = React.useState(" ");
  const [path, setPath] = React.useState(" ");

  const joinRoom = (room_, name_) => {
    console.log(`room: ${room_}, name: ${name_}`);
    setPath("wait");
  };

  const here = () => {
    console.log();
  };

  React.useEffect(() => {
    console.log(name);
    if (name != undefined) joinRoom(room, name);
  }, [name]);

  switch (path) {
    case "wait":
      return (
        <>
          <p>wait</p>
        </>
      );
    default:
      return (
        <>
          <section className={styles.main}>
            <p>
              Bem-vind@ {name} à sala {room}
            </p>
            {name == undefined && (
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
                  onClick={() => joinRoom(room, name2)}
                >
                  Entrar
                </button>
              </>
            )}
          </section>
        </>
      );
  }
}
