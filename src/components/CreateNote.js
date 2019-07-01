import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'

class CreateNote extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true })
        console.log(values)
        if (this.props.onCreateNote)
            this.props.onCreateNote(values)
    }
    render() {
        return (
            <div>
                <Link to="/" className='close-create-note'>Close</Link>
                <div align='center'>
                    <div className="wrap-contact100">

                        <form onSubmit={this.handleSubmit} className="contact100-form validate-form">
                            <span className="contact100-form-title">
                                Create New Note
				</span>

                            <div className="wrap-input100 validate-input" data-validate="Please enter your name">
                                <input className="input100" type="text" name="title" placeholder="Note Title" />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Please enter your message">
                                <textarea className="input100" name="content" placeholder="Write something.."></textarea>
                                <span className="focus-input100"></span>
                            </div>

                            <div className="container-contact100-form-btn">
                                <button className="contact100-form-btn">
                                    Add Note
					</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default CreateNote