/* ALXS Design - Frontpage jQuery */
/* Written by Alex Scott aka ALXS */
/* Started on Thursday 2 Apr 2015 */

/*********** Revision 1 ***********/

(function($, Math, undefined) {
  $.fn.alxsFrontpage = function(action) {

    var options = $.extend({
      more:               "read-more",
      less:               "read-less",
      wrapper:            "home",
      section:            "outer"
    }, options );
    
    var windowHeight = $(window).height();

    $("#home").children(".outer").css({'position': 'absolute',"height":windowHeight+"px",'margin':'0'}).eq(0).css({'top':'0','display':'table'}).children(".read-more").fadeIn(500).end().siblings().css({'top':'100%','display':'none'});

/* Page 1 */
$(".read-less.one").click(function(e){
  e.preventDefault();
  $(".read-more.one").fadeOut('500');
  $(".read-less.one").fadeOut('500', function() {
    $("#one").animate({'top':'100%'}, '500', function() {
      $(this).css({'display':'none','top':'-100%'});
    });
    $("#two, #three").css({'top':'-100%'});
    $("#four").css({'display': 'table','top':'-100%'}).animate({'top':'0%'}, '500', function() {
      $(".read-less.four").fadeIn('250');
      $(".read-more.four").fadeIn('250');
    });
  });
});
$(".read-more.one").click(function(e){
  e.preventDefault();
  $(".read-less.one").fadeOut('500');
  $("#notice").fadeOut('500');
  $(".read-more.one").fadeOut('500', function() {
    $("#one").animate({'top':'-100%'}, '500', function() {
      $(this).css({'display':'none'});
    });
    $("#two").css({'display': 'table'}).animate({'top':'0%'}, '500', function() {
      $(".read-less.two").fadeIn('250');
      $(".read-more.two").fadeIn('250');
    });
  });
});
/* Page 2 */
$(".read-less.two").click(function(e){
  e.preventDefault();
  $(".read-more.two").fadeOut('500');
  $(".read-less.two").fadeOut('500', function() {
    $("#two").animate({'top':'100%'}, '500', function() {
      $(this).css({'display':'none'});
    });
    $("#one").css({'display': 'table'}).animate({'top':'0%'}, '500', function() {
      $(".read-more.one").fadeIn('250');
      $(".read-less.one").fadeIn('250');
    });
  });
});
$(".read-more.two").click(function(e){
  e.preventDefault();
  $(".read-less.two").fadeOut('500');
  $(".read-more.two").fadeOut('500', function() {
    $("#two").animate({'top':'-100%'}, '500', function() {
      $(this).css({'display':'none'});
    });
    $("#three").css({'display': 'table'}).animate({'top':'0%'}, '500', function() {
      $(".read-less.three").fadeIn('250');
      $(".read-more.three").fadeIn('250');
    });
  });
});
/* Page 3 */
$(".read-less.three").click(function(e){
  e.preventDefault();
  $(".read-more.three").fadeOut('500');
  $(".read-less.three").fadeOut('500', function() {
    $("#three").animate({'top':'100%'}, '500', function() {
      $(this).css({'display':'none'});
    });
    $("#two").css({'display': 'table'}).animate({'top':'0%'}, '500', function() {
      $(".read-more.two").fadeIn('250');
      $(".read-less.two").fadeIn('250');
    });
  });
});
$(".read-more.three").click(function(e){
  e.preventDefault();
  $(".read-less.three").fadeOut('500');
  $(".read-more.three").fadeOut('500', function() {
    $("#three").animate({'top':'-100%'}, '500', function() {
      $(this).css({'display':'none'});
    });
    $("#four").css({'display': 'table'}).animate({'top':'0%'}, '500', function() {
      $(".read-less.four").fadeIn('250');
      $(".read-more.four").fadeIn('250');
    });
  });
});
/* Page 4 */
$(".read-less.four").click(function(e){
  e.preventDefault();
  $(".read-more.four").fadeOut('500');
  $(".read-less.four").fadeOut('500', function() {
    $("#four").animate({'top':'100%'}, '500', function() {
      $(this).css({'display':'none'});
    });
    $("#three").css({'display': 'table'}).animate({'top':'0%'}, '500', function() {
      $(".read-more.three").fadeIn('250');
      $(".read-less.three").fadeIn('250');
    });
  });
});
$(".read-more.four").click(function(e){
  e.preventDefault();
  $(".read-less.four").fadeOut('500');
  $(".read-more.four").fadeOut('500', function() {
    $("#four").animate({'top':'-100%'}, '500', function() {
      $(this).css({'display':'none','top':'100%'});
    });
    $("#two, #three").css({'top':'100%','display':'none'});
    $("#one").css({'display': 'table','top':'100%'}).animate({'top':'0%'}, '500', function() {
      $(".read-less.one").fadeIn('250');
      $(".read-more.one").fadeIn('250');
    });
  });
});



 
  };
}( jQuery ));
