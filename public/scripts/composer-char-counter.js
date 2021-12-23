$(document).ready(() => {

  $('#tweet-text').on('input', function () {  // Adds an on input event listner and updates the counter label in  
    const value = $(this).val();              // the new tweet box and changes color and value according to input text
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
