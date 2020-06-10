import React from "react";
import Register from "./register"
import { HashRouter, Route } from "react-router-dom";


export default class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <HashRouter>
                <div>
                    <Route exact path="/" component={Register} />

                </div>
            </HashRouter>
        );
    }
}
