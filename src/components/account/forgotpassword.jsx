import React, { Component } from "react";
import "./account.scss";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import lopginBg from "./images/lopginBg.jpg";
class ForgotPassword extends Component {
  state = {
    account: {
      userEmail: ""
    }
  };
  changeVal = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  submitForgotPassword = e => {
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
            <h3>Forgot yout password?</h3>
            <Form onSubmit={this.submitForgotPassword}>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  value={account.userEmail}
                  name="userEmail"
                  onChange={this.changeVal}
                />
              </Form.Group>
              <Form.Group className="text-center">
                <Button variant="success" block size={"md"} type="submit">
                  Send Password
                </Button>
              </Form.Group>
            </Form>
            <div className="text-center">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary">
                Sign Up
              </Link>
              <br />
              Have an account?{" "}
              <Link to="/login" className="text-primary">
                Login
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default ForgotPassword;
