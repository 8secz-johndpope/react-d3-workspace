import React from "react";
import styled from "styled-components";
import MarketContext from "../MarketContext";

export default () => (
  <MarketContext.Consumer>
    {({ sp500, nasdaqListed, nyseListed, nq100, otherListed }) => (
      <React.Fragment>
        <h4>
          SP500: <i>{sp500.length} Companies</i>
        </h4>
        {[...Object.keys(sp500[0]).values()].reduce((d, i) => d + ", " + i)}
        {nq100 && (
          <h4>
            NASDAQ100: <i>{nq100.length} Companies</i>
          </h4>
        )}
        {nq100 &&
          [...Object.keys(nq100[0]).values()].reduce((d, i) => d + ", " + i)}

        <h4>NASADAQ: {nasdaqListed.length} Listings</h4>
        {[...Object.keys(nasdaqListed[0]).values()].reduce(
          (d, i) => d + ", " + i
        )}
        <h4>NYSE: {nyseListed.length} Listings </h4>
        {[...Object.keys(nyseListed[0]).values()].reduce(
          (d, i) => d + ", " + i
        )}
        <h4>
          NYSE-OTHER-LISTED: {otherListed.length} Trade on NYSE but <u>NOT</u>
          <i>listed</i> on NYSE
        </h4>
        {[...Object.keys(otherListed[0]).values()].reduce(
          (d, i) => d + ", " + i
        )}
      </React.Fragment>
    )}
  </MarketContext.Consumer>
);
