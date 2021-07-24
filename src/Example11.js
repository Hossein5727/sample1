import React, { useEffect } from 'react'



// function Ex(props) {
//     useEffect(()=>{},[])


//     return(

//     )
// }

function Ex(props) {
    return (
        <React.Fragment>
            <h1>Welcome!</h1>
            <p>Hossein</p>
        </React.Fragment>
    )
}

function Panel1(props) {
    return (
        <div className="panel">
            <div className="f1">{props.item1}</div>
            <div className="f2">{props.item2}</div>
            <div className="f3">{props.item3}</div>
        </div>
    )
}

class Example11 extends React.Component {
    render() {
        return (
            <Panel1
                item1={<Ex />}
                item2={<Ex />}
                item3={<Ex />}
            />
        )
    }
}

export default Example11