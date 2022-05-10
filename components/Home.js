import * as React from 'react';
import styles from '../styles/Home.module.css';

export default function Home(props) {

    const handleClick = (e) => {
        props.path(e.target.name);
    }


    return (
        <>
            <button onClick={handleClick} name='create-room'>Criar Sala</button>
            <button onClick={handleClick} name='join-room'>Entrar na sala</button>
        </>
    )
}
