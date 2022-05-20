import React, { Component } from 'react'

export default class Temp extends Component {

    state = {
        name: 'vikash',
        age: 34
    }

    changeText = (e) => {
        this.setState({
            name: e.target.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.name, this.state.age)
    }

    componentDidMount(){
        console.log('component mounted')
    }

    componentDidUpdate(prevprop,prevstate){

        console.log(prevprop,prevstate)

    }

    render() {
        const { role, no } = this.props;
        const { ninja } = this.props;
        console.log(this.props)
        console.log(ninja)

        const ninjaList = ninja.map((item, i) => {
            return (
                <div key={i}>
                    <h1>Name: {item.name}</h1>
                    <h1>Name: {item.age}</h1>
                    <h1>Name: {item.blet}</h1>
                </div>
            )
        })

        return (
            <div>
                {
                    ninjaList
                }

            </div>
        )
    }
}
