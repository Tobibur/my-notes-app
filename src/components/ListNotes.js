import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class ListNotes extends Component {

    propTypes = {
        noteList: PropTypes.array.isRequired,
        onDeleteNote: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim() })
    }

    clearQuery = () => {
        this.setState({query: ''})
    }

    render() {

        const { noteList, onDeleteNote } = this.props
        const { query } = this.state

        let showingNotes
        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i')
            showingNotes = noteList.filter((note) => match.test(note.title))
        } else {
            showingNotes = noteList
        }

        showingNotes.sort(sortBy('name'))

        return (
            <div className='list-notes'>
                <div className='list-notes-top'>
                    <input className='search-notes'
                        type='text'
                        placeholder='Search Notes'
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)} />

                    <Link to="/create"
                        className='add-note'>
                        Add Note
                    </Link>
                </div>

                {showingNotes.length !== noteList.length && (
                    <div className='showing-notes'>
                    <span>Now showing {showingNotes.length} of {noteList.length}</span>
                    <button onClick={this.clearQuery}>Show all</button>
                </div>
                )}

                <ol className='note-list'>
                    {showingNotes.map((note) => (
                        <li key={note.id} className='note-list-item'>
                            <div className='note-details'>
                                <h3>{note.title}</h3>
                                <p>{note.content}</p>
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