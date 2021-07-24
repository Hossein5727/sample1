import React from 'react';

class Example3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Fovraite: 'Red',
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ Fovraite: 'Blue' })
        }, 1500
        )
    }
    // عملیات قبل از آپدیت را ذخیره میکند ،  getSnapshotBeforeUpdate فانکشن
    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById('div1').innerHTML =
            "Before update the Fovraite Color is  " + prevState.Fovraite;
    }
    // عملیات بعد از آپدیت را ذخیره میکند componentDidUpdate فانکشن 
    componentDidUpdate() {
        document.getElementById('div2').innerHTML =
            "The Fovraite Color Now Is " + this.state.Fovraite;
    }
    render() {
        return (
            <React.Fragment>
                <h2>My Fovraite Color Is {this.state.Fovraite} </h2>
                <div id="div1"></div>
                <div id="div2"></div>
            </React.Fragment>
        )
    }
}

export default Example3