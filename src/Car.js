import React from 'react';

class Car extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <React.Fragment>
                <h1>Hello Hossein  {this.props.age} </h1>
            </React.Fragment>
        )
    }
}

export default Car