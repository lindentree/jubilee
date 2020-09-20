import React from 'react';
import styles from '../styles.module.css';
import data from '../data/data.json';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lyrics: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      value: e.target.value
    });
    this.props.search(e.target.value);

  }

  handleSubmit(e) {
    e.preventDefault();
    let lyrics = document.querySelector('#input').value;
    this.props.search(lyrics);
    e.target.reset();
  }

  render() {
    return (
      <div className={styles.titleBox}>
        <form
          className={styles.searchBar}
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <input
            id="input"
            type="text"
            name="lyrics"
            onChange={this.handleChange}
            required
            placeholder="Type the lyrics in your mind..."
          />
          <button type="submit" value="submit"
            className = {styles.searchBtn}>
              SEARCH SONGS
          </button>
        </form>
      </div>
    )
  }
}

export default Search;