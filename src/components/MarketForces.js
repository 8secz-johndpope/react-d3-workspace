import { withScreenSize } from "@vx/vx";
import React, { useContext } from "react";
import * as d3 from "d3";
import MarketContext from "../MarketContext";
import sp500 from "../mock-data/sp500-constituents-financials.json";

class MarketForces extends React.Component {
  state = {
    containerRef: React.createRef(),
    /*SCALES*/
    sectorScale: d3
      .scaleOrdinal()
      .domain([...new Set(sp500.map(item => item.Sector))])
      .range([...d3.schemeCategory10]),
    marketCapScale: d3
      .scaleLinear()
      .domain(d3.extent(sp500, d => d["Market Cap"]))
      .range([1, 50]),
    /*FORCE LAYOUT SIMULATION*/
    simulation: d3
      .forceSimulation()
      .force("center", d3.forceCenter(this.props.screenWidth / 2, this.props.screenHeight / 2))
      .force("charge", d3.forceManyBody().strength(-2))
      //   .force("link", d3.forceLink().distance(20))
      .force("collide", d3.forceCollide(1.1))
      .stop()
  };
  componentWillMount() {
    this.container = d3.select(this.state.containerRef.current);
    this.state.simulation.on("tick", this.forceTick);
  }

  componentDidMount() {
    this.renderCircles();
    // console.table(sp500);
    this.state.simulation
      .nodes(sp500)
      .alpha(1)
      .restart();
  }

  componentDidUpdate() {
    this.renderCircles();
  }

  renderCircles() {
    this.circles = this.container
      .selectAll("circle")
      .data(sp500, data => data.symbol);

    // exit
    this.circles.exit().remove();
    // enter+update
    this.circles
      .enter()
      .append("circle")
      .merge(this.circles)
      .attr("r", d => this.state.marketCapScale(d["Market Cap"]))
      .attr("opacity", 0.5)
      .attr("fill", d => this.state.sectorScale(d.Sector));
  }

  forceTick = () => {
    this.circles = this.circles.attr("cx", d => d.x).attr("cy", d => d.y);
  };

  render() {
    console.log(sp500);
    return (
      <MarketContext.Consumer>
        {({ sp500 }) => (
          <svg
            ref={this.state.containerRef}
            width={this.props.screenWidth}
            height={this.props.screenHeight}
          />
        )}
      </MarketContext.Consumer>
    );
  }
}

export default withScreenSize(MarketForces);
