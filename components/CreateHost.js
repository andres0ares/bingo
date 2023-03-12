import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/CreateHost.module.css";

export default function CreateHost(props) {
  const router = useRouter();

  const [thereIsRoom, setThereIsRoom] = React.useState(false); //to display warning if room id is taken
  const [room, setRoom] = React.useState(""); //room id
  const [qtdBalls, setQtdBalls] = React.useState(99); // balls amount

  const [gameOption, setGameOption] = React.useState("default");

  const redirectHost = async (room_, qtdBalls_, gameOption_) => {
    //send get request to api to verify if room id is taken 
    const res = await fetch(`/api/socket?option=room&room=${room_}`);
    const posts = await res.json();
    if (!posts.thereIs) {
      //if ok, redirect to host page
      router.push(
        `host/${room_}?qtdBalls=${qtdBalls_}&gameOption=${gameOption_}`
      );
    } else {
      //if id is taken, display warning
      setThereIsRoom(true);
    }
  };

  const handleSelectQtdBalls = (el) => {

    //remove select classes to all btns
    document.getElementById('qtd_29').classList.remove(styles.qtd_balls_div_selected);
    document.getElementById('qtd_59').classList.remove(styles.qtd_balls_div_selected);
    document.getElementById('qtd_99').classList.remove(styles.qtd_balls_div_selected)

    switch(el.currentTarget.id){
      case "qtd_99":
        //update balls amount
        setQtdBalls(99);
        //add class
        el.currentTarget.classList.add(styles.qtd_balls_div_selected)
        break
      case "qtd_59":
        setQtdBalls(59);
        el.currentTarget.classList.add(styles.qtd_balls_div_selected)
        break
      case "qtd_29":
        setQtdBalls(29);
        el.currentTarget.classList.add(styles.qtd_balls_div_selected)
        break
    }
  }


  return (
    <section className={styles.main}>
      
      <Head>
        <title>Bingo! - Criar Sala</title>
      </Head>

      <label className={styles.label}>Id da Sala</label>
      <input
        autoComplete="off"
        className={styles.input}
        value={room}
        onChange={(e) => setRoom(e.target.value)}
        name="room"
        type="text"
      ></input>

      {/* display warning if room is taken */}
      {thereIsRoom && <p> sala ocupada </p>}

      {/* select the balls amount */}
      <label className={styles.label}>Quantidade de bolas</label>
      <div>
        {/* 99 option is default  */}
        <div onClick={handleSelectQtdBalls} id="qtd_99" className={`${styles.qtd_balls_div} ${styles.qtd_balls_div_selected}`}>
          <p>99</p>
        </div>
        <div onClick={handleSelectQtdBalls} id="qtd_59" className={styles.qtd_balls_div}>
          <p>59</p>
        </div>
        <div onClick={handleSelectQtdBalls} id="qtd_29" className={styles.qtd_balls_div}>
          <p>29</p>
        </div>
      </div>

      {/* <label>Escolha opção: </label>
      <select
        name="cars"
        id="cars"
        onChange={(e) => setGameOption(e.target.value)}
      >
        <option value="default">default</option>
        <option value="new">new</option>
      </select> */}

      <button
        className={`${styles.btn_enter} ${styles.bgc_green}`}
        onClick={() => redirectHost(room, qtdBalls, gameOption)}
      >
        Criar
      </button>
    </section>
  );
}
