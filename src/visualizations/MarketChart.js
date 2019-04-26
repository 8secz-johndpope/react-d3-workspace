import React, { Component } from "react";
import styled from "styled-components";
import * as d3 from "d3";
import {MarketContext} from '../MarketContext'
// !VX
import {
  withScreenSize,
  Bar,
  GradientTealBlue,
  RadialGradient,
  GradientDarkgreenGreen,
  GradientLightgreenGreen,
  GradientOrangeRed,
  GradientPinkBlue,
  GradientPinkRed,
  GradientPurpleOrange,
  GradientPurpleRed,
  GradientPurpleTeal,
  GradientSteelPurple,
} from "@vx/vx";

//!SUIR
import {} from "semantic-ui-react";
//!LODASH
import _ from "lodash";
import PREMADE_GRADIENTS from "../constants/PREMADE_GRADIENTS";
//!END-OF-IMPORTS



const StyledSVG = styled.svg`
display:block;
  box-sizing: border-box;
overflow-x:hidden;
`;

const MarketChart = ({screenHeight:height, screenWidth:width}) => {
  return (
    <StyledSVG height={height} width={width}>
      <GradientDarkgreenGreen id='DarkgreenGreen' />
      <GradientLightgreenGreen id='LightgreenGreen' />
      <GradientOrangeRed id='OrangeRed' />
      <GradientPinkBlue id='PinkBlue' />
      <GradientPinkRed id='PinkRed' vertical={false} />
      <GradientPurpleOrange id='PurpleOrange' vertical={false} />
      <GradientPurpleRed id='PurpleRed' vertical={false} />
      <RadialGradient from='#55bdd5' to='#4f3681' id='Radial' r={"80%"} />
      <GradientSteelPurple id='SteelPurple' vertical={false} />
      <GradientTealBlue id='TealBlue' vertical={false} />
      {PREMADE_GRADIENTS.map((pg, i) => {
        return (
          <Bar
            x={(i < 5) ? ((width * i) / 5) : ((width * (i-5)) / 5)}
            y={(i < 5 )?   0 : height/2}
            width={width / 5}
            height={height / 2}
            fill={`url(#${pg})`}
            stroke='#ffffff'
            strokeWidth={8}
            rx={25}
            key={`gradient-bar-${i}`}
          />

        );
      })}
      
    </StyledSVG>
  );
};
export default withScreenSize(MarketChart);
