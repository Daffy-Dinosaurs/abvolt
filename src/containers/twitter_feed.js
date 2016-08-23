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
      visible: false,
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);

    console.log('this is selectTweets: ', selectTweets);
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

      object.text = cleanTweets[i].text.replace(/htt\w+:\/\/\S+/g, ''),

      tweetsArray.push(object);
    }

    return _.map(tweetsArray, function (tweet) {
      return (
        <div className="tweets">
            <li key={ tweet.id } className="tweet-item"> <h6>{ tweet.text }</h6>
            <a href={tweet.url} target="_blank">{tweet.url}</a>
            </li>
        </div>
      );
    });

    this.props.twitterFeed = [];
  }

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
    if (this.state.visible) {
      if (this.props.twitterFeed.statuses) {
        return (
          <div className="tweet-feed-visible">
          <h1 onClick= {
            this.clearTweet.bind(this),
            this.hide.bind(this)
          }><img src="/src/images/twitter-min.png" alt="twitter" /></h1>
          { this.renderTweets() }
          </div>
        );
      }

    }

    if (!this.state.visible || (Object.keys(this.props.twitterFeed).length === 0)) {
      return (
        <div className="tweet-feed">
          <h1 onClick={this.show.bind(this)}>
            <img src="/src/images/twitter-min.png" alt="twitter" />
          </h1>
        </div>
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
