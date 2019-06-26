import React, { Component } from 'react'

class ListNotes extends Component {

    render() {
        return (
            <div className='list-contacts'>
                <div className='list-contacts-top'>
                    <input className='search-contacts'
                        type='text'
                        placeholder='Search Notes' />

                    <a href="#"
                        className='add-contact'>
                        Add Contact
                    </a>
                </div>

                <ol className='contact-list'>
                    {this.props.noteList.map((note) => (
                        <li key={note.id} className='contact-list-item'>
                            <div className='contact-details'>
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