import * as React from "react";
import Head from "next/head";

//components
import PlayerScreen from "../components/PlayerScreen";
import HostScreen from "../components/HostScreen";
import Home from "../components/Home";

//text content
import content from "../utils/content";

export default function Index() {
  const [path, setPath] = React.useState("home");
  const handlePath = (path) => {
    setPath(path);
  };

  switch (path) {
    case "create-room":
      return (
        <>
          <Head>
            <title>Bingo! - Create Room</title>
          </Head>
          <HostScreen content={content.en.createRoom} path={handlePath} />
        </>
      );
    case "join-room":
      return (
        <>
          <Head>
            <title>Bingo! - Join Room</title>
          </Head>
          <PlayerScreen content={content.en.joinRoom} path={handlePath} />
        </>
      );
    default:
      return (
        <>
          <Head>
            <title>Bingo! - Home</title>
          </Head>
          <Home content={content.en.home} path={handlePath} />
        </>
      );
  }
}
