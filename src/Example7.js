import React from 'react'

class Example7 extends React.Component {
    constructor(props) {
        super(props)
        this.props = {
            // name: 'mammad'
        }
    }
    render(props) {
        return (
            <React.Fragment>
                <p> hi  {this.props.name} </p>
            </React.Fragment>
        )
    }
}

export default Example7