$(document).ready(() => {

  $('#tweet-text').on('input', function () {
    const value = $(this).val();
    const counter = $(this).siblings().find('output');
    let count = 140 - value.length;
    
    if (count > 140) {
      count = 140 - count;
    }
    if (count < 0) {
      $(counter).css('color', 'red')
    }
    if (count >= 0) {
      $(counter).css('color', '#545149')
    }

    $(counter).text(count);

  })
});
