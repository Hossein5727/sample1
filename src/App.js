//
import React from 'react';
// import Car from './Car';
// import Element from './Element'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Color: 'Red',
            name: 'Hossein',
            family: props.family
        };
    }
    render() {
        return (
            <React.Fragment>
                <h1> Welcome to My Website  {this.state.nam}  and my family is  {this.state.family}  </h1>
                <p> My Name is {this.state.name} </p>
            </React.Fragment>
        )
    }
}



export default App;