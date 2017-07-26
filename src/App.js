import React, { Component } from "react";
import { Sunburst } from "react-vis";
import "./App.css";

import data from "./data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTooltip: false,
      statName: null,
      statValue: null
    };
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseOver(e) {
    const statName = e.name;
    const statValue = e.size || e.value;
    this.setState({
      showTooltip: true,
      statName: statName,
      statValue: statValue
    });
  }

  onMouseLeave() {
    this.setState({
      showTooltip: false
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Crimean War Casualties</h1>
        </div>
        <div className="container">
          <Sunburst
            hideRootNode
            colorType="literal"
            data={data}
            height={750}
            width={750}
            onValueMouseOver={e => this.onMouseOver(e)}
            onValueMouseOut={this.onMouseLeave}
            stroke="white"
          />
          {this.state.showTooltip &&
            <div className="tooltip">
              <div>
                {this.state.statName}
              </div>
              <div>
                {this.state.statValue}
              </div>
            </div>}
        </div>
      </div>
    );
  }
}

export default App;
