import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearCountry } from '../actions/global_actions';

class ActiveCountry extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  renderScreen() {

    return React.createElement(
      'div',
      null,
      'We dont have anything here'
    );
  }

  changeProps() {
    this.props.clearCountry();
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  render() {
    const { activeCountry } = this.props;

    console.log('testing state props: ', activeCountry);
    if (this.state.visible) {
      if (activeCountry.country) {
        return React.createElement(
          'div',
          { className: 'countryTitle' },
          React.createElement(
            'h1',
            { onClick: (this.changeProps.bind(this), this.hide.bind(this)) },
            ' ',
            activeCountry.country
          ),
          React.createElement(
            'li',
            { className: 'country-view' },
            this.renderScreen()
          )
        );
      }
    }

    if (!this.state.visible) {
      console.log('DO NOTHING');
      return React.createElement(
        'div',
        { className: 'countryTitle' },
        React.createElement(
          'h1',
          { onClick: this.show.bind(this) },
          activeCountry.country
        )
      );
    }
  }
}

function mapStateToProps({ activeCountry }) {
  return { activeCountry };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ clearCountry }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveCountry);