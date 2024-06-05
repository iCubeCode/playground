import React, { Component } from 'react'

export default class ErrorBoundry extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isError: false
        }
    }

    static getDerivedStateFromError(error) {

        console.log(error.message)

        return {
            isError: true
        }

    }

    render() {

        if (this.state.isError) {
            return this.props.fallback
        }

        return this.props.children

    }
}
