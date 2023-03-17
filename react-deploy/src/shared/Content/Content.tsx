import React from 'react';
import styles from './content.css';

interface IlayoutProps {
  children?: React.ReactNode
}

export function Content({children}: IlayoutProps) {
  return (
    <main className={styles.content}>
      {children}
    </main>
  );
}