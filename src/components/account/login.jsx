import React, { Component } from "react";
import "./account.scss";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import lopginBg from "./images/lopginBg.jpg";
class Login extends Component {
  state = {
    account: {
      userName: "",
      userPassword: ""
    }
  };
  changeVal = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  submitLogin = e => {
    e.preventDefault();
  };
  render() {
    const { account } = this.state;
    return (
      <main className="main">
        <div
          className="account"
          style={{ backgroundImage: "url(" + lopginBg + ")" }}
        >
          <div className="accountInner">
            <h3>Login</h3>
            <Form onSubmit={this.submitLogin}>
              <Form.Group>
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  value={account.userName}
                  name="userName"
                  onChange={this.changeVal}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={account.userPassword}
                  name="userPassword"
                  onChange={this.changeVal}
                />
              </Form.Group>
              <Form.Group className="text-center">
                <Button variant="success" block size={"md"} type="submit">
                  Login
                </Button>
              </Form.Group>
            </Form>
            <div className="text-center">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary">
                Sign Up
              </Link>
              <br />
              <Link to="/forgotpassword" className="text-primary">
                Forgot yout password?
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Login;
