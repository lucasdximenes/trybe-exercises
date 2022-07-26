import React, { Component } from "react";
import "./App.css";

import Form from "./components/Form";

class App extends Component {
  state = {
    name: "",
    email: "",
    cpf: "",
    address: "",
    city: "",
    state: "",
    house: "",
    summary: "",
    post: "",
    postDescription: "",
    mouseEntered: false,
    submitted: false,
  };

  onInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      this.setState({ name: value.toUpperCase() });
    } else if (name === "address") {
      this.setState({ address: this.removeSpecialCharacters(value) });
    } else {
      this.setState({ [name]: value });
    }
  };

  removeSpecialCharacters = (str) => str.replace(/[^a-zA-Z0-9 ]/g, "");

  submitButton = (event) => {
    event.preventDefault();
    if (this.validateForm()) {
      this.setState({ submitted: true });
    } else {
      alert("Preencha todos os campos");
    }
  };

  validateForm = () => {
    const {
      name,
      email,
      cpf,
      address,
      city,
      state,
      house,
      summary,
      post,
      postDescription,
    } = this.state;

    const isValid = [
      name.length <= 40 && name.length > 0,
      email.length > 0 &&
        email.length <= 50 &&
        email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g),
      cpf.length === 11,
      address.length > 0 && address.length <= 200,
      city.length > 0 && city.length <= 28,
      state.length > 0 && state.length <= 2,
      house.length > 0,
      summary.length > 0 && summary.length <= 1000,
      post.length > 0 && post.length <= 40,
      postDescription.length > 0 && postDescription.length <= 500,
    ].every(Boolean);

    if (isValid) {
      console.log("Formulário válido");
      return true;
    } else {
      console.log("Formulário inválido");
      return false;
    }
  };

  onBlur = (event) => {
    const { name, value } = event.target;
    value.match(/^\d/)
      ? this.setState({ [name]: "" })
      : this.setState({ [name]: value });
  };

  onMouseEnter = () => {
    this.setState({ mouseEntered: true });
  };

  resetButton = (event) => {
    event.preventDefault();
    this.setState({
      name: "",
      email: "",
      cpf: "",
      address: "",
      city: "",
      state: "",
      house: "",
      summary: "",
      post: "",
      postDescription: "",
      mouseEntered: false,
      submitted: false,
    });
  };

  render() {
    const {
      name,
      email,
      cpf,
      address,
      city,
      state,
      house,
      summary,
      post,
      postDescription,
      mouseEntered,
      submitted,
    } = this.state;

    return (
      <div>
        {submitted ? (
          <div className="container">
            <div>
              <h1>{name}</h1>
              <h1>{email}</h1>
              <h1>{cpf}</h1>
              <h1>{address}</h1>
              <h1>{city}</h1>
              <h1>{state}</h1>
              <h1>{house}</h1>
              <h1>{summary}</h1>
              <h1>{post}</h1>
              <h1>{postDescription}</h1>

              <button onClick={this.resetButton}>Resetar</button>
            </div>
          </div>
        ) : (
          <div className="container">
            <Form
              name={name}
              email={email}
              cpf={cpf}
              address={address}
              city={city}
              state={state}
              house={house}
              summary={summary}
              post={post}
              postDescription={postDescription}
              onInputChange={this.onInputChange}
              submitButton={this.submitButton}
              resetButton={this.resetButton}
              onBlur={this.onBlur}
              onMouseEnter={this.onMouseEnter}
              mouseEntered={mouseEntered}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
