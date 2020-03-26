import React, { Component } from 'react';
import axios from 'axios';

class Pokedex extends Component { 
  state = { pokemons: [] }

  componentDidMount() {
    axios.get('/api/pokemons')
      .then( res => {
        this.setState({ pokemons: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  render() {
    return(
      <>
        <h1>Pokedex</h1>
      </>
    )
  }
}

export default Pokedex;