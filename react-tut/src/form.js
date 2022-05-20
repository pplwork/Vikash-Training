import React, { Component } from 'react'

export default class Form extends Component {

    state = {
        name: null,
        age: null,
        gender: null
    }

    handleChange = (e) => {
        this.setState({
            // ...state,
            [e.target.id]: (e.target.value)
        })
    }

    handlesubmit = (e) => {
        e.preventDefault()
        console.log(e, this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handlesubmit}>
                    <label htmlFor='name' />
                    <input type='text' id='name' onChange={this.handleChange} />
                    <label htmlFor='age' />
                    <input type='text' id='age' onChange={this.handleChange} />
                    <label htmlFor='gender' />
                    <input type='text' id='gender' onChange={this.handleChange} />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}
