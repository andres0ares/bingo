import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/CreateHost.module.css";

export default function CreateHost(props) {
  const router = useRouter();

  const [thereIsRoom, setThereIsRoom] = React.useState(false); //to display warning if room id is taken
  const [room, setRoom] = React.useState(""); //room id
  const [qtdBalls, setQtdBalls] = React.useState(99); // balls amount
  const [qtdRaffles, setQtdRaffles] = React.useState("17-18") //raffles numbers amount
  const [qtdCards, setQtdCards] = React.useState(1) //raffles numbers amount


  const redirectHost = async () => {
    //send get request to api to verify if room id is taken 
    const res = await fetch(`/api/socket?option=room&room=${room}`);
    const posts = await res.json();
    if (!posts.thereIs) {
      //if ok, redirect to host page
      router.push(
        `host/${room}?qtdBalls=${qtdBalls}&qtdRaffles=${qtdRaffles}&qtdCards=${qtdCards}&gameOption=test`
      );
    } else {
      //if id is taken, display warning
      setThereIsRoom(true);
    }
  };

  const handleSelect = (el) => {
    
    document.getElementsByName(el.currentTarget.getAttribute("name")).forEach(e => {
      e.classList.remove(styles.qtd_balls_div_selected)
    });

    el.currentTarget.classList.add(styles.qtd_balls_div_selected);

    switch(el.currentTarget.getAttribute("name")){
      case "balls_amount":
        //update balls amount
        setQtdBalls(Number(el.currentTarget.id));
        break
      case "raffles_amount":
        setQtdRaffles(el.currentTarget.id);
        break
      case "cards_amount":
        setQtdCards(Number(el.currentTarget.id));
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
        <div onClick={handleSelect} name="balls_amount" id="99" className={`${styles.qtd_balls_div} ${styles.qtd_balls_div_selected}`}>
          <p>99</p>
        </div>
        <div onClick={handleSelect} name="balls_amount" id="59" className={styles.qtd_balls_div}>
          <p>59</p>
        </div>
        <div onClick={handleSelect} name="balls_amount" id="29" className={styles.qtd_balls_div}>
          <p>29</p>
        </div>
      </div>

      {/* select the balls amount */}
      <label className={styles.label}>Quantidade de números na cartela</label>
      <div>
        {/* 99 option is default  */}
        <div onClick={handleSelect} name="raffles_amount" id="16-18" className={`${styles.qtd_balls_div} ${styles.qtd_balls_div_selected}`}>
          <p>16-18</p>
        </div>
        <div onClick={handleSelect} name="raffles_amount" id="10-13" className={styles.qtd_balls_div}>
          <p>10-13</p>
        </div>
        <div onClick={handleSelect} name="raffles_amount" id="4-7" className={styles.qtd_balls_div}>
          <p>4-7</p>
        </div>
      </div>

      {/* select the balls amount */}
      <label className={styles.label}>Quantidade de cartelas</label>
      <div>
        {/* 99 option is default  */}
        <div onClick={handleSelect} name="cards_amount" id="1" className={`${styles.qtd_balls_div} ${styles.qtd_balls_div_selected}`}>
          <p>1</p>
        </div>
        <div onClick={handleSelect} name="cards_amount" id="2" className={styles.qtd_balls_div}>
          <p>2</p>
        </div>
        <div onClick={handleSelect} name="cards_amount" id="3" className={styles.qtd_balls_div}>
          <p>3</p>
        </div>
      </div>

      <button
        className={`${styles.btn_enter} ${styles.bgc_green}`}
        onClick={redirectHost}
      >
        Criar
      </button>
    </section>
  );
}
