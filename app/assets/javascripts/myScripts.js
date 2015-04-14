var windowHeight = $(window).height();

doneResizing();

$(window).resize(function() {
	doneResizing();
});

  $("#two, #three, #four").css({'top':'100%'});

function doneResizing() {
	windowHeight = $(window).height();
    $("#content-wrapper").height(windowHeight).css({"height":windowHeight+"px"});
    $("#about").height(windowHeight).css('min-height', +windowHeight);
    $("#article").height(windowHeight).css('min-height', +windowHeight);
    $("#category").height(windowHeight).css('min-height', +windowHeight);
    $("#profile").height(windowHeight).css('min-height', +windowHeight);
    $("#about .inner").height(windowHeight).css('height', +windowHeight);
    $("#about .row.outer").height(windowHeight).css({'height':windowHeight+"px"});
    $("#category .inner").height(windowHeight).css('height', +windowHeight);
    $("#category .row.outer").height(windowHeight).css({'height':windowHeight+"px"});
    $("#profile .inner").height(windowHeight).css('height', +windowHeight);
    $("#profile .row.outer").height(windowHeight).css({'height':windowHeight+"px"});
};

$("#home").parent("#content-wrapper").css({'overflow':'hidden'});
