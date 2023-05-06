import styles from "./SearchBar.module.scss";

function SearchBar() {
  return (
    <label className={styles.label}>
      TV-SHOWS
      <input
        className={styles.input}
        type="text"
        name="title"
        placeholder="Enter a title.."
      />
    </label>
  );
}

export default SearchBar;
