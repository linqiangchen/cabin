import React, { Component } from 'react'
 import BetterScroll from 'better-scroll'

export default class AppScroll extends Component {

    componentDidMount() {

        this.bs = new BetterScroll('.appScrollWrap', {
          scrollX:false,
          scrollY:true
        })
        this.bs.on('scrollStart',()=>{
            
            this.bs.refresh()
        })
    }
    render() {
        return (
            <div className={"appScrollWrap " + this.props.className}>
                <div className="wrap">
                {this.props.children}
                </div>
            </div>
        )
    }
}
