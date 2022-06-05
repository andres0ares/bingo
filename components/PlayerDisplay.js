import * as React from "react";
import styles from "../styles/PlayerDisplay.module.css";
export default function PlayerDisplay(props) {
  const changeClass = (el) => {
    if (el.currentTarget.classList.contains(styles.number_click))
      el.currentTarget.classList.remove(styles.number_click);
    else el.currentTarget.classList.add(styles.number_click);
  };

  return (
    <section className={styles.main}>
      {props.numbers &&
        props.numbers.slice(0, 3).map((el, idx) => {
          return (
            <div onClick={changeClass} className={styles.number} key={idx}>
              <p> {el} </p>
            </div>
          );
        })}

      <div className={styles.number}></div>
      <div className={styles.number}></div>

      {props.numbers &&
        props.numbers.slice(3, 5).map((el, idx) => {
          return (
            <div onClick={changeClass} className={styles.number} key={idx}>
              <p> {el} </p>
            </div>
          );
        })}

      <div className={styles.number}></div>
      <div className={styles.number}></div>
      <div className={styles.number}></div>

      {props.numbers &&
        props.numbers.slice(5, 7).map((el, idx) => {
          return (
            <div onClick={changeClass} className={styles.number} key={idx}>
              <p> {el} </p>
            </div>
          );
        })}

      <div className={styles.number}></div>

      {props.numbers &&
        props.numbers.slice(7, 10).map((el, idx) => {
          return (
            <div onClick={changeClass} className={styles.number} key={idx}>
              <p> {el} </p>
            </div>
          );
        })}

      <div className={styles.number}></div>

      {props.numbers &&
        props.numbers.slice(10, 12).map((el, idx) => {
          return (
            <div onClick={changeClass} className={styles.number} key={idx}>
              <p> {el} </p>
            </div>
          );
        })}

      <div className={styles.number}></div>

      {props.numbers &&
        props.numbers.slice(12, props.numbers.length).map((el, idx) => {
          return (
            <div onClick={changeClass} className={styles.number} key={idx}>
              <p> {el} </p>
            </div>
          );
        })}

      {props.numbers &&
        [...Array(27 - (props.numbers.length + 8))].map((el, idx) => {
          return (
            <div className={styles.number} key={idx}>
              <p> {el} </p>
            </div>
          );
        })}
    </section>
  );
}
