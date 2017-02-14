import React from 'react'

import styles from './header.css'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <h1 className={styles.title}>IMG Test</h1>
      <nav>
        <ul className={styles.list}>
          <li className={styles.listItem}><a href='#' className={styles.link}>About</a></li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
