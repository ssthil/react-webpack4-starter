import React, { Component, ReactFragment } from "react";

const Button = props => {
  return (
    <button
      className={`${props.className}`}
      onClick={() => props.clickEvent(props.incrementValue)}
    >
      {props.incrementValue}
    </button>
  );
};

const Result = props => {
  return <div>{props.result}</div>;
};

class Counter extends React.Component {
  state = { count: 0 };

  handlerClick = incrementValue => {
    this.setState(prevState => ({
      count: prevState.count + incrementValue
    }));
  };

  render() {
    return (
      <div>
        <h3>Counter App</h3>
        <div className="btn-group">
          <Button
            className="btn btn-info"
            incrementValue={1}
            clickEvent={this.handlerClick}
          />
          <Button
            className="btn btn-warning"
            incrementValue={5}
            clickEvent={this.handlerClick}
          />
          <Button
            className="btn btn-danger"
            incrementValue={10}
            clickEvent={this.handlerClick}
          />
        </div>
        <hr/>
        <Result result={this.state.count} />
      </div>
    );
  }
}

export default Counter;
