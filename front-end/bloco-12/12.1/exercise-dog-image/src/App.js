import React from "react";
import "./App.css";

import Loading from "./components/Loading";

class App extends React.Component {
  state = {
    loading: true,
    dogImage: "",
    dogName: "",
    savedDogs: [],
  };

  componentDidMount() {
    const localStorageSavedDogs = JSON.parse(localStorage.getItem("savedDogs"));
    if (localStorageSavedDogs) {
      const { dogImage, dogName } = localStorageSavedDogs[0];
      this.setState({
        dogImage,
        dogName,
        savedDogs: localStorageSavedDogs,
        loading: false,
      });
    } else {
      this.setState({ loading: true }, () => {
        this.fetchDogs();
      });
    }
  }

  shouldComponentUpdate(_nextProps, nextState) {
    if (nextState.dogImage.includes("terrier")) {
      return false;
    }
    return true;
  }

  componentDidUpdate(_prevProps, prevState) {
    // this.saveLastDogImage(prevState.dogImage); //Exercise - 02
    // this.alertDogRace(); //Exercise - 02
  }

  onInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  fetchDogs = async () => {
    const url = "https://dog.ceo/api/breeds/image/random";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      dogImage: data.message,
      loading: false,
    });
  };

  newDog = () => {
    this.setState({ loading: true }, () => {
      this.fetchDogs();
    });
  };

  // saveLastDogImage = (dogImage) => { //Exercise - 02
  //   localStorage.setItem("dogImage", dogImage);
  // };

  alertDogRace = () => {
    const { dogImage } = this.state;
    const url = "https://images.dog.ceo/breeds/";
    const breed = dogImage.replace(url, "").split("/")[0];
    alert(`You are a ${breed}!`); //Exercise - 02
  };

  // Requirement #3
  saveDog = () => {
    const { dogImage, dogName } = this.state;
    this.setState(
      {
        savedDogs: [{ dogImage, dogName }],
      },
      () => {
        const { savedDogs } = this.state;
        localStorage.setItem("savedDogs", JSON.stringify(savedDogs));
      }
    );
  };

  render() {
    const { loading, dogImage, dogName } = this.state;
    return (
      <div className="App">
        {loading ? (
          <Loading />
        ) : (
          <div className="image-container">
            <img src={dogImage} alt="dog" className="dog-img" />
            <div className="btn-input-container">
              <button
                type="button"
                className="next-dog-btn"
                onClick={this.newDog}
              >
                New dog
              </button>
              <input
                className="input-dog-name"
                name="dogName"
                onChange={this.onInputChange}
                value={dogName}
                type="text"
              />
              <button
                type="button"
                className="next-dog-btn"
                onClick={this.saveDog}
              >
                Save dog
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
