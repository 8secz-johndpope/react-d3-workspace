import * as d3 from "d3";
import React from "react";
import nyseListed from "./mock-data/nyse-listed.json";
import nasdaqListed from "./mock-data/nasdaq-listed.json";
import sp500 from "./mock-data/sp500-constituents-financials.json";
import otherListed from "./mock-data/nyse-other-listed.json";
const MarketContext = React.createContext();  
const barrons_eod = {
  etfs: "www.barrons.com/public/resources/documents/USETFs.csv",
  nyse: "www.barrons.com/public/resources/documents/NYSE.csv",
  amex: "www.barrons.com/public/resources/documents/AMEX.csv",
  nasdaq: "www.barrons.com/public/resources/documents/Nasdaq.csv",
  nasdaqCapitalMarkets: "www.barrons.com/public/resources/documents/SCAP.csv",
  preferreds: "www.barrons.com/public/resources/documents/Preferreds.csv"
};
class MarketContextProvider extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    nyseListed,
    nasdaqListed,
    otherListed,
    sp500
  };

  componentDidMount() {
    this.parseNasdaq100();
    this.parseOptionChains();
    this.parseWsjDSR();
  }
  parseOptionChains = async () => {
    const file = await d3.html(
      `${process.env.PUBLIC_URL}/2019-04-06-StockAndOptionQuoteForAIG.html`
    );
    console.log(file);
    const optionChain = file.body.outerHTML;
    this.setState({ optionChain });
  };
  parseWsjDSR = async () => {
    const all = await Promise.all(
      Object.keys(barrons_eod).map(async key => {
        return await d3.csv(
          `https://cors-anywhere.herokuapp.com/${barrons_eod[key]}`
        );
      })
    );
    this.setState({ ...all });
    console.log(this.state);
  };

  parseNasdaq100 = async () => {
    //https://www.nasdaq.com/quotes/nasdaq-100-stocks.aspx?render=download

    const rows = await d3.csv(`${process.env.PUBLIC_URL}/nasdaq100.csv`);
    const nq100 = rows.map(row => {
      const listing = {};
      //console.log(row);
      listing["Symbol"] = row["Symbol"];
      listing["Name"] = row["Name"];
      listing["lastsale"] = +row["lastsale"];
      listing["netchange"] = +row["netchange"];
      listing["pctchange"] = +row["pctchange"];
      listing["share_volume"] = +row["share_volume"];
      listing["Nasdaq100_points"] = +row["Nasdaq100_points"];
      return listing;
    });
    this.setState({
      nq100
    });
  };
  render() {
    return (
      <MarketContext.Provider
        value={{
          ...this.state
        }}>
        {this.props.children}
      </MarketContext.Provider>
    );
  }
}

export default MarketContext;
export { MarketContextProvider };
