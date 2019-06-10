import React, { Component } from "react";
import { Link } from "react-router-dom";

const navs = [
  {
    name: "Home",
    url: "/"
  },
  {
    name: "Pattern 1 - Compound components",
    url: "/pattern1"
  }
];

export default class Home extends Component {
  render() {
    return (
      <div>
        <ol>
          {navs.map((nav, index) => (
            <li key={index}>
              <Link to={nav.url}>{nav.name}</Link>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
