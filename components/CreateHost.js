import * as React from "react";
import JoinForm from "./JoinForm";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function CreateHost(props) {
  const router = useRouter();

  const [thereIsRoom, setThereIsRoom] = React.useState(false);

  const redirectHost = async (room_, qtdBalls_, gameOption_) => {
    const res = await fetch(`/api/socket?option=room&room=${room_}`);
    const posts = await res.json();
    if (!posts.thereIs) {
      router.push(
        `host/${room_}?qtdBalls=${qtdBalls_}&gameOption=${gameOption_}`
      );
    } else {
      setThereIsRoom(true);
    }
  };

  return (
    <section className={styles.main}>
      <Head>
        <title>Bingo! - Create Room</title>
      </Head>
      <JoinForm
        type="host"
        btnFunction={redirectHost}
        roomAvailability={thereIsRoom}
      />
    </section>
  );
}
