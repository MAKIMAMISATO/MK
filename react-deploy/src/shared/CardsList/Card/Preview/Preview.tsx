import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img className= {styles.previewImg} src="https://i.pinimg.com/564x/2e/02/f0/2e02f0b5be6a01b07bef764a018a3778.jpg" alt="preview" />
    </div>
  );
}
