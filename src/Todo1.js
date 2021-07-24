import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import Listrow from './Listrow'

class Todo1 extends React.Component {
    constructor() {
        super()
        this.state = {
            tempinput: '',
            list: [],
            num1: 12
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.hanleCahngeInput = this.hanleCahngeInput.bind(this)
    }
    handleSubmit(event) {
        let newtemp = {
            key: uuidv4(),
            content: this.state.tempinput,
            cheked: false

        }
        let templist = []
        if (this.state.list) {
            templist = this.state.list
        }
        templist.push(newtemp)
        this.setState({
            list: templist,
            tempinput: ''
        })
        if (this.state.num1 >= 0) {
            alert("add  Your Item   ==> " + this.state.tempinput)
        }
        event.preventDefault()
    }                     
    hanleCahngeInput(event) {
        this.setState({
            tempinput: event.target.value
        })
    }
    render() {
        const list = this.state.list.map((row) => {
            return (<Listrow cheked={row.cheked} content={row.content} key={row.key} />)
        })
        return (
            <React.Fragment>
                { list}
                < form onSubmit={this.handleSubmit}>
                    <input type="text" maxLength={this.state.num1} value={this.state.tempinput} onChange={this.hanleCahngeInput} />
                    <button type="submit">Insert</button>
                </form>
            </React.Fragment >
        )
    }
}

export default Todo1