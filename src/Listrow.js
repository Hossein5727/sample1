import React from 'react'



class Listrow extends React.Component {
    handlechnge(event) {
        if (event.target.checked) {
            let elem1 = document.createElement('p')
            elem1.style.display = 'inline-block'
            elem1.style.padding = "13px"
            elem1.style.borderRadius = "11px"
            elem1.style.backgroundColor = 'blue'
            let node1 = document.createTextNode("add!")
            elem1.appendChild(node1)
            elem1.style.textDecoration = 'line - through'
            const par1 = document.getElementById('root22')
            document.body.insertBefore(elem1, par1)
        } else if (event.target.checked == false) {
            let elem1 = document.createElement('p',)
            elem1.style.display = 'inline-block'
            elem1.style.padding = "13px"
            elem1.style.borderRadius = "11px"
            elem1.style.backgroundColor = 'red'
            let node1 = document.createTextNode("deleted!")
            elem1.appendChild(node1)
            // elem1.style.textDecoration = 'line - through'
            const par1 = document.getElementById('root22')
            document.body.insertBefore(elem1, par1)
        }
    }
    render() {
        let x = {}
        if (this.props.checked == true) {
            x = {
                textDecoration: 'line - through'
            }
        }
        return (
            <React.Fragment>
                <label style={x}>
                    <input className="ck" type="checkbox" onChange={this.handlechnge} checked={this.props.checked} />
                    {this.props.content}
                </label>
                <br />
            </React.Fragment >
        )
    }
}
export default Listrow