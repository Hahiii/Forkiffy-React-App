import React from "react"
import { Link } from "react-router-dom";
import axios from "axios"
import "./register.css"


export default class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            first: "",
            last: "",
            email: "",
            password: ""

        }
    }


    onSubmit = e => {
        e.preventDefault();
        this.setState({
            first: this.state.first,
            last: this.state.last,
            email: this.state.email,
            password: this.state.password
        })
        console.log("this.state", this.state);
    }



    handleChange = e => {
          const {name, value} = e.target
          this.setState({
              [name]: value})
}

    render() {
    return (
        <div>

            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Create an Account</h1>
                    <form>
                        <div className="firstname">
                            <label htmlFor="firstname">First Name</label>
                            <input
                                name="first"
                                type="text"
                                placeholder="First"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="lastname">
                            <label htmlFor="lastname">Last Name</label>
                            <input
                                name="last"
                                type="text"
                                placeholder="Last"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input
                                name="email"
                                type="text"
                                placeholder="email"
                                onChange={this.handleChange}
                            />

                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                onChange={this.handleChange}
                            />

                        </div>

                        <div className="createAccount">
                            <button

                                onClick={this.onSubmit}
                            >
                                Submit
                            </button>
                            <small>
                                Already have an Account?{" "}
                                <Link className="login" to="/login">
                                    Please Login
                                </Link>
                            </small>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

}
