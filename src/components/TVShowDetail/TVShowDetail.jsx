import styles from "./TVShowDetail.module.scss";

function TVShowDetail() {
  return (
    <div>
      <div className={styles.contentWrapper}>
        <img className={styles.image} src="#" alt="tv-show" />
        <table className={styles.table}>
          <tbody>
            <tr>
              <th className={styles.tHeading}>Name</th>
              <td className={styles.tData}>Batman</td>
            </tr>
            <tr>
              <th className={styles.tHeading}>Genres</th>
              <td className={styles.tData}>Test</td>
            </tr>
            <tr>
              <th className={styles.tHeading}>Rating</th>
              <td className={styles.tData}>9.6</td>
            </tr>
            <tr>
              <th className={styles.tHeading}>Link</th>
              <td className={styles.tData}>Test</td>
            </tr>
            <tr>
              <th className={styles.tHeading}>Status</th>
              <td className={styles.tData}>Test</td>
            </tr>
            <tr>
              <th className={styles.tHeading}>Schedule</th>
              <td className={styles.tData}>Tuesday</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <p>Show’s summary</p>
      </div>
    </div>
  );
}

export default TVShowDetail;
