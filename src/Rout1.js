import React from 'react'
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom'
import Example12 from './Example12'
import Example10 from './Example10'
import Example13 from './Example13'
// import Notf from './Notf'

class Rout1 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>

                    <ul>
                        <li> <Link to="/Example10" >First Page</Link> </li>
                        <li> <Link to="/Example12" >Scond Page</Link> </li>
                        <li> <Link to="/Example13" >Thirth Page</Link> </li>
                        <li> <Link to="" >Home</Link> </li>
                        {/* <li> <Link to="" >Home</Link> </li> */}
                    </ul>

                    {/* <Switch> */}
                    <Route exact path="/Example10" component={Example10} />
                    <Route exact path="/Example12" component={Example12} />
                    <Route path="/Example13" component={Example13} />
                    {/* <Route component={Notf} /> */}
                    {/* </Switch> */}
                </BrowserRouter>
            </React.Fragment>
        )
    }
}

export default Rout1