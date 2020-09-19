import React from 'react';
import styles from '../styles.module.css';
import icon from '../images/music-icon.png';

function Header() {
  return (
    <div>

      <div className={styles.headerContainer}>
       <img src={icon} alt="" className={styles.icon}/>

        <div className={styles.titleBox}>
          <h1 className={styles.title}>
            <span className={styles.titleMain}>JUBILEE</span>
          </h1>
          <p className={styles.titleSub}>
            Having trouble remembering a song?
          </p>
          <p className={styles.titleSub}>
            Type whatever line you remember and we’ ll help you out
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;