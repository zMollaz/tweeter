$(document).ready(() => {

  const escape = function (str) {  // Prevents cross-site scripting
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function (tweet) { //Creates html elements for the new tweet  and uses timeago library to display time lapsed

    const $time = timeago.format(tweet.created_at);
    const $tweet = $(`
      <article class="tweet-box">
        <header class="tweet-head">
          <span class="tweet-name"><img src=${escape(tweet.user.avatars)}>${escape(tweet.user.name)}</span>
          <span class="tweet-prefix">${escape(tweet.user.handle)}</span>
        </header>
        <p class="tweet-body">${escape(tweet.content.text)}</p>
        <footer class="tweet-foot">
          <span class="footer-text">${escape($time)}</span>
          <span class="footer-fas">
            <i class="fas fa-flag tweet-box-botton"></i>
            <i class="fas fa-retweet tweet-box-botton"></i>
            <i class="fas fa-heart tweet-box-botton"></i>
          </span>
        </footer>
      </article> `)
    return $tweet;
  };

  const renderTweets = function (tweets) {  // Fetches tweets from database, creates html elements for them through (createTweetElement)
    $('#tweet-container').empty();         // and displays most recent first, resets the textarea and counter
    $('#tweet-text').val('');
    $('.counter').text('140');
    for (const tweet of tweets) {
      const $extract = createTweetElement(tweet);
      $('#tweet-container').prepend($extract);
    }
  };

  $('#new-tweet-form').submit(function (event) { // Validates chars limit, displays error message when appropriate 
    event.preventDefault();                      //and makes Ajax requests to display new tweet with out refreshing
    const serializedData = $(this).serialize();
    const text = $('#tweet-text').val();
    if (text.length === 0) {
      $.get('/', () => {
        $('.error-box').slideDown(100, function () {
          $('.error-message').text('New tweet field can not be empty')
        })
      })
    }

    if (text.length > 140) {
      $.get('/', () => {
        $('.error-box').slideDown(100, function () {
          $('.error-message').text('New tweet is too long')
        })
      })
    }

    else {
      $('.error-box').slideUp(100);
      $.post('/tweets', serializedData, () => {
        loadTweets()
      })
    }
  })

  const loadTweets = function () {  // Calls renderTWeets func to fetch tweets from the database and displays them with an Ajax get request
    $.getJSON('/tweets', function (tweets) {
      renderTweets(tweets);
    })
  }

  loadTweets();
})