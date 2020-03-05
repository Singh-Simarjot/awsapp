import React, { Component } from "react";
import "./theme.scss";

class Theme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightTheme: [
        {
          id: 1,
          name: "White",
          color: "#fff"
        },
        {
          id: 2,
          name: "Gray 10",
          color: "#f4f4f4"
        }
      ],

      darkTheme: [
        {
          id: 1,
          name: "Gray 100",
          color: "#161616"
        },
        {
          id: 2,
          name: "Gray 90",
          color: "#262626"
        }
      ]
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="theme">
          <div className="light grid">
            {this.state.lightTheme.map(lightColor => (
              <div className="px-ratio" key={lightColor.id}>
                <div
                  className="theme-color"
                  style={{ background: lightColor.color }}
                >
                  <h6 className="theme-name">{lightColor.name}</h6>
                </div>
              </div>
            ))}
          </div>

          <div className="dark grid">
            {this.state.darkTheme.map(darkColor => (
              <div className="px-ratio" key={darkColor.id}>
                <div
                  className="theme-color"
                  style={{ background: darkColor.color }}
                >
                  <h6 className="theme-name">{darkColor.name}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Theme;
