import React, { Component } from "react";
import { connect } from "react-redux";
import { addCustomer } from "../store/actions";
import { Link } from "react-router-dom";

class RegisterCustomer extends Component {
  state = {
    name: "",
    age: "",
    email: "",
    isValid: true,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, age, email } = this.state;
    const { addNewCustomer } = this.props;
    if (!name || !age || !email) {
      this.setState({ isValid: false });
    } else {
      addNewCustomer({ name, age, email });
      this.setState({ name: "", age: "", email: "", isValid: true });
    }
  };

  render() {
    const { name, age, email, isValid } = this.state;
    return (
      <div>
        <h1>Register Customer</h1>

        <Link to="/registered-customers">Registered Customers</Link>

        <form action="#">
          <label htmlFor="name">
            Name:
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="age">
            Age:
            <input
              type="number"
              name="age"
              id="age"
              value={age}
              onChange={this.handleChange}
            />
          </label>

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

          <button type="submit" onClick={this.handleSubmit}>
            Register
          </button>
        </form>

        {!isValid && <p>Please fill out all fields</p>}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addNewCustomer: (customer) => dispatch(addCustomer(customer)),
});

export default connect(null, mapDispatchToProps)(RegisterCustomer);
