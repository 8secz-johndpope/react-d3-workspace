import React from "react";
import styled from "styled-components";
import MarketContext from "../MarketContext";
const StyledOptionChain = styled.div`
  table {
    border-collapse: collapse;
    padding: 0;
    empty-cells: hide;
    background: #666;
    height:10px;
    font-size:50%
  }
  tr{
      font:10px;
  }
  td{
      padding:0%;
      height:100%;
  }
`;
export default () => {
  console.log("inside option chain function component");
  return (
    <MarketContext.Consumer>
      {({ optionChain }) => (
        <StyledOptionChain>
          <div dangerouslySetInnerHTML={{ __html: `'${optionChain}'` }} />
        </StyledOptionChain>
      )}
      {/* <div dangerouslySetInnerHTML={{ __html: '<h1>OPTION CHAIN </h1>'}} /> */}
    </MarketContext.Consumer>
  );
};
