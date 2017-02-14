import React from 'react'

import styles from './player.css'

const Player = (props) => (
  <div className={styles.player}>
    <span className={styles.name}>{props.firstName} {props.lastName}</span>
    <span className={styles.country}> ({ props.country })</span>
  </div>
)

export default Player
