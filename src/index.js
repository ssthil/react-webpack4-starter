// Import resources
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  
  render() {
    return (
      <div className="container">
        <h1>Hello React</h1>
      </div>
    );
  }
}

const SelectorRef = document.getElementById("app");
// finally
ReactDOM.render(<App />, SelectorRef);
