import React from 'react';
import Link from 'next/link';

import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.nav_container}>
      <ul>
        <li>
          <Link href="">
            <a className={styles.nav_link}>proyectos</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a className={styles.nav_link}>servicios</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a className={styles.nav_link}>nosotros</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a className={styles.nav_link}>contacto</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
