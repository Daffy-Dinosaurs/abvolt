import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';;
import { clearTweets, getTweets } from '../actions/media_actions';
import { selectTweets } from '../selectors/tweet_selector';

//TODO: this needs a rebuild. separate out the render statement in to methods
//
class TwitterFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  renderTweets() {
    let tweetFeed = selectTweets(this.props.issue.issue, this.props.twitterFeed);

    if (tweetFeed.length > 1) {
      tweetFeed.shift();
    }

    //NOTE: consider abstracting this out to a selector
    var cleanTweets = tweetFeed.statuses;
    var cleanTweetsObject = {};
    var tweetsArray = [];
    var regex = new RegExp(/htt\w+:\/\/\S+/);

    for (var i = 0; i < cleanTweets.length; i++) {
      var object = {};
      object.id = cleanTweets[i].id;

      if (cleanTweets[i].text.match(/htt\w+:\/\/\S+/)) {
        object.url = cleanTweets[i].text.match(/htt\w+:\/\/\S+/)[0];
      } else {
        object.url = '';
      }

      object.text = cleanTweets[i].text.replace(/htt\w+:\/\/\S+/g, ''), tweetsArray.push(object);
    }

    return _.map(tweetsArray, function (tweet) {
      return React.createElement(
        'div',
        { className: 'tweets' },
        React.createElement(
          'li',
          { key: tweet.id, className: 'tweet-item' },
          ' ',
          React.createElement(
            'h6',
            null,
            tweet.text
          ),
          React.createElement(
            'a',
            { href: tweet.url, target: '_blank' },
            tweet.url
          )
        )
      );
    });

    this.props.twitterFeed = [];
  }

  //NOTE: Highly considering removing this. Goes against Redux best practice
  clearTweet() {
    this.props.clearTweets();
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  render() {
    const { twitterFeed } = this.props;

    if (this.state.visible) {
      if (twitterFeed.water_tweets || twitterFeed.poverty_tweets || twitterFeed.food_tweets) {
        return React.createElement(
          'div',
          { className: 'tweet-feed-visible' },
          React.createElement(
            'h1',
            { onClick: (this.clearTweet.bind(this), this.hide.bind(this)) },
            React.createElement('img', { src: '/src/images/twitter-min.png', alt: 'twitter' })
          ),
          this.renderTweets()
        );
      }
    }

    if (!this.state.visible || Object.keys(this.props.twitterFeed).length === 0) {
      return React.createElement(
        'div',
        { className: 'tweet-feed' },
        React.createElement(
          'h1',
          { onClick: this.show.bind(this) },
          React.createElement('img', { src: '/src/images/twitter-min.png', alt: 'twitter' })
        )
      );
    }
  }
}

function mapStateToProps({ twitterFeed, issue }) {
  return { twitterFeed, issue };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTweets, clearTweets }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TwitterFeed);