import React, { Component } from "react";
import "./account.scss";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import lopginBg from "./images/lopginBg.jpg";
class SignUp extends Component {
  state = {
    account: {
      userName: "",
      userEmail: "",
      userPassword: ""
    }
  };
  changeVal = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  submitSignUp = e => {
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
            <h3>Sign Up</h3>
            <Form onSubmit={this.submitSignUp}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={account.userName}
                  name="userName"
                  onChange={this.changeVal}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  value={account.userEmail}
                  name="userEmail"
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
                  Sign Up
                </Button>
              </Form.Group>
            </Form>
            <div className="text-center">
              Have an account?{" "}
              <Link to="/login" className="text-primary">
                Login
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

export default SignUp;
