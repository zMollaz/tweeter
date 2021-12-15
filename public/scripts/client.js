/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {

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
  };

  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      const $extract = createTweetElement(tweet);
      $('#tweet-container').append($extract);
    }
  };

  $('#new-tweet-form').submit(function(event) {
    event.preventDefault();
    const serializedData = $(this).serialize();
    
    $.post('/tweets', serializedData, () => {
    })
  })
  
  const loadTweets = function () {
    $.get('/tweets', function(tweets) {
      renderTweets(tweets);
    })
  };
  
  loadTweets();
})

