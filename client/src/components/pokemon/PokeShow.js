import React, { Component } from 'react';
import PokeForm from './PokeForm';
import { Button } from 'semantic-ui-react';

class PokeShow extends Component {
  state = { showForm: false } 

  toggleForm = () => this.setState({ showForm: !this.state.showForm })

  render() {
    const { name, location, level, move, deletePokemon, id, greeting } = this.props.location.state
    const { showForm } = this.state 
    return(
      <>  
        <h1>PokeShow</h1>
        <p>{greeting}</p>
        {
          showForm ?
            <PokeForm {...this.props} toggleForm={this.toggleForm} />
          :
          <div>
            <h1>Name: {name}</h1>
            <p>Location: {location}</p>
            <p>Level: {level}</p>
            <p>Move: {move}</p>
            <Button onClick={this.toggleForm}>
              Edit
            </Button>
            <Button onClick={() => deletePokemon(id)}>
              Delete
            </Button>
          </div>
        }
      </>
    )
  }
}

export default PokeShow;