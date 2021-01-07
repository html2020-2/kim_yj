$(document).ready(function () {
  $('#intro a').on('click', function (e) {
    e.preventDefault();
    $(this).parent().addClass('on');
    setTimeout(function () {
      location.href = './introduce/me.html';
    }, 1000);
  })
});