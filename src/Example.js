import React from 'react';

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Favoritecolor: 'Red',
        }
    }

    // انجام میشود componentDidMount بعد از 2 ثانیه این فانکشن توسط فانکشن  ز  setTimeout  کاری میکند که  setTimeout فانکشن 

    componentDidMount() {
        setTimeout(() => {
            this.setState({ Favoritecolor: "Blue" })
        }, 2000
        )
    }
    // getSnapshotBeforeUpdate(prevProps,prevState) {}
    // changeColor = () => {
    //     this.setState({ Favoritecolor: "Yellow" })

    // }
    render() {
        return (
            <React.Fragment>
                <h1>My Favorite Color Is {this.state.Favoritecolor} </h1>
            </React.Fragment>
        )
    }
}

export default Example