import React, { Component } from 'react'
import LiveEvent from '../LiveEvent/LiveEvent'

import styles from './tournament.css'

class Tournament extends Component {

  renderLiveEvents () {
    return this.props.liveEvents.map((event, index) => {
      return <LiveEvent {...event} key={event.id + index} />
    })
  }

  render () {
    const liveEvents = this.props.liveEvents.length
    return (
      <div className={styles.container}>
        {liveEvents > 0 &&
          <div>
            <h2 className={styles.title}>Tournament id: {this.props.id}</h2>
            {this.renderLiveEvents() }
          </div>
        }
      </div>
    )
  }
}

export default Tournament
