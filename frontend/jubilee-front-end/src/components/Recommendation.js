import React from 'react';
import styles from '../styles.module.css';


class Recommendation extends React.Component {

  render() {
    return (
      <div className={styles.displayContainer}>
       {this.props.filtersong.map(item =>{
         return (
           <div className={styles.row}>
            <div className={styles.rowTitle}>{item["Song"]}</div>
            <div className={styles.rowSubTitle}> By  {item["Artist"]}</div>
            <div className={styles.LyricsHead}>Lyrics</div>
            <div className={styles.rowLyrics}>{item["Lyrics"]}</div>
           </div>
         );
       })}
      </div>
    )
  }
}

export default Recommendation;