import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    state = {
        isError:false
    }
    render() {
        const { isError } = this.state
        const { children } = this.props
        return (
            <div>
                {isError?<h1>出错了</h1>: children}
            </div>
        )
    }
    componentDidCatch(){
        this.setState({
            isError:true
        })
    }
}
