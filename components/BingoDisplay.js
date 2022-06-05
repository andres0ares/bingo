import * as React from "react";
import styles from "../styles/BingoDisplay.module.css";

export default function BingoDisplay(props) {
  const wasSorted = (number, sorteds) => {
    return sorteds.findIndex((el) => el == number) == -1 ? false : true;
  };

  switch (props.type) {
    case "main":
      return (
        <section>
          {props.numbers[0] && (
            <div className={styles.first_main_ball}>
              <p> {props.numbers[0]}</p>
            </div>
          )}

          {props.numbers &&
            props.numbers.slice(1, 5).map((el, idx) => {
              return (
                <div className={styles.four_main_ball} key={idx}>
                  <p> {el} </p>
                </div>
              );
            })}
        </section>
      );
    case "player":
      return (
        <section className={styles.main}>
          <p>{props.title} </p>

          {props.numbers[0] && (
            <div className={styles.first_ball}>
              <p> {props.numbers[0]}</p>
            </div>
          )}

          {props.numbers &&
            props.numbers.slice(1, props.max).map((el, idx) => {
              return (
                <div className={styles.balls} key={idx}>
                  <p> {el} </p>
                </div>
              );
            })}
        </section>
      );
    case "all":
      return (
        <section className={styles.main_all}>
          {[...Array(props.balls).keys()].map((el, idx) => {
            return (
              <div
                className={
                  wasSorted(el + 1, props.numbers)
                    ? styles.all_balls_sorted
                    : styles.all_balls
                }
                key={idx}
              >
                <p> {el + 1} </p>
              </div>
            );
          })}
        </section>
      );
    default:
      return (
        <section>
          {" "}
          <p>default</p>{" "}
        </section>
      );
  }
}
