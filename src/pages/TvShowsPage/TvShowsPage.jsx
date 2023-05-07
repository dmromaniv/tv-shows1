import { useSelector } from "react-redux";

import { selectLoadingStatus, selectError } from "@/redux/selectors";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import TVShowList from "@/components/TVShowList/TVShowList";
import Error from "@/components/Error/Error";
import styles from "./TvShows.module.scss";

function TvShowsPage() {
  const isLoading = useSelector(selectLoadingStatus);
  const isError = useSelector(selectError);
  return (
    <>
      <Header />
      {isError ? (
        <Error />
      ) : isLoading ? (
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

export default TvShowsPage;
