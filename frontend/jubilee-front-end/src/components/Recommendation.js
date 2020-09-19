import React from 'react';
import styles from '../styles.module.css';
import recommend from '../data/recommend.json';


class Recommendation extends React.Component {

  render() {
    return (
      <div className={styles.recommend}>
        <h2>Recommendations:</h2>
       {recommend.map(item =>{
         return (
           <div className={styles.songList}>
            <div>{item["Song"]} -
              <span className={styles.singer}>By {item["Artist"]}</span>
            </div>
           </div>
         );
       })}
      </div>
    )
  }
}

export default Recommendation;