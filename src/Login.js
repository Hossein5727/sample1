import React from 'react'

function UserGreeting(props) {
    return <h1>Welcom User 👍 </h1>
}
function GuestGreeting(props) {
    return <h1>Please Login</h1>
}

function Login(props) {
    const isloggdin = props.loggd;


    if (isloggdin) {
        return (
            <div>
                <UserGreeting />
            </div>
        )
    } else {
        return <GuestGreeting />
    }


}

// function Chek(props) {
//     return <div>
//         <button onClick={<Login />}>Checke</button>
//     </div>
// }


export default Login