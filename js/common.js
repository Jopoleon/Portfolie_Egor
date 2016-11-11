$(document).ready(function () {

  //resizing height of the window after swapping device
  function heightDetect() {
    $(".main_head").css("height", $(window).height());
  };
  heightDetect();
  $(window).resize(function () {
    heightDetect();
  });



  $('.toggle_mnu').click(function () {
    //    toggling menu width
    //            var toggleWidth = $(".top_mnu").width() > 1 ? "0" : //"180px";
    //            $('.top_mnu').delay(300).animate({ width: toggleWidth })
    ;
    $('.hamburger-icon').toggleClass("active");
    if ($(".hamburger-icon").hasClass("active")) {
      $('.top_mnu').animate({
        width: 180
      });
      $(".text_box").fadeIn(1200);
    } else {
      $('.top_mnu').animate({
        width: 0
      });
      $(".text_box").fadeOut(300);
    };

    //    if ($(".text_box").is(":visible")) {
    //			
    //			$(".text_box").fadeOut(300);
    //			
    //		} else {
    //			
    //			$(".text_box").fadeIn(1200);
    //			
    //		};

  });


  //  $('.toggle_mnu').click( function() {
  //        $(".text_box").fadeIn(1500);       
  //  });

  $(".top_mnu ul a").click(function () {
    $(".text_box").fadeOut(100);
    $('.top_mnu').animate({
      width: 0
    });
    $("#hamburger").not(this).removeClass('active');
    $(this).toggleClass('hamburger');

  });

  //  $(".top_mnu ul a").click(function() {
  //		$(".top_mnu").fadeOut(600);
  //		$(".hamburger-icon").toggleClass("active");
  //		$(".top_text").css("opacity", "1");
  //	}).append("<span>");


});
$(window).load(function () {
  $(".loader_inner").fadeOut();
  $(".loader").delay(400).fadeOut("slow");
})