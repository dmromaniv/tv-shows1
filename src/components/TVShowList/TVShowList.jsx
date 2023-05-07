import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectTvShows } from "@/redux/selectors";
import TVShowItem from "../TVShowItem";
import styles from "./TVShowList.module.scss";
import "animate.css";

function TVShowList() {
  const tvShowsData = useSelector(selectTvShows);

  if (!tvShowsData) {
    return <p className={styles.tipText}>Type the shows name</p>;
  }

  return tvShowsData.length !== 0 ? (
    <ul className={`animate__animated animate__bounceInUp ${styles.list}`}>
      {tvShowsData.map(({ show }) => (
        <li className={styles.item} key={show.id}>
          <Link to={`/details/${show.id}`}>
            <TVShowItem {...show} />
          </Link>
        </li>
      ))}
    </ul>
  ) : (
    <p className={styles.tipText}>Sorry, nothing found with this search</p>
  );
}

export default TVShowList;
