import SearchBar from "../SearchBar";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <SearchBar />
    </header>
  );
}

export default Header;
