import React from 'react';

class Example4 extends React.Component {

    constructor(props) {
        super(props);
        this.shot = this.shot.bind(this);
        this.state = {
            Color: "Red",
        }
    }

    shot(args, pv) {
        if (pv.type === "click") {
            console.log(pv);
            this.setState({ Color: args })
        } else {
            alert("You Can`t")
        }
    }

    render() {
        return (
            <React.Fragment>
                <h2> {this.state.Color} </h2>
                <button type="button" onClick={(pv) => this.shot("Sex", pv)}>Click me</button>
            </React.Fragment>
        )
    }
}

export default Example4