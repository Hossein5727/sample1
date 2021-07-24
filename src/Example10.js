import React from 'react'


///////            IMPOTRTANT                    ///////////////////////////
function Splitpanel(props) {
    return (
        <div className="Splitpanel" style={{}}>
            <div className="splitpanel-top" style={{ display: 'block', margin: 'auto', justifyContent: '', backgroundColor: 'green', width: '50%', textAlign: 'center', padding: '30px', }}>{props.top}</div>
            <div className="splitpanel-left" style={{ display: 'block', float: 'left', backgroundColor: 'red', width: '50%', textAlign: 'center', padding: '30px' }}>{props.left}</div>
            <div className="splitpanel-right" style={{ display: 'block', float: 'right', backgroundColor: 'blue', width: '50%', textAlign: 'center', padding: '30px' }}>{props.right}</div>
        </div>
    )
}
class Example10 extends React.Component {
    render() {
        return (
            <Splitpanel
                right={
                    "Hossein"
                }
                top={
                    "akram"
                }
                left={
                    "mammad"
                }
            />
        )
    }
}

export default Example10 