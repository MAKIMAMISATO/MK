import React from 'react';
import styles from './textcontent.css';

export function TextContent() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img
            className={styles.avatar} 
            src="https://i.pinimg.com/564x/50/88/c0/5088c0edfcc59726e383ced44d6b628d.jpg" 
            alt="" 
          />
          <a href="#user-url" className={styles.username}>Misato Katsuragi</a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>posted </span>
          4 hours ago
        </span>
      </div>
      <h2 className={styles.title}>
        <a href="#post-url" className={styles.postLink}>
          Misato Katsuragi is a fictional character from the Gainax-created media franchise Neon Genesis
        </a>
      </h2>
    </div>
  );
}
