import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../store/actions";

class Login extends Component {
  state = {
    email: "",
    password: "",
    isValid: true,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const { login, history } = this.props;
    if (!email.length || !password.length) {
      this.setState({ isValid: false });
    } else {
      login(email, password);
      history.push("/registered-customers");
    }
  };

  render() {
    const { email, password, isValid } = this.state;

    return (
      <div>
        <h1>Login</h1>
        <form action="#">
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit" onClick={this.handleSubmit}>
            Login
          </button>
        </form>
        {!isValid && <p>Fill in all fields</p>}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(login(email, password)),
});

export default connect(null, mapDispatchToProps)(Login);
