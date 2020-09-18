import React from 'react';
import styles from '../styles.module.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lyrics: ''
    }
  }

  render() {
    return (
      <div className={styles.titleBox}>
        <form className={styles.searchBar}>
          <input
            type="text"
            name="lyrics"
            placeholder="Type the lyrics in your mind..."
          />
          <button type="submit" className={styles.searchBtn}>
            SEARCH SONGS
          </button>
        </form>

      </div>
    )
  }

}

export default SearchBar;