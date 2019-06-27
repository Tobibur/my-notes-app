import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class CreateNote extends Component{
    render(){
        return(
            <div>
                <Link to="/" className='close-create-note'>Close</Link>
                <form className='create-note-form'>
                    <div className='create-note-details'>
                        <input type="text" name="title" placeholder="Note Title"/>
                        <input type="text" name="content" placeholder="Write something.."/>
                        <button>Add Note</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateNote