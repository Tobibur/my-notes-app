import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import ListNotes from './components/ListNotes'
import CreateNote from './components/CreateNote'
import * as NotesAPI from './utils/NotesAPI'

class App extends Component {

  state = {
    notes: []
  }

  componentDidMount() {
    NotesAPI.getAll().then((data) => {
      console.log(data);
      this.setState({ notes: data })
    })
  }

  removeNote = (note) => {
    this.setState((state) => ({
      notes: state.notes.filter((n) => n.id !== note.id)
    }))

    NotesAPI.remove(note)
  }

  createNote(note){
    NotesAPI.create(note).then(note =>{
      this.setState(state => ({
        notes: state.notes.concat([note])
      }))
    })
  }


  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() =>(
          <ListNotes noteList={this.state.notes}
          onDeleteNote={this.removeNote} />
        )}/>
        
        <Route path="/create" render={({history}) =>(
          <CreateNote onCreateNote={(note) => {
            this.createNote(note)
            history.push('/')
          }}/>
        )}/>
        
      </div>
    );
  }
}

export default App;
