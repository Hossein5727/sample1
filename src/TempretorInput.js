import React from 'react'


class TempretorInput extends React.Component {
    constructor() {
        super()
    }


    handlechange(event) {
        this.props.Tempretor(event.target.value)
    }

    render(props) {
        const scals = {
            c: "Celcius",
            f: "Farenhite",
        }
        return (
            <React.Fragment>
                <label>{scals[this.props.type]}</label>
                <input type="text" onChange={this.handlechange} />
                <br />
            </React.Fragment>
        )
    }
}
export default TempretorInput