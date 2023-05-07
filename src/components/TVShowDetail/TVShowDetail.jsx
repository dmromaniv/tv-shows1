import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import parse from "html-react-parser";

import "animate.css";
import { fetchTVShowById } from "../../services/tvmazeAPI";
import styles from "./TVShowDetail.module.scss";

function TVShowDetail() {
  const { id } = useParams();
  const [tvShowInfo, setTVShowInfo] = useState(null);
  const tvShows = useSelector((state) => state.tvShowsData);

  useEffect(() => {
    (async () => {
      if (tvShows) {
        const { show } = tvShows.find(({ show }) => show.id === +id);
        setTVShowInfo(show);
      } else {
        try {
          const response = await fetchTVShowById(id);
          setTVShowInfo(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [id, tvShows]);

  if (tvShowInfo) {
    const { name, image, summary, genres, rating, status, schedule } =
      tvShowInfo;
    return (
      <>
        <div className={styles.detailsContent}>
          <Link to="/">Go back</Link>
          <div
            className={`${styles.imgWrapper} animate__animated animate__pulse`}
          >
            <img
              className={styles.image}
              src={
                image
                  ? image.original
                  : "https://cdn.pixabay.com/photo/2017/10/06/11/09/tile-2822716_960_720.jpg"
              }
              alt={name}
            />
            <div className={styles.summaryWrapper}>{parse(summary)}</div>
          </div>

          <table className={styles.table}>
            <tbody>
              <tr>
                <th className={styles.tHeading}>Name</th>
                <td className={styles.tData}>{name}</td>
              </tr>
              <tr>
                <th className={styles.tHeading}>Genres</th>
                <td className={styles.tData}>
                  {genres.length > 0 ? genres.join(", ") : "no info"}
                </td>
              </tr>
              <tr>
                <th className={styles.tHeading}>Rating</th>
                <td className={styles.tData}>{rating.average || "no info"}</td>
              </tr>
              <tr>
                <th className={styles.tHeading}>Link</th>
                <td className={styles.tData}>
                  <a
                    className={styles.link}
                    href={tvShowInfo.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {name}
                  </a>
                </td>
              </tr>
              <tr>
                <th className={styles.tHeading}>Status</th>
                <td className={styles.tData}>{status}</td>
              </tr>
              <tr>
                <th className={styles.tHeading}>Schedule</th>
                <td className={styles.tData}>
                  {schedule.days.length !== 0 ? (
                    <>
                      <span className={styles.scheduleDays}>
                        {schedule.days.join(", ")}
                      </span>
                      <span className={styles.scheduleTime}>
                        {schedule.time}
                      </span>
                    </>
                  ) : (
                    "no info"
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default TVShowDetail;
