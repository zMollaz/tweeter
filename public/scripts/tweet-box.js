$(document).ready(function () {

  const borderReg = function () {
    $(this).css({'box-shadow':'none'})
  }

  const borderOnHover = function () {
    $(this).css({'box-shadow':'10px 10px #cad6f6'})
  }

  const bottonReg = function () {
    $(this).css({'color': '#4056A1'})
  }

  const bottonOnHover = function () {
    $(this).css({'color': '#e8b200'})
  }
  setTimeout(() => {
    $('.tweet-box').hover(borderOnHover, borderReg);
    $('.tweet-box-botton').hover(bottonOnHover, bottonReg);
  }, 500);
  
});