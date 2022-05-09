import * as React from 'react';

export default function JoinRoom(props) {
  
  const { open } = props;

  const [setup, setSetup] = React.useState(true);
  const [data, setData ] = React.useState({
    name: '',
    room: '',
  });

  const handleBtn = () => {
    open(data.name, data.room);
    setSetup(false);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  if(setup){
    return (
      <>
        <label>Nome
          <input value={data.name} onChange={handleChange} name="name" type="text"></input>
        </label>
        <label>Sala
          <input value={data.room} onChange={handleChange} name="room" type="text"></input>
        </label>
        <button onClick={handleBtn}>Entrar</button>
      </>
  );
  }else {
    return <>
      <p>hello world!</p>
    </>
  }

  
}