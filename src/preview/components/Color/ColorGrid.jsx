import React, { Component } from "react";
import "./color.scss";

class ColorGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorPlatte: [
        {
          id: 1,
          color: "rgb(0,0,0)"
        },
        {
          id: 2,
          color: "rgb(0, 17, 65)"
        },
        {
          id: 3,
          color: "rgb(0, 29, 108)"
        },
        {
          id: 4,
          color: "rgb(0, 45, 156)"
        },
        {
          id: 5,
          color: "rgb(0, 67, 206)"
        },
        {
          id: 6,
          color: "rgb(15, 98, 254)"
        },
        {
          id: 7,
          color: "rgb(69, 137, 255)"
        },
        {
          id: 8,
          color: "rgb(120, 169, 255)"
        },
        {
          id: 9,
          color: "rgb(166, 200, 255)"
        },
        {
          id: 10,
          color: "rgb(208, 226, 255)"
        },
        {
          id: 11,
          color: "rgb(237, 245, 255)"
        },
        {
          id: 12,
          color: "rgb(255, 255, 255)"
        }
      ],

      colorPlatte2: [
        {
          id: 1,
          color: "rgb(0,0,0)"
        },
        {
          id: 2,
          color: "rgb(22, 22, 22)"
        },
        {
          id: 3,
          color: "rgb(38, 38, 38)"
        },
        {
          id: 4,
          color: "rgb(57, 57, 57)"
        },
        {
          id: 5,
          color: "rgb(82, 82, 82)"
        },
        {
          id: 6,
          color: "rgb(111, 111, 111)"
        },
        {
          id: 7,
          color: "rgb(141, 141, 141)"
        },
        {
          id: 8,
          color: "rgb(168, 168, 168)"
        },
        {
          id: 9,
          color: "rgb(198, 198, 198)"
        },
        {
          id: 10,
          color: "rgb(224, 224, 224)"
        },
        {
          id: 11,
          color: "rgb(244, 244, 244)"
        },
        {
          id: 12,
          color: "rgb(255, 255, 255)"
        }
      ],

      alertColorPlatte: [
        {
          id: 1,
          color: "rgb(218, 30, 40)"
        },
        {
          id: 2,
          color: "rgb(255, 131, 43)"
        },
        {
          id: 3,
          color: "rgb(253, 209, 58)"
        },
        {
          id: 4,
          color: "rgb(36, 161, 72)"
        }
      ]
    };
  }
  render() {
    const { data } = this.props;
    return (
      <React.Fragment>
        <div className="color-grid">
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          {/* <h2>Color anatomy</h2> */}
          {/* <p>
            Carbon’s default themes are derived from the IBM Design Language
            color palette. The Neutral Gray family is dominant in the default
            themes, making use of subtle shifts in value to help organize
            content into distinct zones.
          </p>
          <p>
            The core Blue family serves as the primary action color across all
            IBM products and experiences. Additional colors are used sparingly
            and purposefully.
          </p> */}

          {data.content.colorsPalettes.map(row => (
            <div key={row.id}>
              <div className="color-pattern"  id ={row.id}>
                {row.shades.map(item => (
                  <div
                    className="color-grid-box"
                    style={{ backgroundColor: item.color }}
                    key={item.id}
                  ></div>
                ))}
              </div>
              <p>{row.title}</p>
            </div>
          ))}

          {/* <div className="color-pattern">
            {this.state.colorPlatte.map(platte => (
              <div
                key={platte.id}
                className="color-grid-box"
                style={{ background: platte.color }}
              ></div>
            ))}

            {this.state.colorPlatte.map(platte => (
              <div
                key={platte.id}
                className="color-grid-box"
                style={{ background: platte.color }}
              ></div>
            ))}
          </div>

          <div className="color-pattern">
            {this.state.colorPlatte2.map(platte2 => (
              <div
                key={platte2.id}
                className="color-grid-box"
                style={{ background: platte2.color }}
              ></div>
            ))}
          </div>

          <div className="color-pattern">
            {this.state.alertColorPlatte.map(alert => (
              <div
                key={alert.id}
                className="color-grid-box"
                style={{ background: alert.color }}
              ></div>
            ))}
          </div> 
          <p>Alerts Colors</p>*/}
        </div>
      </React.Fragment>
    );
  }
}

export default ColorGrid;
