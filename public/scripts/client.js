/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  const createTweetElement = function (tweet) {
    const $time = timeago.format(tweet.created_at);
    const $tweet = $(`
      <article class="tweet-box">
        <header class="tweet-head">
          <span class="tweet-name"><img src=${tweet.user.avatars}>${tweet.user.name}</span>
          <span class="tweet-prefix">${tweet.user.handle}</span>
        </header>
        <p class="tweet-body">${tweet.content.text}</p>
        <footer class="tweet-foot">
          <span class="footer-text">${$time}</span>
          <span class="footer-fas">
            <i class="fas fa-flag tweet-box-botton"></i>
            <i class="fas fa-retweet tweet-box-botton"></i>
            <i class="fas fa-heart tweet-box-botton"></i>
          </span>
        </footer>
      </article> `)
      return $tweet;
      // $('#tweet-container').append($tweet);
  };

  const renderTweets = function(data) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    for (const tweet of data) {
      const $extract = createTweetElement(tweet);
      $('#tweet-container').append($extract);
    }
  };
  renderTweets(data);
})

