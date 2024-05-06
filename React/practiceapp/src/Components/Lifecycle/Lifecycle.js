import React, { Component } from 'react'

class Lifecycle extends Component {
    constructor() {
        super()
        console.log('I am in constructor')
        this.state = {
            name: "tony"
        }
    }

    componentDidUpdate() {
        console.log("I am in componentDidUpdate")
    }

    componentDidMount() {
        console.log('I am in componentDidMount')
    }

    getSnapshotBeforeUpdate() {
        console.log("I am in getSnapshotBeforeUpdate")
    }

    render() {
        console.log('I am in render method')
        return (
            <div>
                <h1>Life Cycle Methods</h1>
                <h3>Name: {this.state.name}</h3>
                <button onClick={() => {
                    this.setState({ name: "Stark" })
                }}>Click</button>
            </div>
        )
    }
}

export default Lifecycle