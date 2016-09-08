import React, { Component } from 'react';

class Intro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.showIntro = this.showIntro.bind(this);
    this.hideIntro = this.hideIntro.bind(this);
  }

  showIntro() {
    this.setState({ visible: true });
  }

  hideIntro() {
    this.setState({ visible: false });
  }

  render() {

    if (this.state.visible) {
      return React.createElement(
        "div",
        { className: ".overlay" },
        React.createElement(
          "h1",
          { onClick: this.hideIntro.bind(this) },
          "Intro"
        ),
        React.createElement(
          "h2",
          null,
          "Welcome"
        ),
        React.createElement(
          "p",
          null,
          "We are pleased to share with you HeartBeat."
        ),
        React.createElement(
          "p",
          null,
          "An application that aims to bring awareness to the awareness of important issues of our day. In this application we have highlighted three core issues that we focus our tool on."
        ),
        React.createElement(
          "p",
          null,
          "These issues are ",
          React.createElement(
            "strong",
            null,
            "Poverty, Water Pollution, and Food Scarcity"
          ),
          ". "
        ),
        React.createElement(
          "p",
          null,
          "We hope that by showing you the interelationship of these issues that you might find that in reality they are not isolated topics"
        )
      );
    }

    if (!this.state.visible) {
      return React.createElement(
        "div",
        { className: ".overlay" },
        React.createElement(
          "h1",
          { onClick: this.showIntro.bind(this) },
          "Intro"
        )
      );
    }
  }
}
export default Intro;