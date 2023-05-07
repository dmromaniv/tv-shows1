import styles from "./TVShowItem.module.scss";

function TVShowItem({ name, rating, image }) {
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={
          image?.medium ||
          "https://cdn.pixabay.com/photo/2017/10/06/11/09/tile-2822716_960_720.jpg"
        }
        alt={name}
      />
      <p className={styles.ratings}>
        Ratings: <span>{rating.average || "no info"}</span>
      </p>
      <div className={styles.textContent}>
        <p className={styles.name}>{name}</p>
      </div>
    </div>
  );
}

export default TVShowItem;
