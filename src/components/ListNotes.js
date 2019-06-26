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
            </div>
        )
    }
}

export default ListNotes