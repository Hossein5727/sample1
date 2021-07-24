import React from 'react'

class Example13 extends React.Component {
    constructor(props) {
        super(props)
        this.handlechange1 = this.handlechange1.bind(this)
    }
    handlechange1(event) {
        this.props.history.push("/Example12");
    }
    render() {
        return (
            <React.Fragment>
                <h1>Example13</h1>
                <button onClick={this.handlechange1}>go Example13</button>
            </React.Fragment>
        )
    }
}
export default Example13