import { useSelector } from "react-redux";

import { selectLoadingStatus } from "@/redux/selectors";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import TvShowList from "@/components/TvShowList/TvShowList";
import styles from "./TvShows.module.scss";

function TvShowsPage() {
  const isLoading = useSelector(selectLoadingStatus);
  return (
    <>
      <Header />
      {isLoading ? (
        <div className={styles.loaderWrapper}>
          <Loader />
        </div>
      ) : (
        <div className={styles.listWrapper}>
          <TvShowList />
        </div>
      )}
    </>
  );
}

export default TvShowsPage;
