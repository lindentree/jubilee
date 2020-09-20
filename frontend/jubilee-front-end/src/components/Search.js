import React from 'react';
import styles from '../styles.module.css';
import data from '../data/data.json';
import axios from 'axios';

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
    console.log('firing', lyrics)
    let data = {"top_k": 10, "mode": "search",  "data": [`text:${lyrics}`]}

    axios.post(`http://0.0.0.0:5000/api/search`, data)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
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