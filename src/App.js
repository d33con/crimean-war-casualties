import React, { Component } from "react";
import SunburstChart from "./SunburstChart";
import UpdateDataButton from "./UpdateDataButton";
import "./App.css";

import dataSetA from "./data";
import dataSetB from "./data2";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataSetA,
      dataStyle: "country"
    };

    this.onChangeData = this.onChangeData.bind(this);
  }

  onChangeData() {
    if (this.state.data === dataSetA) {
      this.setState({
        data: dataSetB,
        dataStyle: "side"
      });
    } else {
      this.setState({
        data: dataSetA,
        dataStyle: "country"
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Crimean War Casualties</h1>
          <UpdateDataButton
            onClick={this.onChangeData}
            dataStyle={this.state.dataStyle}
          />
        </div>
        <div className="container">
          <SunburstChart data={this.state.data} />
        </div>
        <div className="footer">
          By <a href="https://github.com/d33con">Oliver Bullen</a> | Data from{" "}
          <a href="https://en.wikipedia.org/wiki/Crimean_War">Wikipedia</a>
        </div>
      </div>
    );
  }
}

export default App;
