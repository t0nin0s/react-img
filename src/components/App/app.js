import React from 'react'
import Header from '../Header/Header'
import TournamentsContainer from '../../containers/tournamentsContainer'

const App = (props) => (
  <div>
    <Header name={props.name} />
    <TournamentsContainer />
  </div>
)

export default App
