$(document).ready(function () {
  var timer = 0;
  var scrollY;

  // #aboutme 전체를 불투명도 0에서 1로 변경하지만 내부 자식중 .fade를 가진 것은 별도로 불투명도 0으로 작성되어 있다
  setTimeout(function () {
    $('#aboutme').addClass('active');
  }, 500);

  $(window).on('scroll', function () {
    clearTimeout(timer);

    timer = setTimeout(function () {
      scrollY = $(this).scrollTop();
      $('.fade').each(function () {
        var cntY = $(this).offset().top - $(window).height()*0.3;
        if (scrollY > cntY) $(this).addClass('on');

      });
    }, 50);
  });

});