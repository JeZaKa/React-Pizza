import React from 'react';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <span className={styles.icon}>😧</span>
      <br />
      <h1>Ничего не найдено</h1>
    </div>
  );
}

export default NotFoundBlock;