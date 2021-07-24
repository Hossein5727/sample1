import React from 'react'

class Example9 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name1: '',
            say1: "Your Name is:"
        }
        this.handlechangeclick = this.handlechangeclick.bind(this)
    }
    handlechangeclick(event) {
        this.setState({
            name1: event.target.value
        })
    }
    // componentDidUpdate() {

    // }
    render() {
        let txt1 = ''
        if (this.state.name1 != '') {
            txt1 = 'Your Name Is: '
        } else {
            txt1 = '🥺😢'
        }
        return (
            <React.Fragment>
                <label>Enter Your Name </label>
                <input type="text" value={this.state.name1} onChange={this.handlechangeclick}></input><br />
                {/* <p>{this.state.say1} {this.state.name1}</p> */}
                {txt1}<span>{this.state.name1}</span>
            </React.Fragment>
        )
    }
}

export default Example9