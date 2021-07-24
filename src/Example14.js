import React from 'react'
import { Switch, Link, Route, BrowserRouter } from 'react-router-dom'
import Rout1 from './Rout1'

class Example14 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <ul>
                        <li> <Link to="/route">First Project</Link> </li>
                    </ul>
                    <Route path="/route" component={Rout1} />
                </BrowserRouter>
            </React.Fragment>
        )
    }
}
export default Example14