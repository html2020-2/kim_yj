$(document).ready(function () {
  $('.link a').on('click', function (e) {
    e.preventDefault();
    var $tg = $(this);
    $(this).parent().addClass('on');
    setTimeout(function () {
      if ($tg.parent().is('#intro')) {
        location.href = './introduce/me.html';
      } else {
        location.href = './project/project.html';
      }
    }, 1000);
  });
});