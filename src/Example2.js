import React from 'react'

class Example2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "red",
        }
    }

    //   صدا بزنیم ، عملیات آپدیت اجرا میشود اما نشان داده نمیشود shouldComponentUpdate اگر فانکشن 

    shouldComponentUpdate() {
        return true;
    }
    changeColor = () => {
        this.setState({ color: "blue" })
    }
    render() {
        return (
            <React.Fragment>
                <h3>Click This {this.state.color} </h3>
                <button type="button" onClick={this.changeColor}>Klick me  </button>
            </React.Fragment>
        )
    }
}

export default Example2

