import * as React from "react";
import Head from "next/head";

//components
import PlayerScreen from "../components/PlayerScreen";
//import HostScreen from "../components/HostScreen";
import Home from "../components/Home";
import CreateHost from "../components/CreateHost";

//text content
import content from "../utils/content";

export default function Index() {
  const [path, setPath] = React.useState("home");
  const handlePath = (path) => {
    test();
    setPath(path);
  };

  const test = async () => {
    await fetch("/api/socket?option=connection");
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
          <Home content={content.pt.home} path={handlePath} />
        </>
      );
  }
}
