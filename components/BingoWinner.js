import styles from "../styles/BingoWinner.module.css";

export default function BingoWinner(props) {
  return (
    <section className={styles.main}>
      <p className={styles.title}>{props.winner} victory!</p>
    </section>
  );
}
