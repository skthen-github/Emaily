import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";
import { MOBILE_DISPLAY, DESKTOP_DISPLAY } from "./displayTypes";
import M from "materialize-css/dist/js/materialize.min.js";

class Header extends Component {
  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250,
    });
  }

  renderContent(displayForm) {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );

      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="2">
            <div className="divider" />
          </li>,
          <li
            key="3"
            style={
              displayForm === DESKTOP_DISPLAY ? { margin: "0 10px" } : null
            }
          >
            <a>Credits: {this.props.auth.credits}</a>
          </li>,
          <li key="4">
            <div className="divider" />
          </li>,
          <li key="5">
            <a href="/api/logout">Logout</a>
          </li>,
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            style={{ margin: "0 10px" }}
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            Emaily
          </Link>
          <a
            href="#"
            data-target="mobile-demo"
            className="right sidenav-trigger"
          >
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            {this.renderContent(DESKTOP_DISPLAY)}
          </ul>
          <ul className="sidenav" id="mobile-demo">
            {this.renderContent(MOBILE_DISPLAY)}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
