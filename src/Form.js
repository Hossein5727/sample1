import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Hossein',
            chek: true,
            text1: 'Please Enter Somthing',
            selected: true,
            age: null,
        }
        this.hanldeChange1 = this.hanldeChange1.bind(this)
        this.hanldeChange2 = this.hanldeChange2.bind(this)
        this.hanldeChange3 = this.hanldeChange3.bind(this)
        this.hanldeChange4 = this.hanldeChange4.bind(this)
        this.submithandler = this.submithandler.bind(this)
        this.hanldeChange5 = this.hanldeChange5.bind(this)
    }
    hanldeChange1(event) {
        this.setState({
            name: event.target.value
            // مورد نظرمون رو جایگزین کنیم value اینجوری میتوانیم 
            // event.target.value = "mammad"
        })
    }

    hanldeChange2(event) {
        this.setState({
            chek: event.target.checked
        })
    }
    hanldeChange3(event) {
        this.setState({
            text1: event.target.value
        })
    }
    hanldeChange4(event) {
        this.setState({
            name: event.target.value
        })
    }
    hanldeChange5(event) {
        this.setState({
            age: event.target.value
        })
    }
    submithandler(event) {
        event.preventDefault();
        var age = this.state.age;
        if (!Number(age)) {
            alert('Your Age Must Be Number !!!!!!!!!')
        } else {
            alert('Send 👍')
        }
    }
    componentDidUpdate() {
        console.log(this.state.name);
    }
    render() {
        var txt1 = '';
        if (this.state.name != "") {
            txt1 = "Welcome  " + this.state.name + "  😎😎"
        } else {
            txt1 = "GoodBye"
        }
        return (
            <React.Fragment>
                {/* {txt1} */}
                <form onSubmit={this.submithandler}>
                    {/* <label>Name </label>
                    <input type="text" value={this.state.name} name="Name" onChange={this.hanldeChange1} />
                    <br />
                    <input type="checkbox" name="chk1" checked={this.state.chek} onChange={this.hanldeChange2} />
                    <input type="checkbox" name="chk1" />
                    <input type="checkbox" name="chk1" />
                    <input type="checkbox" name="chk1" />
                    <br />
                    <textarea value={this.state.text1} onChange={this.hanldeChange3}></textarea><br />
                    <select>
                        <option>CHOISE</option>
                        <option>Hossein</option>
                        <option>mammad</option>
                        <option selected={this.state.selected}>reza</option>
                        <option>akram</option>
                    </select> */}
                    <br />
                    {/* <input type="text" value={this.state.name} onChange={this.hanldeChange4} /><br />
                    <label>Your Age </label>
                    <input type="text" value={this.state.age} onChange={this.hanldeChange5} />
                    <input type="submit" /> */}

                    <h2 style={{ color: "blue", textAlign: "center" }} >Hossein</h2>
                </form>
            </React.Fragment>
        )
    }
}

export default Form