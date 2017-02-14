import React, { Component } from 'react'

import Player from '../Player/Player'

import styles from './liveEvent.css'

class LiveEvent extends Component {
  toLocalTime (time) {
    const separator = time.indexOf('+') > 0 ? '+' : '-'
    return (
      time.split(separator).reduce((orig, local) => {
        if (separator === '+') {
          const localHour = parseInt(orig.split(':')[0]) - parseInt(local.split(':')[0])
          return localHour.toString() + ':00'
        } else {
          const localHour = parseInt(orig.split(':')[0]) + parseInt(local.split(':')[0])
          return localHour.toString() + ':00'
        }
      })
    )
  }

  render () {
    return (
      <div className={styles.liveEvent}>
        <div className={styles.info}>Now Live:
          <span className={styles.tournamentName}> {this.props.tournamentName}</span>
          &nbsp;Started at:&nbsp;
          <span className={styles.time}>{this.props.time} ({this.toLocalTime(this.props.time)} UK Time)</span>
        </div>
        <div className={styles.draw}>
          <Player {...this.props.p1} />
          <span className={styles.vs}>VS</span>
          <Player {...this.props.p2} />
        </div>
      </div>
    )
  }
}

export default LiveEvent
