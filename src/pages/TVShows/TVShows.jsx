import { useSelector } from "react-redux";

import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import TVShowList from "../../components/TVShowList/TVShowList";

import styles from "./TVShows.module.scss";

function TVShows() {
  const isLoading = useSelector((state) => state.isLoading);
  return (
    <>
      <Header />
      {isLoading ? (
        <div className={styles.loaderWrapper}>
          <Loader />
        </div>
      ) : (
        <div className={styles.listWrapper}>
          <TVShowList />
        </div>
      )}
    </>
  );
}

export default TVShows;
