// Import resources
import React from "react";
import ReactDOM from "react-dom";
// components
import Counter from "./components/Counter";
import Button from "./components/Button";
// Import bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  
  render() {
    return (
      <div className="container">
        <h1>Hello React</h1>
        <hr/>
        <Button className="btn btn-success"/>
        <hr/>
        <Counter />
      </div>
    );
  }
}

const SelectorRef = document.getElementById("app");
// finally
ReactDOM.render(<App />, SelectorRef);
