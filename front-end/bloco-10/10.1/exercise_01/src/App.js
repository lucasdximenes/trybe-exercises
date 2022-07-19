import React from "react";

const Task = (value) => {
  return <li>{value}</li>;
};

const appointments = ["dormir", "comer", "trabalhar"];

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>{appointments.map(Task)}</ul>
      </div>
    );
  }
}

export default App;
