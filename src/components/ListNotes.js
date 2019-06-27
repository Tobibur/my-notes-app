import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class ListNotes extends Component {

    propTypes = {
        noteList: PropTypes.array.isRequired,
        onDeleteNote: PropTypes.func.isRequired
    }

    render() {

        const { noteList, onDeleteNote } = this.props

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
                    {noteList.map((note) => (
                        <li key={note.id} className='note-list-item'>
                            <div className='note-details'>
                                <li>{note.title}</li>
                                <li>{note.content}</li>
                            </div>
                            <button onClick={() => onDeleteNote(note)} className='note-remove'>
                                Remove
                            </button>
                        </li>
                    ))}

                </ol>
            </div>
        )
    }
}

export default ListNotes