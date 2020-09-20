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
            Got something on your mind?
          </p>
          <p className={styles.titleSub}>
            Type it here and we'll recommend songs with lyrics that relate.
          </p>
        </div>
      </div>
  );
}

export default Header;