import React, { Component } from 'react';
import * as d3 from 'd3';
import chroma from 'chroma-js';
import styled from "styled-components";
import Listings from "./GradientCards";
// !VX
import { Bar, RadialGradient , withParentSize} from "@vx/vx";

//!SUIR
import {} from "semantic-ui-react";
//!LODASH
import _ from "lodash";
const width = 600;
const height = 450;
const margin = {top: 20, right: 5, bottom: 20, left: 35};
const red = '#eb6a5b';
const green = '#b6e86f';
const blue = '#52b6ca';
const colors = chroma.scale([blue, green, red]);

class Chart extends Component {
  state = {
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const {data} = nextProps;
    if (!data) return {};

    return {};
  }

  render() {
    const {parentWidth, parentHeight}=this.props;
    return (
      <svg style={{margin:0,padding:0}}  width={parentWidth} height={parentHeight}>
        <RadialGradient from='#55bdd5' to='#4f3681' id='Radial' r={"80%"} />
        <Bar
          fill='url(#Radial)'
          height={parentHeight}
          width={parentWidth}
        />
      </svg>
    );
  }
}

export default withParentSize(Chart);
