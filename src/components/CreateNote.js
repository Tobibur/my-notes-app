import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import serializeForm from 'form-serialize'

class CreateNote extends Component{

    handleSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true })
        console.log(values)
        if(this.props.onCreateNote)
            this.props.onCreateNote(values)
    }
    render(){
        return(
            <div>
                <Link to="/" className='close-create-note'>Close</Link>
                <form onSubmit={this.handleSubmit} className='create-note-form'>
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