import React from 'react'

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>Login</button>
    )
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>Logout</button>
    )
}

function Usergree(props) {
    return (
        <h2>Welcome</h2>
    )
}

function Guestgree(props) {
    return (
        <h2>Please Sign in</h2>
    )
}

function Logg(props) {
    const isloggd = props.loggd
    if (isloggd) {
        return <Usergree />
    } else {
        return <Guestgree />
    }
}

class Example8 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isloog: false,
            name: 'Hossein',
            sayhello: 'hello'
        }
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
        this.handlechnage = this.handlechnage.bind(this)
    }
    handleLoginClick(props) {
        this.setState({
            isloog: true
        })
    }

    handleLogoutClick(props) {
        this.setState({
            isloog: false
        })
    }

    handlechnage(event) {
        this.setState({
            name: event.target.value
        })
    }

    componentDidMount() {
        this.setState({
            sayhello: ''
        })
    }

    render(props) {
        let txt = ''
        if (this.state.name == '') {
            txt = 'Please 🥺🥺';
        }
        const islogdIn = this.state.isloog
        let button;
        if (islogdIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />
        }
        return (
            <React.Fragment>
                <input type="text" value={this.state.name} onChange={this.handlechnage} />
                <Logg loggd={islogdIn} />
                <p style={{ display: "inline" }} >{this.state.sayhello} {this.state.name}</p>{txt}<br />
                {button}
            </React.Fragment>
        )
    }
}

export default Example8