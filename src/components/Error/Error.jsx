import styles from "./Error.module.scss";

function Error() {
  return (
    <p className={styles.errorText}>
      Something went wrong. Please try again later
    </p>
  );
}

export default Error;
