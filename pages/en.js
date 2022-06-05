import * as React from 'react'
import JoinRoom from '../components/JoinRoom';
import CreateRoom from '../components/CreateRoom';
import Home from '../components/Home'
import content from '../utils/en_content'

export default function Index() {
  const [path, setPath ] = React.useState('home');


  console.log(content.home.btn1)


  const handlePath = (path) => {
    setPath(path);
  };

  switch(path){
    case 'home':
      return <Home content={content.home} path={handlePath}/>;
    case 'create-room':
      return <CreateRoom content={content.createRoom} path={handlePath}/>
    case 'join-room':
      return <JoinRoom content={content.joinRoom} path={handlePath}/>
    default:
      return <Home content={content.home} path={handlePath}/>;
  }

}