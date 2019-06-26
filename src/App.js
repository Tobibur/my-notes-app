import React from 'react';
import './App.css';
import ListNotes from './components/ListNotes'

const notes = [
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

function App() {
  return (
    <div className="App">
      <ListNotes noteList={notes}/>
    </div>
  );
}

export default App;
