import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { getTVShows } from "@/redux/tvShows/tvShowsOperations";
import { useDebounce } from "@/helpers/hooks";
import styles from "./SearchBar.module.scss";

function SearchBar() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const debouncedSearchQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedSearchQuery.length >= 2 && debouncedSearchQuery) {
      dispatch(getTVShows(debouncedSearchQuery));
    }
  }, [debouncedSearchQuery, dispatch]);

  function handleInputChange(event) {
    setQuery(event.target.value);
  }

  return (
    <label className={styles.label}>
      <span className={styles.labelText}>
        TV-SHOWS
        <br />
      </span>
      <input
        className={styles.input}
        type="text"
        name="title"
        value={query}
        placeholder="Enter a title... [at least 2 symbols]"
        onChange={handleInputChange}
      />
    </label>
  );
}

export default SearchBar;
