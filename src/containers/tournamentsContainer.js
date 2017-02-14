import React, { Component } from 'react'
import { connect } from 'react-redux'

import Tournament from '../components/Tournament/Tournament'
import { fetchTournaments } from '../actions/tournamentsActions'

import styles from './tournamentsContainer.css'

class TournamentsContainer extends Component {

  componentWillMount () {
    this.props.fetchTournaments()
  }

  renderTournaments () {
    if (this.props.tournaments.list.length > 0) {
      return this.props.tournaments.list.map(tournament => {
        if (tournament.liveEvents.length > 0)
          return <Tournament {...tournament} key={tournament.id} />
      })
    }
    else return <p>No Live Events at the moment...</p>
  }

  render () {
    return (
      <div className={styles.tournamentsContainer}>
        <h1>Tournaments Now Live</h1>
        { this.renderTournaments() }
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    tournaments: state.tournaments
  }
}

export default connect(mapStateToProps, {fetchTournaments})(TournamentsContainer)
