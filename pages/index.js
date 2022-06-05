import * as React from "react";
import JoinRoom from "../components/JoinRoom";
import CreateRoom from "../components/CreateRoom";
import Home from "../components/Home";
import content from "../utils/content";

export default function Index() {
  const [path, setPath] = React.useState("home");

  console.log(content.pt.home.btn1);

  const handlePath = (path) => {
    setPath(path);
  };

  switch (path) {
    case "home":
      return <Home content={content.pt.home} path={handlePath} />;
    case "create-room":
      return <CreateRoom content={content.pt.createRoom} path={handlePath} />;
    case "join-room":
      return <JoinRoom content={content.pt.joinRoom} path={handlePath} />;
    default:
      return <Home content={content.pt.home} path={handlePath} />;
  }
}
