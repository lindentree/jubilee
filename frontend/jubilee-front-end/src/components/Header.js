import React from 'react';
import Navbar from './Navbar';
import styles from '../styles.module.css';

function Header() {
  return (

      <div className={styles.headerContainer}>
        <Navbar />
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
  );
}

export default Header;