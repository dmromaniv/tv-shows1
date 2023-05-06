import styles from "./TVShowItem.module.scss";

function TVShowItem() {
  return (
    <div className={styles.card}>
      <img className={styles.image} src="#" alt="cat" />
      <p className={styles.ratings}>
        Ratings: <span>9.6</span>
      </p>
      <div className={styles.textContent}>
        <p className={styles.name}>Batman</p>
      </div>
    </div>
  );
}

export default TVShowItem;
