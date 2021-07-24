import React from 'react';

class Example5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            second: 1,
        }
    }

    // componentDidMount() {
    //     var i = 0;
    //     // i++;
    //     setTimeout(() => {
    //         this.setState(state => ({
    //             second: state.second + 1
    //         })))
    // }
    render() {
        return (
            <React.Fragment >
                <h2> {this.state.second} </h2>
            </React.Fragment >
        )
    }
}

export default Example5