import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import "./table.scss";

class TableData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="table-data">
          <p>
            The update to tables splits out the scss files into multiple partial
            files with specific functionality, with a main index file bringing
            them together.
          </p>
          <Table responsive hover="true">
            <thead>
              <tr>
                <th>Breakpoint</th>
                <th>Value(px/rem)</th>
                <th>Columns</th>
                <th>Size(%)</th>
                <th>Size</th>
                <th>Padding</th>
                <th>Margin</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Small</td>
                <td>320/20</td>
                <td>4</td>
                <td>25%</td>
                <td>80px</td>
                <td>16px</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Medium</td>
                <td>672/42</td>
                <td>8</td>
                <td>12.5%</td>
                <td>80px</td>
                <td>16px</td>
                <td>16px</td>
              </tr>
              <tr>
                <td>Large</td>
                <td>1056/66</td>
                <td>16</td>
                <td>6.25%</td>
                <td>64px</td>
                <td>16px</td>
                <td>16px</td>
              </tr>
              <tr>
                <td>X-Large</td>
                <td>1312/82</td>
                <td>16</td>
                <td>6.25%</td>
                <td>80px</td>
                <td>16px</td>
                <td>16px</td>
              </tr>
              <tr>
                <td>Max</td>
                <td>1584/99</td>
                <td>16</td>
                <td>6.25%</td>
                <td>96px</td>
                <td>16px</td>
                <td>24px</td>
              </tr>
            </tbody>
          </Table>
          <p>
            For best result, test design and code at each of these standard
            breakpoints.
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default TableData;
