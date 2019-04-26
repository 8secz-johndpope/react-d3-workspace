import react from "react";
import { Table } from "semantic-ui-react";
import styled from "styled-components";
const StyledQuote = styled.div``;
const ListingQuote = ({ symbol, timestamp, }) => {
  return (
    <StyledQuote>
      <h2>
        Stock quote and option quote for {symbol} on {timestamp}
      </h2>
      <caption>UNDERLYING</caption>
      <Table border='1'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>LAST</Table.HeaderCell>
            <Table.HeaderCell>LX</Table.HeaderCell>
            <Table.HeaderCell>Net Chng</Table.HeaderCell>
            <Table.HeaderCell>BID</Table.HeaderCell>
            <Table.HeaderCell>BX</Table.HeaderCell>
            <Table.HeaderCell>ASK</Table.HeaderCell>
            <Table.HeaderCell>AX</Table.HeaderCell>
            <Table.HeaderCell>Size</Table.HeaderCell>
            <Table.HeaderCell>Volume</Table.HeaderCell>
            <Table.HeaderCell>Open</Table.HeaderCell>
            <Table.HeaderCell>High</Table.HeaderCell>
            <Table.HeaderCell>Low</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>45.05</Table.Cell>
            <Table.Cell>N</Table.Cell>
            <Table.Cell class='up'>+.45</Table.Cell>
            <Table.Cell>44.80</Table.Cell>
            <Table.Cell>P</Table.Cell>
            <Table.Cell>45.29</Table.Cell>
            <Table.Cell>P</Table.Cell>
            <Table.Cell>4 x 4</Table.Cell>
            <Table.Cell>4,063</Table.Cell>
            <Table.Cell>44.70</Table.Cell>
            <Table.Cell>45.30</Table.Cell>
            <Table.Cell>44.66</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <caption>UNDERLYING EXTRA INFO</caption>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Yield</Table.HeaderCell>
            <Table.HeaderCell>PE</Table.HeaderCell>
            <Table.HeaderCell>Div</Table.HeaderCell>
            <Table.HeaderCell>Div.Freq</Table.HeaderCell>
            <Table.HeaderCell>Ex Div.Date</Table.HeaderCell>
            <Table.HeaderCell>52High</Table.HeaderCell>
            <Table.HeaderCell>52Low</Table.HeaderCell>
            <Table.HeaderCell>Shares</Table.HeaderCell>
            <Table.HeaderCell>FastBeta</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>2.84%</Table.Cell>
            <Table.Cell>-4505</Table.Cell>
            <Table.Cell>.32</Table.Cell>
            <Table.Cell>Q</Table.Cell>
            <Table.Cell>3/14/19</Table.Cell>
            <Table.Cell>56.79</Table.Cell>
            <Table.Cell>36.16</Table.Cell>
            <Table.Cell>869,736,490</Table.Cell>
            <Table.Cell>1.08</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </StyledQuote>
  );
};
export default ListingQuote;
