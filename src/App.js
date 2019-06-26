import React, { Component } from 'react';
import './App.css';
import ListNotes from './components/ListNotes'
import CreateNote from './components/CreateNote'

const notes_data = [
  {
    "id": "ryan",
    "title": "Ryan Florence",
    "description": "ryan@reacttraining.com"
  },
  {
    "id": "michael",
    "title": "Michael Jackson",
    "description": "michael@reacttraining.com"
  },
  {
    "id": "tyler",
    "title": "Tyler McGinnis",
    "description": "tyler@reacttraining.com"
  }
]

class App extends Component {

  state = {
    notes: []
  }

  componentDidMount() {
    this.setState({ notes: notes_data })
  }


  render() {
    return (
      <div className="App">
        <ListNotes noteList={this.state.notes} />
        <CreateNote/>
      </div>
    );
  }
}

export default App;
