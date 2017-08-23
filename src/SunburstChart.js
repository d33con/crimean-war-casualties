import React, { Component } from "react";
import PropTypes from "prop-types";
import { Sunburst } from "react-vis";

class SunburstChart extends Component {
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
    console.log("out");
    this.setState({
      showTooltip: false
    });
  }

  render() {
    const animProps = {
      damping: 20,
      stiffness: 100
    };
    return (
      <div>
        <Sunburst
          hideRootNode
          colorType="literal"
          data={this.props.data}
          height={700}
          width={700}
          onValueMouseOver={e => this.onMouseOver(e)}
          onValueMouseOut={this.onMouseLeave}
          stroke="white"
          animation={animProps}
        />
        {this.state.showTooltip &&
          <div className="tooltip">
            <div> {this.state.statName} </div>{" "}
            <div className="tooltip-value"> {this.state.statValue} </div>{" "}
          </div>}
      </div>
    );
  }
}

SunburstChart.propTypes = {
  data: PropTypes.object
};

export default SunburstChart;
