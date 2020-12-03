



// スムーズスクロール
$(function(){
    var headerHeight = $('header').outerHeight();
    var urlHash = location.hash;
    if(urlHash) {
      $('body,html').stop().scrollTop(0);
      setTimeout(function(){
        var target = $(urlHash);
        var position = target.offset().top - headerHeight;
        $('body,html').stop().animate({scrollTop:position}, 500);
      }, 100);
    }
    $('a[href^=#]').click(function(){
      var href= $(this).attr("href");
      var target = $(href);
      var position = target.offset().top - headerHeight;
      $('body,html').stop().animate({scrollTop:position}, 500);
      return false;
    });
  });


// inview.js
$(function(){
    $(".inview").on("inview", function (event, isInView) {
      if (isInView) {
        $(this).stop().addClass("is-show");
      } else {
        $(this).stop().removeClass("is-show");
      }
    });
  });