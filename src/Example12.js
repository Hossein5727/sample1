import React from 'react'
import Reactbootstrap from 'react-bootstrap'
// import Picture from '*.png'

function Panel1(props) {
    return (
        <div style={{ backgroundColor: 'blue', border: '2px solid gray', width: '30%', margin: 'auto', textAlign: 'center', borderRadius: '18px' }} className="d-flex1">
            <div className="image-panel1">
                {/* <img src="/public/logo192.png"></img> */}
                <h1>Mammad</h1>
            </div>
            <div className="txt-panel1">
                <h2>{props.txtpanel1}</h2>
            </div>
        </div>
    )
}

class Example12 extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <Panel1 txtpanel1={'Hossein'} />
                <br />
                <Panel1 txtpanel1={'Reza'} />
                <br />
                <Panel1 txtpanel1={'Voria'} />
                <Panel1 txtpanel1={'Rashid'} />
            </div>
        )
    }
}

export default Example12