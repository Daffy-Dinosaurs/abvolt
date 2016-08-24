import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearNews, getNews } from '../actions/media_actions';

class NewsOutlet extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  showStory() {
    return this.props.newsFeed.response.results.map(article => {
      console.log(article);
      return React.createElement(
        'div',
        { className: 'newsfeed' },
        React.createElement(
          'li',
          { key: article.webUrl, className: 'newsfeed-item' },
          React.createElement(
            'h5',
            null,
            article.webTitle
          ),
          React.createElement(
            'a',
            { href: article.webUrl },
            'Read More...'
          )
        )
      );
    });
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  clearFeed() {
    this.props.clearNews();
  }

  render() {
    if (this.state.visible) {
      if (this.props.newsFeed.response) {
        return React.createElement(
          'div',
          { className: 'newsfeed-feed-visible' },
          React.createElement(
            'h3',
            { onClick: (this.clearFeed.bind(this), this.hide.bind(this)) },
            'Local News'
          ),
          this.showStory()
        );
      }
    }

    if (!this.state.visible || Object.keys(this.props.newsFeed).length === 0) {

      return React.createElement(
        'div',
        { className: 'newsfeed-feed' },
        React.createElement(
          'h1',
          { onClick: this.show.bind(this) },
          React.createElement('img', { src: '/src/images/news-min.png', alt: 'news' })
        )
      );
    }
  }
}

function mapStateToProps({ newsFeed }) {
  return { newsFeed };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getNews, clearNews }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsOutlet);