import React, { Component } from "react";
import * as d3 from "d3";
import "./App.css";
import LineChart from "./visualizations/LineChart";
import BarChart from "./visualizations/BarChart";
import RadialChart from "./visualizations/RadialChart";
import Chart from "./visualizations/Chart";
import MarketChart from './visualizations/MarketChart'
import {MarketContextProvider } from "./MarketContext";
import Listings from './components/Listings'
import OptionChain from "./components/OptionChain";
import MarketForces from './components/MarketForces'
import FisheyeSlideshow from './components/FisheyeSlideshow'
import StyledChart from "./components/StyledChart";
import styled from 'styled-components'
const AppStyled = styled.div`
   display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center; 
  background: #e6e6e6;
  padding:0;
  margin:0 ;
  top:0;
  left:0;
  overflow-x:hidden;
  overflow:hidden;
`;


const App=()=>
{
  return (<AppStyled>
    <FisheyeSlideshow/>
    
  <FisheyeSlideshow />
    </AppStyled>
    )
}

class Charts extends Component {
  state = {
    temps: {},
    city: "sf" // city whose temperatures to show
  };
  componentDidMount() {
    Promise.all([
      fetch(`${process.env.PUBLIC_URL}/sf.json`),
      fetch(`${process.env.PUBLIC_URL}/ny.json`),
      fetch(`${process.env.PUBLIC_URL}/am.json`)
    ])
      .then(responses => Promise.all(responses.map(resp => resp.json())))
      .then(([sf, ny, am]) => {
        sf.forEach(day => (day.date = new Date(day.date)));
        ny.forEach(day => (day.date = new Date(day.date)));
        // am.forEach(day => day.date = new Date(day.date));
        this.setState({ temps: { sf, ny, am } });
      });
  }

  updateSelection = e => {
    this.setState({ city: e.target.value });
  };

  render() {
    const data = this.state.temps[this.state.city];

    return (
      <AppStyled className='App'>
        {/* <CompanyContainer></CompanyContainer> */}
        <FisheyeSlideshow />
        <h1>
          <select name='city' onChange={this.updateSelection}>
            {[
              { label: "San Francisco", value: "sf" },
              { label: "New York", value: "ny" },
              { label: "NASDAQ-100", value: "nq100" }
            ].map(option => {
              return (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              );
            })}
          </select>
        </h1>
        <p>
          The goal here is to make cool things, not necessarily useful
          things...
        </p>
        <LineChart data={data} />
        <BarChart data={data} />
        <br />
        <StyledChart style={{ position: "center" }}>
          <Chart data={data} />
        </StyledChart>
        <RadialChart data={data} />
        <MarketContextProvider>
          <Listings />
          <OptionChain />
          <MarketChart />
          <MarketForces />
        </MarketContextProvider>

        <p>*READ THE PROPS*</p>
        <p>{JSON.stringify(this.state)}</p>
      </AppStyled>
    );
  }
}

export default App;
