import Link from 'next/link';

import { AiFillInstagram } from 'react-icons/ai';
import { FaHouzz } from 'react-icons/fa';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

import styles from '@/styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header_container}>
      <div>
        <h1 className={styles.logo}>Olimpo Estudio</h1>
        <span className={styles.icons}>
          <a href="">
            <AiFillInstagram />
          </a>
          <a href="">
            <FaHouzz />
          </a>
          <a href="">
            <MdDarkMode />
          </a>
          <a href="">
            <MdLightMode />
          </a>
        </span>
      </div>

      <h2 className={styles.tagline}>Estudio de interiorismo y reformas en Madrid</h2>

      <nav className={styles.nav_container}>
        <ul>
          <li>
            <Link href="">
              <a>proyectos</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>servicios</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>nosotros</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>contacto</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
