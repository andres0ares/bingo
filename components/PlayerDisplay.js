import * as React from "react";
import styles from "../styles/PlayerDisplay.module.css";
export default function PlayerDisplay(props) {

  const empty = (amount) => {
    return (
      <div>
        {[...Array(amount)].map((e, idx) => {
          return <div className={styles.number} key={idx}></div>
        })}
      </div>
    );
  }

  const withNumber = (list, start, end) => {


    return (
      <div>
        {
          list &&
          list.slice(start, end).map((el, idx) => {
            return (
              <div onClick={changeClass} className={styles.number} key={idx}>
                <p> {el} </p>
              </div>
            );
          })
        }
      </div>
    )
  }

  const changeClass = (el) => {

    let classList = el.currentTarget.classList

    if (classList.contains(styles.number_click1))
      el.currentTarget.classList.remove(styles.number_click1);
    else if(classList.contains(styles.number_click2))
      el.currentTarget.classList.remove(styles.number_click2);
    else if (classList.contains(styles.number_click3))
      el.currentTarget.classList.remove(styles.number_click3);
    else if (classList.contains(styles.number_click4))
      el.currentTarget.classList.remove(styles.number_click4);
    else {
      let classes = [styles.number_click1, styles.number_click2, styles.number_click3, styles.number_click4]
      el.currentTarget.classList.add(classes[Math.floor(Math.random() * 4)]);
    }
    
   
  };

  return (
    <section className={styles.bingo_card}>

      <p className={styles.title}>BINGO</p>

      <section className={styles.inside_card}>

        {withNumber(props.numbers,0,3)}

        {empty(2)}

        {withNumber(props.numbers,3,5)}

        {empty(3)}

        {withNumber(props.numbers,5,7)}

        {empty(1)}

        {withNumber(props.numbers,7,10)}

        {empty(1)}

        {withNumber(props.numbers,10,12)}

        {empty(1)}

        {withNumber(props.numbers,10,props.numbers.length)}

        {empty(27 - (props.numbers.length + 8))}

      </section>
    </section>
  );

}
