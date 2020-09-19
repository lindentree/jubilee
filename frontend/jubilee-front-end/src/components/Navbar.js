import React from 'react';
import styles from '../styles.module.css';
import logo from '../images/music-icon.png';


const Navbar = () => {
  const underline = {textDecoration: "none"};
  const textColor = {color: "#F55E61"};

  return (
    <div className={styles.navbar}>
        <img className={styles.logo} src={logo} />
      <ul className={styles.navUl}>
        <li className={styles.navLi}>
            About
        </li>
        <li className={styles.navLi}>
            Contact
        </li>
        <li className={` ${styles.navLi} ${styles.signUp} `}>
            Sign Up
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
