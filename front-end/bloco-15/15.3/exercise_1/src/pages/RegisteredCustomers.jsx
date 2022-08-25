import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCustomer } from "../store/actions";

class RegisteredCustomers extends Component {
  state = {
    sorted: false,
    sortedCustomers: [],
  };

  sortByName = () => {
    const { customers } = this.props;
    const { sorted } = this.state;
    const sortedCustomers = [...customers].sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      return 0;
    });
    this.setState({ sorted: !sorted, sortedCustomers });
  };

  deleteAction = (customer) => {
    const { deleteACustomer } = this.props;
    deleteACustomer(customer);
  };

  render() {
    const { email, password, customers } = this.props;
    const { sorted, sortedCustomers } = this.state;
    return (
      <div>
        {email && password ? (
          <div>
            <h1>Registered Customers</h1>
            <Link to="/register-customer">Register Customer</Link>

            {customers.length > 0 ? (
              <div>
                <button type="button" onClick={this.sortByName}>
                  Sort by Name
                </button>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sorted
                      ? sortedCustomers.map((customer, index) => {
                          const { name, age, email } = customer;
                          return (
                            <tr key={index}>
                              <td>{name}</td>
                              <td>{age}</td>
                              <td>{email}</td>
                              <td>
                                <button
                                  type="button"
                                  onClick={() => {
                                    this.deleteAction(customer);
                                  }}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          );
                        })
                      : customers.map((customer, index) => {
                          const { name, age, email } = customer;
                          return (
                            <tr key={index}>
                              <td>{name}</td>
                              <td>{age}</td>
                              <td>{email}</td>
                              <td>
                                <button
                                  type="button"
                                  onClick={() => {
                                    this.deleteAction(customer);
                                  }}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                  </tbody>
                </table>
              </div>
            ) : (
              <p>No customers registered yet!</p>
            )}
          </div>
        ) : (
          <h1>You are not logged in!</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.loginReducer.email,
  password: state.loginReducer.password,
  customers: state.registerCustomerReducer.customers,
});

const mapDispatchToProps = (dispatch) => ({
  deleteACustomer: (customer) => dispatch(deleteCustomer(customer)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisteredCustomers);
