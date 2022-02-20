import React from 'react';
import styles from './SeparationLine.module.css';

const SeparationLine = ({ color }) => {
  return (
    <div
      className={`${styles.vertical_line} ${color === 'primary' ? styles.primary : styles.black}`}
    ></div>
  );
};

export default SeparationLine;
