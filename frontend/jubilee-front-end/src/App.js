import React from 'react';
import styles from './styles.module.css';

function App() {
  return (
    <div>
      <div className={styles.container}>
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

export default App;
