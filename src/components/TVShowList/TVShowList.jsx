import TVShowItem from "../TVShowItem/TVShowItem";
import styles from "./TVShowList.module.scss";

function TVShowList() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <TVShowItem />
      </li>
      <li className={styles.item}>
        <TVShowItem />
      </li>
      <li className={styles.item}>
        <TVShowItem />
      </li>
    </ul>
  );
}

export default TVShowList;
