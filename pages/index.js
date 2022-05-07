// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';


let socket;

export default function Home() {

  useEffect(() => { socketInitializer(); }, []);

  const socketInitializer = async () => {
    await fetch('/api/socket');
    socket = io();

    socket.on('connect', () => {
      console.log('connected');
    });

    socket.on('update-input', msg => {
      setInput(msg);
    })
  };

  const [input, setInput] = useState('')

  const onChangeHandler = (e) => {
    setInput(e.target.value)
    socket.emit('input-change', e.target.value)
  }

  return (
    <input
      placeholder="Type something"
      value={input}
      onChange={onChangeHandler}
    />
  )
}
