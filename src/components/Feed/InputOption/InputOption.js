import React from 'react';
import styles from './InputOption.module.css';

function InputOption({ color, Icon, title }) {
  return (
    <div className={styles.Container}>
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOption;
