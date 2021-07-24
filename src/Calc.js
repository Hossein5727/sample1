import React from 'react'
import TempretorInput from './TempretorInput'

class Calc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    handleCel() {
        return '';
    }

    handleFar() {
        return '';
    }

    render() {
        return (
            <React.Fragment>
                <TempretorInput type="c" Tempretor={this.handleCel} />
                <TempretorInput type="f" Tempretor={this.handleFar} />
            </React.Fragment>
        )
    }
}
export default Calc