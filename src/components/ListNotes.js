import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ListNotes extends Component {

    render() {
        return (
            <div className='list-notes'>
                <div className='list-notes-top'>
                    <input className='search-notes'
                        type='text'
                        placeholder='Search Notes' />

                    <Link to="/create"
                        className='add-note'>
                        Add Note
                    </Link>
                </div>

                <ol className='note-list'>
                    {this.props.noteList.map((note) => (
                        <li key={note.id} className='note-list-item'>
                            <div className='note-details'>
                                <li>{note.title}</li>
                                <li>{note.description}</li>
                            </div>
                        </li>
                    ))}

                </ol>
            </div>
        )
    }
}

export default ListNotes