import React from "react";
import ReactDOM from "react-dom";

import A from "./a";
import B from "./b";

export default class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <A />
        <B />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
