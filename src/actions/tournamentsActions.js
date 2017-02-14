export const TOURNAMENTS_SHOW = 'TOURNAMENTS_SHOW'
export const TOURNAMENTS_LOADING = 'TOURNAMENTS_LOADING'
export const TOURNAMENTS_ERR_LOADING = 'TOURNAMENTS_ERR_LOADING'

export function showTournaments (data) {
  return {
    type: TOURNAMENTS_SHOW,
    payload: data
  }
}

function tournamentsLoading (bool) {
  return {
    type: TOURNAMENTS_LOADING,
    isLoading: true
  }
}

function tournamentsErrLoading (err) {
  return {
    type: TOURNAMENTS_ERR_LOADING,
    isLoading: false,
    error: err
  }
}

export function flattenJson (data) {
  const flatten = Object.keys(data).map(i => {
    const events = data[i.toString()].liveEvents.map(event => {
      return (
      {
        id: event.eventId,
        time: event.startTime.time,
        p1: {
          id: event.teamA.team.player1.id,
          firstName: event.teamA.team.player1.firstName,
          lastName: event.teamA.team.player1.lastName,
          country: event.teamA.team.player1.country
        },
        p2: {
          id: event.teamB.team.player1.id,
          firstName: event.teamB.team.player1.firstName,
          lastName: event.teamB.team.player1.lastName,
          country: event.teamB.team.player1.country
        },
        tournamentName: event.tournamentName
      }
      )
    })
    return ({id: i, liveEvents: events})
  })
  return flatten
}

export function fetchTournaments () {
  return (dispatch) => {
    dispatch(tournamentsLoading(true))
    fetch('live.json')
      .then(response => response.json())
      .then(json => flattenJson(json))
      .then(flat => dispatch(showTournaments(flat)))
      .catch(error =>
        dispatch(tournamentsErrLoading(error)))
  }
}
