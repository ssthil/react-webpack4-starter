// Import resources
import React from "react";
import ReactDOM from "react-dom";

import Styles from './style.css'

// Import bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  
  render() {
    return (
      <div className={`container ${Styles.Main}`}>
        <h1>Hello React</h1>
        <button className="btn btn-info">Bootstrap 4 button</button>
      </div>
    );
  }
}

const SelectorRef = document.getElementById("app");
// finally
ReactDOM.render(<App />, SelectorRef);
