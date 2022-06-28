import React from 'react'
import Header from './Header'
import Pokedex from './Pokedex'

class App extends React.Component {
  render(){
    return(
      <div>
        <Header name='algum titulo qualquer'/>
        <Pokedex/>
      </div>
    )
  }
}

export default App

