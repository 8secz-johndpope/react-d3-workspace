import React from "react";
import {
  GradientDarkgreenGreen,
  Bar,
  GradientLightgreenGreen,
  GradientOrangeRed,
  GradientPinkBlue,
  GradientPinkRed,
  GradientPurpleOrange,
  GradientPurpleRed,
  GradientPurpleTeal,
  GradientSteelPurple,
  GradientTealBlue,
  RadialGradient,
  withParentSize
} from "@vx/vx";
import PREMADE_GRADIENTS from "../constants/PREMADE_GRADIENTS";
const GradientBars = ({
  width = 1600,
  height = 900,
  margin = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
}) => {
  console.log(width);
  console.log(height);
  const w = width / PREMADE_GRADIENTS.length;
  const h = (height - margin.bottom) / 3;
  return (
    <svg width={1600} height={900}>
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
            x={0}
            y={100 * i}
            width={1600 / 5}
            height={900 / 10}
            fill={`url(#${pg})`}
            stroke='#ffffff'
            strokeWidth={8}
            rx={25}
          />
        );
      })}
    </svg>
  );
};

export default withParentSize(GradientBars);
