import React from 'react';
import styles from '../styles.module.css';
import logo from '../images/icon1.png';


const Navbar = () => {
  const underline = {textDecoration: "none"};
  const textColor = {color: "#F55E61"};

  return (
    <div className={styles.navbar}>
        <img className={styles.logo} src={logo} />
      <ul className={styles.navUl}>
       
      </ul>
    </div>
  );
}

export default Navbar;
